import styles from '@/style/hover-card.module.css';

export default function HoverCard({image,title}:{image:string,title:string}) {
    return (
        <div className={styles.hoverCard}>
            <img src={image}  className={styles.image}/>
            <span className={styles.title}>{title}</span>
        </div>
    );

}