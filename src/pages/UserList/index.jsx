import React from 'react';
import { Helmet } from 'react-helmet';

import './userList.scss';

const UserList = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>UserList</title>
            </Helmet>
            <div className='main'>
                UserList
            </div>
        </React.Fragment>
    )
}

export default UserList;