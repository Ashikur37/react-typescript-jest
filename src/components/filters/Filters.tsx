const Filters = () => (
  <div className="pet-filter-container">
    <label htmlFor="favourite">Favourite</label>
    <select name="favourite" id="favourite" className="form-select">
      <option value="any">Any</option>
      <option value="favourite">Favourite</option>
      <option value="not favourite">Not Favourite</option>
    </select>
    <label htmlFor="gender">Gender</label>
    <select name="gender" id="gender" className="form-select">
      <option value="any">Any</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
);

export default Filters;
