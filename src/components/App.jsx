import { Component } from 'react';

import { SearchBar, ImageGallery, Button, Loader, TextEmpty } from 'components';
import * as ImageApi from './utilities/imageApi';

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
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      ImageApi.getImages(query, page)
        .then(({ hits, totalHits }) => {
          this.setState(prevState => ({
            photos: [...prevState.photos, ...hits],
            showMore: page < Math.ceil(totalHits / 12),
            isEmpty: hits.length === 0,
          }));
        })
        .catch(error => console.log(error))
        .finally(this.setState({ isLoading: false }));
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
        <SearchBar onHandleSubmit={this.onHandleSubmit} />
        <ImageGallery items={photos} />

        {showMore && <Button onClick={this.onHandleClick}>Load more</Button>}
        {isEmpty && <TextEmpty query={query} />}
        {isLoading && <Loader />}
      </div>
    );
  }
}

export default App;
