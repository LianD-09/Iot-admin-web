import React from 'react';
import { Helmet } from 'react-helmet';

import './login.scss';

const Login = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className='main'>
                Login
            </div>
        </React.Fragment>
    )
}

export default Login;