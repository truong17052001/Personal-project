import { Box } from '@mui/material';
import styles from './Breadcrumb.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Breadcrumb({children}) {
    return (
        <Box className={cx('product-breadcrumb')}>
            <h2>{children}</h2>
            <a href="/">HOME / {children}</a>
        </Box>
    );
}

export default Breadcrumb;
