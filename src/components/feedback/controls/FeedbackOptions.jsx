import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const FeedbackOptions = ({ handleCounterGoodInc, handleCounterNeutralInc, handleCounterBadInc }) => {
  return (
    <ul className={s.control}>
      <li>
      <button className={s.button} onClick={handleCounterGoodInc}>
      Good
      </button>
      </li>
      <li>
      <button className={s.button} onClick={handleCounterNeutralInc}>
      Neutral
      </button>
      </li>
      <li>
      <button className={s.button} onClick={handleCounterBadInc}>
      Bad
      </button>
      </li>
    
    </ul>
  );
};

Notification.propTypes = {
  handleCounterGoodInc: PropTypes.func.isRequired,
   handleCounterNeutralInc: PropTypes.func.isRequired, 
   handleCounterBadInc: PropTypes.func.isRequired
};
export default FeedbackOptions;
