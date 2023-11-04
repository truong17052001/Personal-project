import classNames from 'classnames/bind';
import styles from './CardProduct.module.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//mui
import Modal from '@mui/material/Modal';

//icon
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

const cx = classNames.bind(styles);

function CardProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img_product')}>
                <img
                    src="//lumia-theme.com/cdn/shop/products/1_3673db6e-eaaa-469e-a7bf-afeb4bc2c8a9.png?v=1676467905&width=1100"
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
                <a>TOCHIBA</a>
                <h3>QLED 4K Smart TV</h3>
                <div>OOOOO</div>
                <div>$360.00</div>
            </div>
            <div className={cx('hidden_info_product')}>
                
            </div>
        </div>
    );
}

export default CardProduct;
