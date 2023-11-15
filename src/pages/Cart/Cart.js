import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import React, { useEffect, useState } from 'react';
import { getProduct } from '~/api/api';
//component
import CardProduct from '~/components/CardProduct/CardProduct';
import Breadcrumb from '~/components/Breadcrumb/Breadcrumb';

const cx = classNames.bind(styles);

function Cart() {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        async function loadProduct(){
            const data= await getProduct();
            setProduct(data);
        }
        loadProduct();
    },[])
    return (
        <div className={cx('wrapper')}>
            <Breadcrumb>CART</Breadcrumb>
            <div className={cx('table')}>

            </div>
        </div>
    );
}

export default Cart;
