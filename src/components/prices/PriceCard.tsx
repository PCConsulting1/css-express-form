import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';

interface Props {
  title: string;
  description: string;
  bullets?: Array<string>;
  price: string;
}

export default function ({ title, description, bullets = [], price }: Props) {
  return (
    <Card
      elevation={10}
      sx={{
        width: 275,
        margin: 1,
        padding: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <Box>
        <List>
          {bullets.map((bullet) => (
            <ListItem key={bullet} disablePadding>
              <ListItemIcon>
                <CheckIcon sx={{ color: 'primary.dark' }} />
              </ListItemIcon>
              <ListItemText primary={bullet} />
            </ListItem>
          ))}
        </List>
        <Typography variant="body2" color="text.secondary">
          starting at
        </Typography>
        <Typography variant="h5" color="text.primary">
          {price}
        </Typography>
        <CardActions>
          <Button size="small" color="primary" variant="contained">
            Get Started
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
