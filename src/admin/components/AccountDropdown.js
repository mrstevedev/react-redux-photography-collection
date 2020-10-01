import React from 'react';
import AccountToggle from './AccountToggle';
import { Link } from 'react-router-dom';

const AccountDropdown = (props) => {
    console.log('props in dropdown', props)
    return (
        <div className="admin__dashboard-account-dropdown">
            <ul className="admin__dashboard-account-list">
                <li>
                    { props.user.username }
                    <div>
                        <p style={{ fontSize: '0.7rem', color: '#7d7d7d' }}>{ props.user.email }</p>
                    </div>
                </li>
                <Link to="/admin/account"><li>Account</li></Link>
                <a href=""><li>Something</li></a>
                <a href=""><li>Something else</li></a>
                <a href="" onClick={props.handleLogout}><li>Sign Out</li></a>
            </ul>
        </div>
    )
}
export default AccountDropdown;