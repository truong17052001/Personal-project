import { Box } from "@mui/material";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
//icon
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import ShopIcon from "@mui/icons-material/Shop";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FaxIcon from "@mui/icons-material/Fax";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer-container")}>
      <Box className={cx("footer-body")}>
        <Box className={cx("footer-body-left")}>
          <img
            src="//lumia-theme.com/cdn/shop/files/logo.svg?v=13116349369947907716"
            alt="Hinh"
            style={{ width: "100%", height: "437px" }}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div>
            <FacebookIcon className={cx("footer-icon")} />
            <InstagramIcon className={cx("footer-icon")} />
            <GoogleIcon className={cx("footer-icon")} />
            <ShopIcon className={cx("footer-icon")} />
          </div>
        </Box>
        <Box className={cx("footer-body-right")}>
          <Box className={cx("footer-body-right-body")}>
            <h4>MY ACCOUNT</h4>
            <div className={cx("footer-tag")}>
              <a href="/">Womens</a>
              <a href="/">Clothing</a>
              <a href="/">Accessories</a>
              <a href="/">Featured</a>
            </div>
          </Box>
          <Box className={cx("footer-body-right-body")}>
            <h4>WHY WE CHOOSE</h4>
            <div className={cx("footer-tag")}>
              <a href="/">Shipping & Return</a>
              <a href="/">Secure Shopping</a>
              <a href="/">Gallary</a>
              <a href="/">Affiliates</a>
              <a href="/">Contacts</a>
            </div>
          </Box>
          <Box className={cx("footer-body-right-body")}>
            <h4>STORE INFORMATION</h4>
            <div className={cx("footer-tag")}>
              <li>
                <LocationOnIcon className={cx("mr")} />
                Multikart Demo Store, Demo Store India 345-659
              </li>
              <li>
                <CallIcon className={cx("mr")}/>
                Call Us: 123-456-7898
              </li>
              <li>
                <EmailIcon className={cx("mr")}/>
                Email Us: Support@Fiot.Com
              </li>
              <li>
                <FaxIcon className={cx("mr")}/>
                Fax: 123456 2023-24
              </li>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
