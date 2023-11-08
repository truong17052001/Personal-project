import classNames from 'classnames/bind';
import styles from './CardProduct.module.scss';
import React from 'react';
//mui

//icon
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function CardProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img_product')}>
                <img
                    src="//lumia-theme.com/cdn/shop/products/1_55dc9372-ef76-44bb-b746-37b541073b5f.png?crop=center&height=1320&v=1676888394&width=1100"
                    alt="img_product"
                ></img>
                <VisibilityIcon
                    className={cx('action')}
                    sx={{
                        fontSize: '25px',
                        cursor: 'pointer',
                        color: '#CDD8E1',
                        position: 'absolute',
                        top: 45,
                        left: 400,
                        transition: '0.5s ease all',
                        '&:hover': { color: '$ccc' },
                    }}
                ></VisibilityIcon>
                <FavoriteIcon
                    className={cx('action')}
                    sx={{
                        fontSize: '25px',
                        cursor: 'pointer',
                        color: '#CDD8E1',
                        position: 'absolute',
                        top: 15,
                        left: 400,
                        transition: '0.5s ease all',
                        '&:hover': { color: '$ccc' },
                    }}
                ></FavoriteIcon>
            </div>
            <div className={cx('info_product')}>
                <a href='/product'>TOCHIBA</a>
                <h3>Light blue denim jacket</h3>
                <div>36.000.000 VND</div>
                <Button>Add to cart</Button>
            </div>
            <div className={cx('hidden_info_product')}>
                
            </div>
        </div>
    );
}

export default CardProduct;
