import React from 'react';

const Header = (props) => {
    return (
        <header style={{ display: 'flex',
            justifyContent: 'flex-end',
            padding: '1rem' }}>
            <a href="#" onClick={props.handleLogout}>Logout</a>
        </header>
    )
}
export default Header;