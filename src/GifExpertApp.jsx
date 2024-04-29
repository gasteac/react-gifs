import { useState } from "react"
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(
    localStorage.getItem("categories")
      ? JSON.parse(localStorage.getItem("categories"))
      : ['KITTY']
  );

  const handleDelete = (category) => {
    setCategories(categories.filter(cat => cat != category))
    localStorage.setItem("categories", JSON.stringify(categories.filter(cat => cat != category)));
  }

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
    localStorage.setItem("categories", JSON.stringify([newCategory, ...categories]));
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl mt-8 mb-2">Search your favorite gifts</h1>
        <div>
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />
        </div>
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

