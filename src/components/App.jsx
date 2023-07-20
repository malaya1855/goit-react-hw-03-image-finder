import { Component } from 'react';

import { SearchFrom } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import * as ImageApi from './utilities/imageApi';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

class App extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
    showMore: false,
    isLoading: false,
    isEmpty: false,
    modalImg: {},
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.page !== page) {
      this.setState({ isLoading: true });
      ImageApi.getImages(query, page)
        .then(({ hits, totalHits }) => {
          this.setState({
            photos: [...prevState.photos, ...hits],
            isLoading: false,
            showMore: page < Math.ceil(totalHits / 12),
            isEmpty: hits.length === 0,
          });
        })
        .catch(error => console.log(error));
    }
  }

  onHandleSubmit = query => {
    this.setState({
      query,
      page: 1,
      photos: [],
      showMore: false,
      isLoading: true,
    });
    ImageApi.getImages(query)
      .then(({ hits, totalHits }) => {
        this.setState({
          photos: [...hits],
          isLoading: false,
          showMore: hits.length > totalHits,
          isEmpty: hits.length === 0,
        });
      })
      .catch(error => console.log(error));
  };

  onHandleClick = () => {
    this.setState(prevstate => ({
      page: prevstate.page + 1,
    }));
  };

  render() {
    const { query, photos, showMore, isLoading, isEmpty } = this.state;
    return (
      <div>
        <SearchFrom onHandleSubmit={this.onHandleSubmit} />
        <ImageGallery items={photos}>
          <ImageGalleryItem />
        </ImageGallery>
        {showMore && <Button onClick={this.onHandleClick}>Load more</Button>}
        {isEmpty && (
          <div>
            Sorry. According to your search {query} there are no images...
          </div>
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}

export default App;
