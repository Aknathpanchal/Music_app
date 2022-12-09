import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Body from './Body';
import MenuIcon from '@mui/icons-material/Menu';
// import { gray } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'gray.900',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function Pop() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><MenuIcon/></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} onClick={handleClose} style={{ background:"linear-gradient(transparent, rgba(0, 0, 0, 1))", backgroundColor:" rgb(48, 46, 56)"}}>
            <Typography id="transition-modal-title" variant="h6" component="h2" style={{color:"white"}}>
              Playlist
            </Typography>
            <Body/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}