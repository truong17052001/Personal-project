import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
//mui
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import Modal from '@mui/material/Modal';
//icon
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CloseIcon from '@mui/icons-material/Close';
//tippy
import Tippy from '@tippyjs/react/headless';
//components
import CardSearch from '../CardSearch/CardSearch';

const cx = classNames.bind(styles);
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));
const Test = function ({ children, name }) {
    return <div className={cx('tooltip')}>{name}</div>;
};
const fs = { fontSize: '30px', cursor: 'pointer', color: '#22292f', '&:focus': { outline: 'none' } };
const ii = { fontSize: '20px', mr: '15px', cursor: 'pointer' };

function Header() {
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => {
    //     open === true ? setOpen(false) : setOpen(true);
    // };
    const [search, openSearch] = useState(false);
    const handleSearch = () => openSearch(true);
    const handleCloseSearch = () => openSearch(false);
    const [login, openLogin] = useState(false);
    const handleLogin = () => openLogin(true);
    const handleCloseLogin = () => openLogin(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src="//lumia-theme.com/cdn/shop/files/logo.svg?v=13116349369947907716" alt="logo"></img>
                </div>
                <div className={cx('menu')}>
                    <Link className={cx('menu-item')} to="/">
                        Home
                    </Link>
                    <Link className={cx('menu-item')} to="/shop">
                        Shop
                    </Link>
                    <Link className={cx('menu-item')} to="/collection">
                        About
                    </Link>
                    <Link className={cx('menu-item')} to="/news">
                        News
                    </Link>
                    <Link className={cx('menu-item')} to="/contact">
                        Contact
                    </Link>
                </div>
                <div className={cx('nav')}>
                    <BootstrapTooltip title=<Test name="Search" />>
                        <SearchOutlinedIcon sx={fs} onClick={handleSearch} />
                    </BootstrapTooltip>
                    <Modal disableAutoFocus={true} open={search} onClose={handleCloseSearch}>
                        <div className={cx('modal-search')}>
                            <div className={cx('modal_close')}>
                                <CloseIcon sx={fs} onClick={handleCloseSearch}></CloseIcon>
                            </div>
                            <div className={cx('modal_content')}>
                                <h2>Search in store</h2>
                                <span>Advanced search will help you quickly find a product</span>
                                <div className={cx('search_box')}>
                                    <input placeholder="Search by title, sku, type, vendor, description or tags"></input>
                                    <SearchOutlinedIcon
                                        sx={{
                                            fontSize: '25px',
                                            position: 'absolute',
                                            height: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            right: 0,
                                        }}
                                    ></SearchOutlinedIcon>
                                </div>
                                <div className={cx('quick_search')}>
                                    Quick search tags:
                                    <a href="/">Gift</a>
                                    <a href="/">News</a>
                                    <a href="/">Card</a>
                                </div>
                                <h2>What we found:</h2>
                                <div className={cx('search_result')}>
                                    <CardSearch></CardSearch>
                                    <CardSearch></CardSearch>
                                    <CardSearch></CardSearch>
                                    <CardSearch></CardSearch>
                                    <CardSearch></CardSearch>
                                    <CardSearch></CardSearch>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    <BootstrapTooltip title=<Test name="Cart" />>
                        <Badge color="warning" badgeContent={1} max={10}>
                            <ShoppingCartOutlinedIcon sx={fs} />
                        </Badge>
                    </BootstrapTooltip>

                    <Tippy
                        hideOnClick={true}
                        interactive={true}
                        // trigger="click"
                        animateFill={true}
                        render={(attrs) => (
                            <div className={cx('tippy')} tabIndex="-1" {...attrs}>
                                <Link className={cx('tippy-item')} to="/account">
                                    <AccountCircleOutlinedIcon sx={ii} />
                                    <a href="/">Detail Account</a>
                                </Link>
                                <Link className={cx('tippy-item')} to="/wishlist">
                                    <FavoriteBorderOutlinedIcon sx={ii} />
                                    <a href="/">Wishlists</a>
                                </Link>
                                <Link className={cx('tippy-item')} to="/settting">
                                    <TuneOutlinedIcon sx={ii} />
                                    <a href="/">Setting</a>
                                </Link>
                                <Link className={cx('tippy-item')} to="/logout">
                                    <LogoutOutlinedIcon sx={ii} />
                                    <a href="/">Logout</a>
                                </Link>
                            </div>
                        )}
                    >
                        {/* <BootstrapTooltip title=<Test name="Login" />> */}
                        <PersonOutlineOutlinedIcon onClick={handleLogin} sx={fs} />
                        {/* </BootstrapTooltip> */}
                    </Tippy>
                    {/* <Modal disableAutoFocus={true} open={login} onClose={handleCloseLogin}>
                        <div className={cx('modal-login')}>
                            <div className={cx('modal_close')}>
                                <CloseIcon sx={fs} onClick={handleCloseLogin}></CloseIcon>
                            </div>
                            <div className={cx('modal_content')}>
                                <h1>LOGIN</h1>
                                <form className={cx('login_box')} action="/login" method="POST">
                                    <div className={cx('login_user')}>
                                        <span>Username or email:</span>
                                        <input className={cx('input_user')} placeholder="Username or email"></input>
                                    </div>
                                    <div className={cx('login_password')}>
                                        <span>Password:</span>
                                        <input
                                            type="password"
                                            className={cx('input_password')}
                                            placeholder="Password"
                                        ></input>
                                    </div>
                                    <button className={cx('login_button')} type="submit">
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </Modal> */}
                </div>
            </div>
        </div>
    );
}

export default Header;
