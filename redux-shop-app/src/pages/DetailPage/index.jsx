import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProduct } from "../../store/products/product.slice";
import styles from "./DetailPage.module.scss";
import Loder from "../../components/loader/Loder";
import { addToCart } from "../../store/cart/cart.slice";

const DetailPage = () => {
  /**
   * localhost:3000/home?id=1         useLocation
   * localhost:3000/1/ => /home/:id   useParams
   *
   * http://localhost:5173/product/2
   */

  const { id } = useParams(); // type string
  const productId = Number(id);
  const { product, isLoading } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  // 리덕스 비동기 요청 ==> createAsyncThunk

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId]);

  const { products } = useSelector((state) => state.cart);

  const productMatching = products.some((el) => el.id === product.id);

  const addItemCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="page">
      {isLoading ? (
        <Loder />
      ) : (
        <div className={styles.card_wrapper}>
          <div className={styles.card_img}>
            <img src={product.image} alt={product.title} />
          </div>
          <div className={styles.card_description}>
            <h3>{product.category}</h3>
            <h1>{product.title}</h1>

            <h4>$ {product.price}</h4>
            <p>{product.description}</p>

            <div>
              <button
                disabled={productMatching}
                onClick={() => !productMatching && addItemCart()}
              >
                {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
              </button>

              <Link to={"/cart"}>장바구니로 이동</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
