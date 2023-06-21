import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import EmailGuesserForm from '../components/EmailGuesser/EmailGuesserForm';

const style = {
  container: {
    boxShadow: 5,
    borderRadius: '20px',
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '80px 40px',
    paddingTop: '40px',
  },
};

const EmailGuesser = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={style.container}>
        <br />
        <Typography variant="h4">
          <b>Babbel</b>
        </Typography>
        <Typography variant="h6">
          <b>Email Guesser</b>
        </Typography>
        <br />
        <EmailGuesserForm />
      </Box>
    </Container>
  );
};
export default EmailGuesser;
