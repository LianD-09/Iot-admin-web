import React from 'react';
import { Helmet } from 'react-helmet';

import './access.scss';

const Access = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Access</title>
            </Helmet>
            <div className='main'>
                Access
            </div>
        </React.Fragment>
    )
}

export default Access;