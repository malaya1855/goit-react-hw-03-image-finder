export const ImageGalleryItem = ({ photos }) => {
  return photos.map(photo => (
    <li key={photo.id} className="gallery-item">
      <img src={photo.webformatURL} alt={photo.tags} />
    </li>
  ));
};
