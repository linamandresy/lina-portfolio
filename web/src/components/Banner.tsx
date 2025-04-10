import style from "@/style/banner.module.css";

export default function Banner(props: {
  title: string;
  subtitle: string;
  imageUrl: string;
}) {
  return (
    <div className={style.banner} >
      <img src={props.imageUrl} alt={props.title} className={style.image} />
      <div className={style.overlay}>
        <div className={style.text}>
          <div className={style.title}>
            <span>Hi, I`m </span>
            <h1> {props.title}</h1>
          </div>
          <span>{props.subtitle}</span>
        </div>
        <button className={style.seeMore}>
          See More
          <span className={style.arrow}></span>
        </button>
      </div>
    </div>
  );

}