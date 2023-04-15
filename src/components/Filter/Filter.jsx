import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

  const filterChange = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <div>
      <label>
        Filter
        <input
          className={s.input}
          type="name"
          value={filter}
          onChange={filterChange}
        />
      </label>
    </div>
  );
};

export default Filter;
