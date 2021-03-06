import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 'auto',
    height: 'auto',
    maxWidth: '50%',
    maxHeight: '60%',
    overflow: 'scroll',
    scrollbarWidth: 'thin',
  },
}));

export default function AppModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const Children = props.component;

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'>
      <div style={modalStyle} className={classes.paper}>
        <Children onClose={props.onClose} />
      </div>
    </Modal>
  );
}
