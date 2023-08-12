import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  
  return (
    <>
      <ul className={css.list_button}>
        {options.map(option => (
          <li key={option}>
            <button
              className={css.item_button}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
