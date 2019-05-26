import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Stats.module.css";
import colors from "../../db/colors.json";

function randomColor() {
  const randomNumber = Math.floor(Math.random() * 19 + 1);
  const selectedColor = colors[randomNumber];

  return selectedColor;
}

const Stats = ({ title, stats = {} }) => (
  <Fragment>
    <section className={styles.statsSection}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            className={styles.item}
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </Fragment>
);

Stats.defaultProps = {
  title: "Upload stats"
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired
};

export default Stats;
