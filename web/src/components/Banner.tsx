
import { client } from "@/sanity/client";
import style from "@/style/banner.module.css";
import { urlFor } from "@/utils/ImageResolver";
import { defineQuery } from "next-sanity";

const QUERY_PROFILE=defineQuery(`*[
  _type == 'profile'
  ]{
    ...,
    city->,
    country->
  }`);


export default async function Banner() {
    const profile= (await client.fetch(QUERY_PROFILE))[0];
    const image:string = urlFor(profile?.profilePicture)?.url()||'';
  return (
    <div className={style.banner} >
      <img src={image} alt={profile?.preferedName || `${profile?.firstName} ${profile?.lastName}`} className={style.image} />
      <div className={style.overlay}>
        <div className={style.text}>
          <div className={style.title}>
            <h1>
              <span>Hi, I`m </span>
               {profile?.preferedName || `${profile?.firstName} ${profile?.lastName}`}</h1>
          </div>
          <span>I am located at {profile?.city?.cityName}</span>
        </div>
        <button className={style.seeMore}>
          See More
          <span className={style.arrow}></span>
        </button>
      </div>
    </div>
  );

}