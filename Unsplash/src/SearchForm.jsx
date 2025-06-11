import React from "react";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    console.log(searchValue);
    if (!searchValue) return;
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="dog"
        />
        <button className="btn" type="submit">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
