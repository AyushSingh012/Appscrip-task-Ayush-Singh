import './FilterBar.css';

export default function FilterBar() {
  return (
    <section className="filter-bar">
      <div className="items-count">3425 ITEMS</div>
      <button className="hide-filter">Hide Filter</button>
      <div className="sort-section">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort">
          <option>Recommended</option>
          <option>Newest First</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </section>
  );
}
