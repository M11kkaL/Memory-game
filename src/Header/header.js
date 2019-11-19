import React from 'react';
import './header.css';

const Header = (props) => {

        return(
            <div className='Header'>
                <div className='points'>
                Points: {props.points}
                </div>
                <div className='tries'>
                Lives: {props.lives < 0 ? 0 : props.lives}
                </div>
            </div>
        );
}

export default Header;