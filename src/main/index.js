import React from "react";
import "./index.css";
import axios from "axios";
function MainPage() {
  const [products, setProducts] = React.useState([]);

  axios
    .get("https://de81afe5-a239-4c3c-84cf-8807f4e4139b.mock.pstmn.io/products")
    .then(function (result) {
      const products = result.data.products;
    })
    .catch(function (error) {
      console.log("error :", error);
    });
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          <div className="product-card">
            <div>
              <img
                className="product-img"
                src="/images/products/keyboard1.jpg"
              />
            </div>
            <div className="product-contents">
              <span className="product-name">키보드</span>
              <span className="product-price">50000원</span>
              <div className="product-seller">
                <img className="product-avatar" src="images/icons/avatar.png" />
                <span>그랩</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}
export default MainPage;