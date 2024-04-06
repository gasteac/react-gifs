import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


//Es la categoria en su, con su boton de eliminar, y sus gifs
export const GifGrid = ({category, handleDelete}) => {
  const {images, isLoading} = useFetchGifs(category)
  return (
    <>
      <div className="category-title">

      <h1 className="titlee">{category}</h1>
      <button className="button-title" onClick={e => handleDelete(category)}>X</button>
      
      </div>
      
      {
        isLoading && (<h2>Cargando..</h2>)
      }
      
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} 
          {...image} 
          //le mando todas las propiedades de imagen (url, title, id)
          />
        ))}
      </div>
    </>
  );
};
