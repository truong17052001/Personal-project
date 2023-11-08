import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import CardProduct from '~/components/CardProduct/CardProduct';
import Breadcrumb from '~/components/Breadcrumb/Breadcrumb';

const cx = classNames.bind(styles);

function Shop() {
    return (
        <div className={cx('wrapper')}>
            <Breadcrumb>SHOP</Breadcrumb>
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
