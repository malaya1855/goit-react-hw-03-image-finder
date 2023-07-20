import PropTypes from 'prop-types';
import { MoreBtn } from 'components';

export const Button = ({ onClick }) => {
  return (
    <MoreBtn type="button" onClick={onClick}>
      Load more
    </MoreBtn>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
