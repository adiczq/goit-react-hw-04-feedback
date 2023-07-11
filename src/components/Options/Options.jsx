import propTypes from 'prop-types';
import css from './Options.module.css';

const Options = ({ options, onLeaveFeedback }) => (
  <div className={css.feedbackDiv}>
    {options.map((option, index) => (
      <button
        key={index}
        onClick={() => onLeaveFeedback(option)}
        className={css.feedbackBtn}
      >
        {option}
      </button>
    ))}
  </div>
);

Options.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default Options;
