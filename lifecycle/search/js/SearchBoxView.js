const SearchBoxView = ({ fixed, searchBoxRef }) => (
  <section className="container">
    <div className="row">
      <div className="col-sm-12">
        <input
          className={`search-box ${fixed ? 'search-box_fixed' : null}`}
          ref={searchBoxRef}
          placeholder="Поиск"
        >
        </input>
      </div>
    </div>
  </section>
);