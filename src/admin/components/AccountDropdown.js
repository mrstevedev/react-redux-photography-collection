import React from 'react';
import AccountToggle from './AccountToggle';
import { Link } from 'react-router-dom';

const AccountDropdown = (props) => {
    console.log('props in dropdown', props);
    const shortEmail = props.user !== undefined ? props.user.email.replace(/(.{18})..+/, "$1…") : '';

    return (
        <div className="animated animatedFadeInUp admin__dashboard-account-dropdown" style={{  opacity: '0',
            position: 'absolute',
            background: '#fff',
            boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
            width: '200px',
            top: '3.6rem',
            right: '-1rem',
            padding: '0',
            borderBottomRightRadius: '6px',
            borderBottomLeftRadius: '6px',
            transition: '0.12s ease-in-out' }}>
            <ul className="admin__dashboard-account-list">
                <li>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '30px',  height: '30px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-user-shield"></i>
                    </div>
                <div>
                    <p>{ props.user ? props.user.username : '' }</p>
                    <p style={{ fontSize: '0.7rem', color: '#b9b9b9' }} title={ props.user.email }>{ props.user !== undefined ? shortEmail : '' }</p>
                </div>
                </div>
                </li>
                <Link to={{
                    pathname: '/admin/account',
                    state: { user: props.user } 
                }}>
                <li>                   
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '30px',  height: '30px', display: 'flex', alignItems: 'center' }}>
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <p>Account</p>
                    </div>
                    
                    </li></Link>
                <Link to={{
                    pathname: '/admin/dashboard',
                    state: { user: props.user }
                }}>
                    <li>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '30px',  height: '30px', display: 'flex', alignItems: 'center' }}>
                    <i className="fas fa-cloud-upload-alt"></i>
                        </div> 
                        Upload Photo
                        </div>
                    </li></Link>
                <Link to={{
                    pathname: '/admin/dashboard',
                    state: { user: props.user }
                }}>
                    <li>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '30px',  height: '30px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-tachometer-alt"></i>
                        </div>
                        Dashboard
                    </div>
                    </li>
                </Link>
                <Link to="#" onClick={props.handleLogout}>
                    <li>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '30px',  height: '30px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-sign-out-alt"></i> 
                        </div>
                        Sign Out
                    </div>
                    </li>
                    </Link>
            </ul>
        </div>
    )
}
export default AccountDropdown;