import style from "@/style/banner.module.css";

export default function Banner(props:{
  title: string;
  subtitle: string;
  imageUrl: string;
}) {
  return (
    <div className={style.banner} style={{backgroundImage: `url(${props.imageUrl})`}}>
        <div className={style.overlay}>
            <div className={style.text}>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        </div>
    </div>


            
  );

}