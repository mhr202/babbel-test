import React from 'react';

import Stack from '@mui/material/Stack';

import EmailGuesser from './pages/EmailGuesser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import  { styles } from './App.styles'
const App = () => {
  return (
    <Stack sx={styles.root}>
      <EmailGuesser />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Stack>
  );
}

export default App;
