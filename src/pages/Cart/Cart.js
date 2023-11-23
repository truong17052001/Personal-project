import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
//component
import Breadcrumb from '~/components/Breadcrumb/Breadcrumb';
//icon
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <Breadcrumb>CART</Breadcrumb>
            <div className={cx('cart')}>
                <div className={cx('list-product')}>
                    <h1>CART</h1>
                    <div className={cx('list')}>
                        <div className={cx('label')}>
                            <div>
                                <input className={cx('checkbox')} type="checkbox"></input>
                            </div>
                            <div>Product</div>
                            <div>Price ( VND )</div>
                            <div>Quantity</div>
                            <div>Total ( VND )</div>
                            <div>Action</div>
                        </div>
                        <div className={cx('product')}>
                            <div>
                                <input className={cx('checkbox')} type="checkbox"></input>
                            </div>
                            <div className={cx('info_product')}>
                                <img src='//lumia-theme.com/cdn/shop/files/logo.svg?v=13116349369947907716" alt="logo"'></img>
                                <p>Quần kaki ống dài</p>
                            </div>
                            <div>
                                <span>500.000</span>
                            </div>
                            <div className={cx('product-qty')}>
                                <button>
                                    <RemoveIcon sx={{ fontSize: '15px' }} />
                                </button>
                                <input type="text" value="1"></input>
                                <button>
                                    <AddIcon sx={{ fontSize: '15px' }} />
                                </button>
                            </div>
                            <div>
                                <span>500.000</span>
                            </div>
                            <div>
                                <CancelIcon sx={{ fontSize: '25px',cursor: 'pointer' }}></CancelIcon>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('table-subtotal')}>
                    <h3>Your Order:</h3>
                    <span>Week of 30% off (-$30.00)</span>
                    <p>Tax included and shipping calculated at checkout</p>
                    <div>SUBTOTAL:</div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
