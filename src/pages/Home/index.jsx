import React from 'react';
import { Helmet } from 'react-helmet';

import './home.scss';
import { SideBar } from '../../components/SideBar/SideBar';

const Home = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='main'>
                Home
                <SideBar />
            </div>
        </React.Fragment>
    )
}

export default Home;