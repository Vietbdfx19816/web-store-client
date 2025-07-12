import { useState } from 'react';

// import router
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';

// import icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

// import component
import ScrollToTop from '../UI/ScrollToTop';
import ProductsList from './ProductsList';

import useGetData from '../../hook/useGetData';

import { cartActions } from '../../store/cart';

import classes from './ProductDetail.module.css';

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const { data, loading, error } = useGetData(`/store/product/${productId}`);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // transform data
  const product = data?.product;
  const relatedProducts = data?.related;

  // Handle input field
  const increaseHandler = () => {
    if (!product?.in_stock) return;

    setQuantity(state => {
      if (state === product.in_stock) return state;
      if (!isNaN(state)) return 1;

      return +state + 1;
    });
  };

  const decreaseHandler = () => {
    if (!product?.in_stock) return;

    setQuantity(state => {
      if (state <= 1) return state;
      if (!isNaN(state)) return 1;

      return +state - 1;
    });
  };

  const inputQuantityHandler = e => {
    const input = +e.target.value;
    if (input < 1 || isNaN(input)) return setQuantity('');
    setQuantity(input);
  };

  // Add to cart
  const addToCart = () => {
    if (!product && quantity <= 0) return;
    dispatch(cartActions.add({ ...product, amount: quantity }));
  };

  // Related items
  const relatedItemHandler = item => {
    navigate(`/detail/${item._id}`);
  };

  return (
    <ScrollToTop>
      {/* scroll to top when redirect */}
      {error && (
        <div className="container">
          <h1>404</h1>
          <h2>Product not found!</h2>
        </div>
      )}
      {!loading && !error && product && (
        <section id="detail" className={classes.detail}>
          <div className="container">
            <div className={classes.wrapper}>
              <div className={classes.imageWrapper}>
                <div className={classes.imageList}>
                  <div>
                    <img src={product.img1} alt="" />
                  </div>
                  <div>
                    <img src={product.img2} alt="" />
                  </div>
                  <div>
                    <img src={product.img3} alt="" />
                  </div>
                  <div>
                    <img src={product.img4} alt="" />
                  </div>
                </div>
                <div className={classes.image}>
                  <img src={product.img1} alt={product.name} />
                </div>
              </div>
              <div className={classes.detailWrapper}>
                <h1>{product.name}</h1>
                <p className={classes.price}>{`${product.price.toLocaleString(
                  'de-DE'
                )} VND`}</p>
                <p className={classes.shortDesc}>{product.short_desc}</p>
                <p className={classes.category}>
                  <b>Category: </b>
                  {product.category}
                </p>
                <div className={classes.quantity}>
                  <div className={classes.input}>
                    <label htmlFor="quantity">Quantity</label>
                    <FontAwesomeIcon
                      icon={faCaretLeft}
                      onClick={decreaseHandler}
                    />
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={quantity}
                      onChange={inputQuantityHandler}
                    />
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      onClick={increaseHandler}
                    />
                  </div>
                  <div className={classes.action}>
                    <button className="btn" onClick={addToCart}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {!loading && !error && product && (
        <section id="description" className={classes.description}>
          <div className="container">
            <div className={classes.wrapper}>
              <h2>Product Description</h2>
              <p>{product.long_desc}</p>
            </div>
          </div>
        </section>
      )}
      {!loading && !error && relatedProducts && (
        <section id="related" className={classes.related}>
          <div className="container">
            <div className={classes.wrapper}>
              <h2>Related Products</h2>
              <ProductsList
                products={relatedProducts}
                onClick={relatedItemHandler}
              />
            </div>
          </div>
        </section>
      )}
    </ScrollToTop>
  );
}

export default ProductDetail;
