import './FilterSidebar.css';

export default function FilterSidebar() {
  return (
    <aside className="filter-sidebar">
      <h3>Filters</h3>

      <div className="filter-group">
        <label>
          <input type="checkbox" /> Customizable
        </label>
      </div>

      <div className="filter-group">
        <p>Ideal For</p>
        <select>
          <option>All</option>
          <option>Men</option>
          <option>Women</option>
          <option>Kids</option>
        </select>
      </div>

      <div className="filter-group">
        <p>Occasion</p>
        <select>
          <option>All</option>
          <option>Casual</option>
          <option>Formal</option>
        </select>
      </div>

      <div className="filter-group">
        <p>Fabric</p>
        <select>
          <option>All</option>
          <option>Cotton</option>
          <option>Silk</option>
        </select>
      </div>
    </aside>
  );
}
