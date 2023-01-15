// import css from './button.module.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
  display: inline-block;
  padding: 6px 12px;
  background-color: ${({ active }) => (active ? 'red' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : 'red')};
  cursor: pointer;
  border: 1px solid red;
  border-radius: 6px;

  :hover {
    background-color: black;
  }
`;

const Button = ({ text, type, active }) => {
  // const fullClassName = active ? `${css.btn} ${css.active}` : css.btn;
  return (
    // <button className={`btn ${active ? 'active' : ''}`} type={type}>
    <Wrapper active={active} type={type}>
      {text}{' '}
    </Wrapper>
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
