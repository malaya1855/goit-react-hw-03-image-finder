import {
  SearchbarField,
  SearchForm,
  SearchBtn,
  SearchBtnLabel,
  SearchInput,
} from './Searchbar.styled';

export const SearchFrom = ({ onHandleSubmit }) => {
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
          // onChange={onChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarField>
  );
};
