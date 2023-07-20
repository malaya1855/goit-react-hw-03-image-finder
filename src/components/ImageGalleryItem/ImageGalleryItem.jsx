import { Component } from 'react';
import PropTypes from 'prop-types';

import { ImgListItem, Image } from 'components';
import { Modal } from 'components';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  onModal = () => {
    this.setState(({ isOpenModal }) => ({ isOpenModal: !isOpenModal }));
  };

  render() {
    const { isOpenModal } = this.state;
    const { id, webformatURL, tags, largeImageURL } = this.props.item;
    return (
      <div>
        <ImgListItem key={id} onClick={this.onModal}>
          <Image src={webformatURL} alt={tags} />
        </ImgListItem>
        {isOpenModal && (
          <Modal
            imageSrc={largeImageURL}
            imageAlt={tags}
            onClose={this.onModal}
          />
        )}
      </div>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
};
