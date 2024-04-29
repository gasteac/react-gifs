import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newInputValue = inputValue.trim().toUpperCase();
    if (newInputValue.length <= 1) return;
    onNewCategory(newInputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit} className="flex items-center ">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-accent w-full max-w-xs"
        value={inputValue}
        onChange={onInputChange}
      />
      <button className="btn btn-active" type="submit">
        Search
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}