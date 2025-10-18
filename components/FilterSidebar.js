import './FilterSidebar.css';

export default function FilterSidebar() {
  return (
    <aside className="filter-sidebar">
      <h3>Filters</h3>

      {/* Ideal For */}
      <div className="filter-group">
        <label htmlFor="ideal">Ideal For</label>
        <select id="ideal">
          <option>All</option>
          <option>Men</option>
          <option>Women</option>
          <option>Kids</option>
        </select>
      </div>

      {/* Occasion */}
      <div className="filter-group">
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>All</option>
          <option>Casual</option>
          <option>Formal</option>
          <option>Party</option>
        </select>
      </div>

      {/* Fabric */}
      <div className="filter-group">
        <label htmlFor="fabric">Fabric</label>
        <select id="fabric">
          <option>All</option>
          <option>Cotton</option>
          <option>Wool</option>
          <option>Silk</option>
        </select>
      </div>

      {/* ✅ New Dropdown Filters */}
      <div className="filter-group">
        <label htmlFor="color">Color</label>
        <select id="color">
          <option>All</option>
          <option>Black</option>
          <option>White</option>
          <option>Blue</option>
          <option>Brown</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="material">Material</label>
        <select id="material">
          <option>All</option>
          <option>Leather</option>
          <option>Canvas</option>
          <option>Metal</option>
          <option>Plastic</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="price">Price Range</label>
        <select id="price">
          <option>All</option>
          <option>Under ₹500</option>
          <option>₹500–₹1000</option>
          <option>₹1000–₹2000</option>
          <option>Above ₹2000</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="availability">Availability</label>
        <select id="availability">
          <option>All</option>
          <option>In Stock</option>
          <option>Out of Stock</option>
        </select>
      </div>
    </aside>
  );
}
