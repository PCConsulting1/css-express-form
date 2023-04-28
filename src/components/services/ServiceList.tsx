import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ListContainer from '../ListContainer';
import ServiceCard from './ServiceCard';
import services from './services.data';

export default function () {
  return (
    <>
      <Box
        sx={{
          width: '100vw',
          paddingTop: 20,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" component="div" gutterBottom>
          Services
        </Typography>
      </Box>
      <ListContainer>
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </ListContainer>
    </>
  );
}
