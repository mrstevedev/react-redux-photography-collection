import React from 'react';
import AccountToggle from './AccountToggle';
import AccountDropdown from './AccountDropdown';

const Header = (props) => {
    console.log('props in header', props)
    return (
        <header style={{ display: 'flex',
            justifyContent: 'flex-end',
            padding: '1rem 2rem', height: '65px',
            alignItems: 'center', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)' }}>
            <img src="../../public/img/logo.svg" className="logo" width="25" height="25" />
            <div className="admin__dashboard-account">
                <AccountToggle handleAccountToggle={props.handleAccountToggle} />
                <AccountDropdown user={ props.user } handleLogout={props.handleLogout} />
            </div>
        </header>
    )
}
export default Header;