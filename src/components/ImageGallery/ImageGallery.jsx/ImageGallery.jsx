import { ImgGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items }) => {
  return (
    <ImgGallery>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ImgGallery>
  );
};
