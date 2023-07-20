import PropTypes from 'prop-types';
import {
  SearchbarField,
  SearchForm,
  SearchBtn,
  SearchBtnLabel,
  SearchInput,
} from 'components';

export const SearchBar = ({ onHandleSubmit }) => {
  const onFormSubmit = ev => {
    ev.preventDefault();
    const { value } = ev.target.elements.search;
    onHandleSubmit(value);
  };

  return (
    <SearchbarField>
      <SearchForm onSubmit={onFormSubmit}>
        <SearchBtn type="submit">
          <SearchBtnLabel>Search</SearchBtnLabel>
        </SearchBtn>

        <SearchInput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarField>
  );
};

SearchBar.propTypes = { onHandleSubmit: PropTypes.func };
