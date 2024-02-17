import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./style.scss";

const Product = ({
  product,
  deleteProduct,
  changeValue,
  increase,
  decrease,
}) => {
  const { img, title, priceTotal, count, id } = product;
  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count
          count={count}
          id={id}
          changeValue={changeValue}
          increase={increase}
          decrease={decrease}
        />
      </div>
      <div className="product__price">{priceTotal} руб.</div>
      <div className="product__delete">
        <ButtonDelete deleteProduct={deleteProduct} id={id} />
      </div>
    </section>
  );
};

export default Product;
