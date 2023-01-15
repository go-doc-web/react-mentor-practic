import './button.css';
import PropTypes from 'prop-types';

const Button = ({ text, type, active }) => {
  const fullClassName = active ? 'btn active' : 'btn';
  return (
    // <button className={`btn ${active ? 'active' : ''}`} type={type}>
    <button className={fullClassName} type={type}>
      {text}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  type: 'submit',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  active: PropTypes.bool,
};
