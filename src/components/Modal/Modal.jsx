import { Component } from 'react';
import { Overlay, ModalImage } from 'components/Modal/Modal.styled';

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

  onCloseModal = ev => {
    console.log(ev.currentTarget);
    console.log(ev.target);
    if (ev.currentTarget === ev.target) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <Overlay onKeyDown={this.onCloseModal}>
        <ModalImage onClick={this.onCloseModal}>
          <img src={this.props.imageSrc} alt={this.props.imageAlt} />
        </ModalImage>
      </Overlay>
    );
  }
}
