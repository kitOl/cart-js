import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./style.scss";

const Product = () => {
  return (
    <section className="product">
      <div className="product__img">
        <img src="./img/products/01.jpg" alt="01" />
      </div>
      <div className="product__title">Apple MacBook Air 13</div>
      <div className="product__count">
        <Count />
      </div>
      <div className="product__price">110 000 руб.</div>
      <div className="product__delete">
        <ButtonDelete />
      </div>
    </section>
  );
};

export default Product;
