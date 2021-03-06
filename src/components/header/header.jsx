import React from 'react';

// My Components
import Options from './options';
import Logo from './logo';
import Sign from './sign';

const Header = ({ userName }) => {
    console.log('userName', userName);
    return (
        <div id={'header'} className={'container-fluid'}>
            <div className={'row'}>
                <Options />
                <Logo />
                <Sign  userName={userName}/>
            </div>
        </div>
    );
};

export default Header;