import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    sla,
    avgRatingString,
    costForTwo,
  } = resData.info;
  return (
    <div className="res-card">
      <img
        src={CDN_LINK + cloudinaryImageId}
        className="res-logo"
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla.slaString}</h4>
      <h4>{avgRatingString} ⭐</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
