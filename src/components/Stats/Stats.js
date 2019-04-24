import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Stats.module.css";

function randomColor() {
  const colors = [
    "#e6194b",
    "#3cb44b",
    "#ffe119",
    "#4363d8",
    "#f58231",
    "#911eb4",
    "#46f0f0",
    "#f032e6",
    "#bcf60c",
    "#fabebe",
    "#008080",
    "#e6beff",
    "#9a6324",
    "#fffac8",
    "#800000",
    "#aaffc3",
    "#808000",
    "#ffd8b1",
    "#000075",
    "#808080"
  ];

  const randomNumber = Math.floor(Math.random() * 20 + 1);
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
