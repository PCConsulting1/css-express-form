import { PropsWithChildren } from 'react';
import Container from '@mui/material/Container';

export default function ({ children }: PropsWithChildren) {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        margin: '20px 0',
        padding: 0,
        width: 250,
      }}
    >
      {children}
    </Container>
  );
}
