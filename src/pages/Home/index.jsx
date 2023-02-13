import React from 'react';
import { Helmet } from 'react-helmet';

import './home.scss';

const Home = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='main'>
                Home
            </div>
        </React.Fragment>
    )
}

export default Home;