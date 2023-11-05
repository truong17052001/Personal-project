import classNames from 'classnames/bind';
import styles from './User.module.scss';
//Components
import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';

const cx = classNames.bind(styles);

function UserLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default UserLayout;
