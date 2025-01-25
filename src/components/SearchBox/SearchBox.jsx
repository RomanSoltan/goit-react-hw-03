import s from './SearchBox.module.css';
const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.wrap}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;
