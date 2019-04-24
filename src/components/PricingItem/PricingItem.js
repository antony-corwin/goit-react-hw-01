import React from "react";
import PropTypes from "prop-types";
import styles from "./PricingItem.module.css";

const PricingItem = ({ label, icon, capacity, price, description }) => {
  return (
    <div className={[`${styles.pricingItem} ` + `${styles[label]}`]}>
      <i className={styles.icon} style={{ backgroundImage: `url(${icon})` }} />
      <h2 className={styles.label}>{label}</h2>
      <p className={styles.capacity}>{capacity}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}/MO</p>
      <button className={styles.button} type="submit">
        Get Started
      </button>
    </div>
  );
};

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

export default PricingItem;
