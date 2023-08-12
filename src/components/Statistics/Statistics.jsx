import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={css.statistics_list}>
        <li className={css.joint_item}>
          <p className={css.item}>Good:</p>
          <span className={css.stats_check}>{good}</span>
        </li>
        <li className={css.joint_item}>
          <p className={css.item}>Neutral:</p>
          <span className={css.stats_check}>{neutral}</span>
        </li>
        <li className={css.joint_item}>
          <p className={css.item}>Bad:</p>
          <span className={css.stats_check}>{bad}</span>
        </li>
      </ul>
      <ul className={css.statistics_list}>
        <li className={css.joint_item}>
          <p className={css.item}>Total:</p>
          <span className={css.stats_check}>{total(good, neutral, bad)}</span>
        </li>
        <li className={css.joint_item}>
          <p className={css.item}>Positive feedback:</p>
          <span className={css.stats_check}>
            {positivePercentage(total(good, neutral, bad), good) || 0}%
          </span>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
