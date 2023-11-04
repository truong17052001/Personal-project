import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import CardProduct from '~/components/CardProduct/CardProduct';

const cx = classNames.bind(styles);

function Shop() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('products')}>
                <CardProduct></CardProduct>
                <CardProduct></CardProduct>
                <CardProduct></CardProduct>
                <CardProduct></CardProduct>
            </div>
        </div>
    );
}

export default Shop;
