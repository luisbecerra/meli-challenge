import React from "react";
import { useDispatch } from "react-redux";

import Breadcrumb from "../Breadcrumb";

import { getFormattedPrice } from "../../lib/helpers";

import { CURRENCY, CONDITIONS } from "../../lib/constants";

import styles from "./ProductDetail.module.scss";

const useProductDetail = () => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  };

  return { addToCart };
};

const ProductDetail = ({ product }) => {
  const { addToCart } = useProductDetail();
  const { item: itemData, categories } = product;
  const {
    title,
    price,
    picture,
    condition,
    free_shipping,
    sold_quantity,
    description,
  } = itemData;
  const hasSold = sold_quantity > 0;
  const conditionDisplay = CONDITIONS[condition];

  return (
    <div className={styles.productDetail}>
      {categories && <Breadcrumb categories={categories} />}

      <div className={styles.grid}>
        <div className={styles.picture}>
          <img src={picture} alt={title} />
        </div>

        <div className={styles.primaryInfo}>
          <span data-testid="sold-quantity">
            {conditionDisplay && conditionDisplay}
            {conditionDisplay && hasSold && " - "}
            {hasSold &&
              `${sold_quantity} vendido${sold_quantity > 0 ? "s" : ""}`}
          </span>

          <h1>{title}</h1>

          {price && (
            <div className={styles.price}>
              <span>{CURRENCY[price.currency]}&nbsp;</span>
              <span>{getFormattedPrice(price.amount)}</span>
              {price.decimals > 0 && (
                <span className="decimals">{price.decimals}</span>
              )}
            </div>
          )}

          {free_shipping && <label data-testid="free-shipping-label">Envío gratis</label>}

          <button
            data-testid="add-to-cart-button"
            onClick={() => {
              addToCart(product.item);
            }}
          >
            Comprar ahora
          </button>
        </div>

        <div className={styles.secondaryInfo}>
          <h3>Descripción</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
