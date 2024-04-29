import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


//Es la categoria en su, con su boton de eliminar, y sus gifs
export const GifGrid = ({category, handleDelete}) => {
  const {images, isLoading} = useFetchGifs(category)
  return (
    <>
      <div className="flex px-16 mb-6 gap-4 items-center">
        <h1 className="text-2xl font-semibold line-clamp-1 bg-gray-800 p-2 rounded-md w-full">{category}</h1>
        <button
          className="btn  bg-red-500 text-white"
          onClick={() => handleDelete(category)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {isLoading && <h2>Cargando..</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image}
            //le mando todas las propiedades de imagen (url, title, id)
          />
        ))}
      </div>
    </>
  );
};
