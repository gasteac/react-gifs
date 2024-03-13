import { useState } from "react";

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
      <button className="button-search" type="submit">Buscar</button>
    </form>
  );
};
