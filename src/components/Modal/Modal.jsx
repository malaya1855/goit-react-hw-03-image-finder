import { Component } from 'react';
import PropTypes from 'prop-types';

import { Overlay, ModalImage } from 'components';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = ev => {
    if (ev.code === 'Escape') {
      this.props.onClose();
    }
  };

  onHandleClick = ev => {
    if (ev.target === ev.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { imageSrc, imageAlt } = this.props;
    return (
      <Overlay onClick={this.onHandleClick}>
        <ModalImage>
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{ pointerEvents: 'auto' }}
          />
        </ModalImage>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};
