import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
      <label>
        Find contacts by name
        <input
            onChange={ onChange }
            className={css.value}
            type="text"
            value={value}
            name="name"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
      </label>
  );
};

export default Filter;