import classNames from 'classnames/bind';
import styles from './User.module.scss';

const cx = classNames.bind(styles);

function UserLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default UserLayout;
