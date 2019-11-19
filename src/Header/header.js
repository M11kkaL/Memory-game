import React from 'react';
import './header.css';

const Header = (props) => {

        return(
            <div className='Header'>
                <div className='points'>
                Points: {props.points}
                </div>
                <div className='tries'>
                Lives: {props.lives > 0 ? props.lives : 0}
                </div>
            </div>
        );
}

export default Header;