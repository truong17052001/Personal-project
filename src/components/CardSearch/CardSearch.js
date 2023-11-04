import classNames from 'classnames/bind';
import styles from './CardSearch.module.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//mui
import Modal from '@mui/material/Modal';

//icon
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const cx = classNames.bind(styles);
const fs = { fontSize: '30px', cursor: 'pointer', color: '#22292f', '&:hover': { color: '$ccc' } };

function CardSearch() {
    const [expand, setExpand] = useState(false);
    const handleView = () => setExpand(true);
    const handleClose = () => setExpand(false);
    return (
        <div className={cx('wrapper')}>
            <VisibilityIcon
                className={cx('view')}
                sx={{
                    fontSize: '25px',
                    cursor: 'pointer',
                    color: '#CDD8E1',
                    position: 'absolute',
                    top: 7,
                    left: 150,
                    transition: '0.1s ease all',
                }}
                onClick={handleView}
            ></VisibilityIcon>
            <Modal disableAutoFocus={true} open={expand} onClose={handleClose}>
                <div className={cx('modal-view')}>
                    <div className={cx('modal_close')}>
                        <CloseIcon sx={fs} onClick={handleClose}></CloseIcon>
                    </div>
                    <div className={cx('modal_content')}>
                        <div className={cx('gallery')}>
                            <div className={cx('gallery_lists')}>
                                <img
                                    src="//cdn.shopify.com/s/files/1/1323/8419/products/2_dbc1abd7-9135-433b-810f-55815233cba0.png?v=1674575880&width=1100"
                                    alt="img"
                                ></img>
                                <img
                                    src="//cdn.shopify.com/s/files/1/1323/8419/products/2_dbc1abd7-9135-433b-810f-55815233cba0.png?v=1674575880&width=1100"
                                    alt="img"
                                ></img>
                                <img
                                    src="//cdn.shopify.com/s/files/1/1323/8419/products/2_dbc1abd7-9135-433b-810f-55815233cba0.png?v=1674575880&width=1100"
                                    alt="img"
                                ></img>
                                <img
                                    src="//cdn.shopify.com/s/files/1/1323/8419/products/2_dbc1abd7-9135-433b-810f-55815233cba0.png?v=1674575880&width=1100"
                                    alt="img"
                                ></img>
                                <img
                                    src="//cdn.shopify.com/s/files/1/1323/8419/products/2_dbc1abd7-9135-433b-810f-55815233cba0.png?v=1674575880&width=1100"
                                    alt="img"
                                ></img>
                                <div className={cx('up_down')}>
                                    <KeyboardArrowUpIcon sx={fs}></KeyboardArrowUpIcon>
                                    <KeyboardArrowDownIcon sx={fs}></KeyboardArrowDownIcon>
                                </div>
                            </div>
                            <div className={cx('zoom_window')}></div>
                        </div>
                        <div className={cx('content_product')}>
                            <Link hef="#" className={cx('product_name')}>
                                Light lace top
                            </Link>
                            <div className={cx('short-description')}>
                                A T-shirt, or tee for short, is a style of fabric shirt named after the T shape of its
                                body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a
                                crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light, and
                                inexpensive fabric and are easy to clean. A T-shirt, or tee for short, is a style of
                                fabric shirt named after the T shape of its body and sleeves. Traditionally, it has
                                short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts
                                are generally made of a stretchy, light, and inexpensive fabric and are easy to clean.A
                                T-shirt, or tee for short, is a style of fabric shirt named after the T shape of its
                                body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a
                                crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light, and
                                inexpensive fabric and are easy to clean.A T-shirt, or tee for short, is a style of
                                fabric shirt named after the T shape of its body and sleeves. Traditionally, it has
                                short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts
                            </div>
                            <div className={cx('price')}>12.200.000 VND</div>
                            <div className={cx('product_color')}>
                                <span>Color:</span>
                                <img
                                    src="//cdn.shopify.com/s/files/1/1323/8419/products/2_dbc1abd7-9135-433b-810f-55815233cba0.png?v=1674575880&width=1100"
                                    alt="img"
                                ></img>
                                <img
                                    src="//cdn.shopify.com/s/files/1/1323/8419/products/2_dbc1abd7-9135-433b-810f-55815233cba0.png?v=1674575880&width=1100"
                                    alt="img"
                                ></img>
                                <img
                                    src="//cdn.shopify.com/s/files/1/1323/8419/products/2_dbc1abd7-9135-433b-810f-55815233cba0.png?v=1674575880&width=1100"
                                    alt="img"
                                ></img>
                                <img
                                    src="//cdn.shopify.com/s/files/1/1323/8419/products/2_dbc1abd7-9135-433b-810f-55815233cba0.png?v=1674575880&width=1100"
                                    alt="img"
                                ></img>
                            </div>
                            <div className={cx('product_size')}>
                                <span>Size:</span>
                                <label>XS</label>
                                <label>S</label>
                                <label>M</label>
                                <label>L</label>
                                <label>XL</label>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <img
                src="//cdn.shopify.com/s/files/1/1323/8419/products/1_ca160c59-a7d1-4ab4-accb-0eb0eb5a1c20.png?v=1676888824&width=1100"
                alt="img"
            ></img>
            <div className={cx('content')}>Unisex denim jacket aa aa asdasd dasdasd asdas</div>
        </div>
    );
}

export default CardSearch;
