import React from 'react';

class Admin extends React.Component {
    render() {
        return (
            <div className="admin-container">
                <h4 style={{ fontSize: '0.7rem' }}> Admin Sign In</h4>
                <form className="admin-signIn__form">
                    <input type="text" autoFocus className="admin-signIn__input" />
                    <input type="password" className="admin-signIn__input" />
                    <button>Sign-In</button>
                </form>

                <div className="admin-signIn__description" style={{ margin: '2rem 0', fontSize: '14px' }}>
                    <p style={{ textTransform: 'none' }}>
                        Backend developed with Express. User authentication <br/> with Passport and authorization with JWT.
                    </p>
                </div>
            </div>
        )
    }
}

export default Admin;