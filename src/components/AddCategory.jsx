import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One Piece");

  const onInputChange = (event) => {
    //cambiar el input
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    //evita hacer refresh a la pagina
    event.preventDefault();
    //solo se buscara a palabras mayores de una letra
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue);
    setInputValue('');
    // setCategories((categories) => [inputValue, ...categories]);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gitfs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
