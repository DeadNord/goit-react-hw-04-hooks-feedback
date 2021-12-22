import s from './Feedback.module.css';

const Button = ({ option, onLeaveFeedback }) => {
  return (
    <li>
      <button className={s.button} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    </li>
  );
};

export default Button;
