import PropTypes from "prop-types";
export const GifItem = ({ title, url }) => {
  return (
    <div className="card w-96 h-96 bg-base-100 shadow-xl m-5">
      <figure>
        <img src={url} alt="gif" />
      </figure>
      <div className="card-body">
        <h2 className="card-title !text-black line-clamp-1">{title}</h2>
      </div>
    </div>
  );
};

GifItem.propTypes = {
  title : PropTypes.string.isRequired,
  url   : PropTypes.string.isRequired,
}

  // <div className="">
  //   <img src={url} alt={title} />
  //   <p>{title}</p>
  // </div>