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
    locality,
    areaName,
  } = resData.info;
  return (
    <div className="res-card p-4 m-4 w-[300px] rounded-lg bg-slate-200 border border-solid hover:border-cyan-500">
      <img
        src={CDN_LINK + cloudinaryImageId}
        className="res-logo rounded-lg"
        alt="res-logo"
      />
      <h3 className="text-xl font-bold py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <p>
        {locality}, {areaName}
      </p>
      <h4>{sla.slaString}</h4>
      <h4>{avgRatingString} ⭐</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
