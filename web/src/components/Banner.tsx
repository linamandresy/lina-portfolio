import { Profile } from "@/sanity/types";
import style from "@/style/banner.module.css";
import { urlFor } from "@/utils/ImageResolver";

export default function Banner({profile}: {profile:Profile}) {
  return (
    <div className={style.banner} >
      <img src={profile.image} alt={profile.preferedName || `${profile.firstName} ${profile.lastName}`} className={style.image} />
      <div className={style.overlay}>
        <div className={style.text}>
          <div className={style.title}>
            <h1>
              <span>Hi, I`m </span>
               {profile.preferedName || `${profile.firstName} ${profile.lastName}`}</h1>
          </div>
          <span>I am located at {profile.city.cityName}</span>
        </div>
        <button className={style.seeMore}>
          See More
          <span className={style.arrow}></span>
        </button>
      </div>
    </div>
  );

}