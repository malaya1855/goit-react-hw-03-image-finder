import PropTypes from 'prop-types';

import { ImgGallery } from 'components';
import { ImageGalleryItem } from 'components';

export const ImageGallery = ({ items }) => {
  return (
    <ImgGallery>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ImgGallery>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
