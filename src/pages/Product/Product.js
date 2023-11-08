import { Box } from "@mui/material";
import styles from "./Product.module.scss";
import classNames from "classnames/bind";
//icon
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
//components
import Breadcrumb from "~/components/Breadcrumb/Breadcrumb";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles);

function Product() {
  return (
    <div className={cx("product-container")}>
      <Breadcrumb>PRODUCT</Breadcrumb>
      <Box className={cx("product-info")}>
        <Box className={cx("product-left")}>
          <img
            src="https://multikart-react-reactpixelstrap.vercel.app/_next/static/media/001.fb2774aa.jpg"
            alt="Hinh"
            style={{ width: "100%", height: "437px" }}
          />
          <img
            src="https://multikart-react-reactpixelstrap.vercel.app/_next/static/media/001.fb2774aa.jpg"
            alt="Hinh"
            style={{ width: "100%", height: "437px" }}
          />
          <img
            src="https://multikart-react-reactpixelstrap.vercel.app/_next/static/media/001.fb2774aa.jpg"
            alt="Hinh"
            style={{ width: "100%", height: "437px" }}
          />
          <img
            src="https://multikart-react-reactpixelstrap.vercel.app/_next/static/media/001.fb2774aa.jpg"
            alt="Hinh"
            style={{ width: "100%", height: "437px" }}
          />
        </Box>
        <Box className={cx("product-right")}>
          <h2>TRIM DRESS</h2>
          <h4>
            <del>24.000.000 VND</del> <span>50% Off</span>
          </h4>
          <h3>12.000.000 VND</h3>
          <Box className={cx("product-description")}>
            <h6>Size:</h6>
            <div className={cx("product-size")}>
              <a href="/">S</a>
              <a href="/">M</a>
              <a href="/">L</a>
            </div>
            <span>In stock</span>
            <h6>Quantity:</h6>
            <div className={cx("product-qty")}>
              <button>
                <KeyboardArrowLeftIcon sx={{fontSize: '15px'}} />
              </button>
              <input type="text" value="1"></input>
              <button>
                <KeyboardArrowRightIcon sx={{fontSize: '15px'}} />
              </button>
            </div>
          </Box>
          <Box className={cx("product-action")}>
            <Button>Add to cart</Button>
            <Button>Buy it now</Button>
          </Box>
          <Box className={cx("product-detail")}>
            <h6>Chi tiết sản phẩm</h6>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,It is a long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters.
            </p>
          </Box>
        </Box>
      </Box>
      <Box className={cx("product-relate")}></Box>
    </div>
  );
}

export default Product;
