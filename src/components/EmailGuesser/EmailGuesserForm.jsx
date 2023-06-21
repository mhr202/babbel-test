import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';

import { searchEmail } from '../../api';
import { styles } from './EmailGuesser.styles';

const EmailGuesserForm = () => {
  const [check, setCheck] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [companyDomain, setCompanyDomain] = useState('');
  const [fullName, setFullName] = useState('');
  const [loader, setLoader] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      fullName: fullName,
      domain: companyDomain,
    };
    setLoader(true);
    searchEmail(requestBody)
      .then((result) => {
        setOpen(true);
        setMessage(result.data);
      })
      .catch((error) => {
        toast.error(error.response.data);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const checkAndSetName = (e) => {
    setFullName(e.target.value);
    if (e.target.value.match(/\d+/g)) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ padding: '10px 40px' }}>
        Please provide the necessary employee details in order to obtain their
        company email.
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="fullName"
          value={fullName}
          fullWidth
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          margin="normal"
          onChange={checkAndSetName}
          required
          error={check}
          helperText={`${check ? 'Name cannot contain numbers' : ''}`}
        />
        <TextField
          name="companyName"
          value={companyDomain}
          fullWidth
          id="outlined-basic"
          label="Company Domain"
          onChange={(e) => {
            setCompanyDomain(e.target.value);
          }}
          variant="outlined"
          margin="normal"
          required
        />

        <Button
          sx={styles.submitButton}
          size="large"
          variant="contained"
          endIcon={<SendIcon />}
          margin="normal"
          fullWidth
          type="submit"
        >
          <b>Submit</b>
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Guessed Email</DialogTitle>

        {loader && (
          <div style={{ padding: '10px' }}>
            <Skeleton />
            <Skeleton animation="wave" />
          </div>
        )}
        {!loader && (
          <DialogContent>
            <DialogContentText>
              <Typography variant="h6">
                <>{message}</>
              </Typography>
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default EmailGuesserForm;
