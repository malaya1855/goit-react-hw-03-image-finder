import { SearchFrom } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import * as ImageApi from './utilities/imageApi';
import { Component } from 'react';

class App extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
  };
  onHandleSubmit = ev => {
    const { query, page } = this.state;
    ev.preventDefault();
    ImageApi.getImages(query, page)
      .then(({ hits }) => {
        console.log(hits);
        this.setState({ photos: hits });
      })
      .catch(error => console.log(error));
  };
  onHandleChange = ev => {
    this.setState({ query: ev.currentTarget.value });
  };
  render() {
    const { photos } = this.state;
    return (
      <div>
        <SearchFrom
          onSubmit={this.onHandleSubmit}
          onChange={this.onHandleChange}
        />
        <ImageGallery>
          <ImageGalleryItem photos={photos} />
        </ImageGallery>
      </div>
    );
  }
}

export default App;
