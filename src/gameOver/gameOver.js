import React from 'react';
import './gameOver.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: '90%',
        width: '70%'
    },
  }));
  
    function ContainedButtons() {
    const classes = useStyles();
  
    return (
        <div>
      <Button variant="contained" className={classes.button} onClick={closeHandler}>
        Try Again
      </Button>
      </div>
    );}

    const closeHandler = () => {
        window.location.reload()
     }
const GameOver = (props) => {
   return (
       <div id='overlay'>
          <div className='grid-container'>
               <div>Game over! </div>
               <div>{props.text} Your points:  {props.points}</div>
               <ContainedButtons width='75%'/>
           </div>
       </div>
   )
}
export default GameOver;
