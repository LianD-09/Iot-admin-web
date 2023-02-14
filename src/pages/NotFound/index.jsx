import { Link } from 'react-router-dom';

import { Box, Container} from '@mui/material';
import _404Image from '../../assets/404.jpg';

const NotFound = (props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            <Container style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <img
                    src={_404Image}
                    alt=""
                    width={700} height={700}
                />
                <Link to='/' style={{fontSize: '1.5rem'}}>
                    Back to Homepage
                </Link>
            </Container>
        </Box>
    );
}

export default NotFound;