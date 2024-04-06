import { useState } from "react"
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['VALORANT', 'WOLVES'])

  const handleDelete = (category) => {
    setCategories(categories.filter(cat => cat != category))
  }

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }
  return (
    <>
      <div className="titleSearch">
        <h1>SEARCH GIFs</h1>
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      </div>

      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
}

