import styles from "@/style/role-card.module.css"

export default function RoleCard({role,description,imageUrl}:{ role:string, description:string, imageUrl:string }) {
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={role} className={styles.image}/>
            <h4 className={styles.role}>{role}</h4>
            <p className={styles.description}>{description}</p>
            <button className={styles.button} >
                View More
            </button>
        </div>
    );
}