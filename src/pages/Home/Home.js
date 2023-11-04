import classNames from 'classnames/bind';
import styles from './Home.module.scss';
// import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <img
                    className={cx('image')}
                    src="//lumia-theme.com/cdn/shop/files/slide-02_da56a6b5-c84d-4728-91e8-013325924354.png?v=1664655078&width=3842"
                    alt="slider"
                ></img>
            </div>
        </div>
    );
}

export default Home;
