import React from 'react';
import './grid.css';

const Grid = (props) => {
        return ( 
            <div className='Child'
             onClick={props.click}>
            <div className='icon'>
                {props.icon}
            </div>

            </div>
        );
    }


export default Grid;