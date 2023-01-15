import PropTypes from 'prop-types';
import './list.css';

import ListItem from './ListItem/ListItem';

const List = ({ title, items }) => {
  const lis = items.map(({ id, ...props }) => {
    return <ListItem key={id} {...props} />;
  });
  return (
    <>
      {title && <h4 className="list-title">{title}</h4>}
      <ul className="list">{lis}</ul>
    </>
  );
};

export default List;

List.defaultProps = {
  items: [],
};

List.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    })
  ),
};
