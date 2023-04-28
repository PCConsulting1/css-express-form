import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

/*
 * !important button with modal to check if college requires CSS Profile
 */
export default function WelcomeBanner() {
  return (
    <Container sx={{ paddingTop: 15, paddingBottom: 15 }}>
      <Box>
        <Typography variant="h2">College Board CSS form simplified</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien
          eget mi proin sed libero enim.
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Box>
    </Container>
  );
}
