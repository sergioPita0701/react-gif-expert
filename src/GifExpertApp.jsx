import React from "react";

import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    //evita repetidos en las categories
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
    // setCategories ( cat => [...cat,'Valoran']);
  };
    
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
