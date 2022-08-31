import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://22780b2d-5ecc-4613-82fa-f58fa9a1502f.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  if (product === null) {
    return <h1>상품 정보를 받고 있습니다.</h1>;
  }
  return (
    <div>
      <div id="image-box">
        <img src={product.imgUrl} />
      </div>

      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="content-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createdAT">2022년 08월 31일</div>
      </div>
    </div>
  );
}
export default ProductPage;
