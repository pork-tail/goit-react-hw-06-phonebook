import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ handleChange, filter }) => {
  return (
    <label className={styles.title} htmlFor="filter">
      Find contacts by name:
      <input
        className={styles.input}
        id="filter"
        name="filter"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default Filter;
