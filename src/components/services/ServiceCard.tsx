import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function ({ icon, title, description }: Props) {
  return (
    <Card elevation={10} sx={{ minWidth: 300, margin: 1, padding: 1 }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ bgcolor: blue[700], width: 100, height: 100 }}>
            {icon}
          </Avatar>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
