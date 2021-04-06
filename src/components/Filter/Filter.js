import styles from './styles.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <input
      className={styles.contactFormFilter}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Enter name for Search"
    />
  );
};

export default Filter;
