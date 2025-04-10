import styles from "@/style/roles-section.module.css";
import RoleCard from "./RoleCard";

export default function RolesSection() {
    return (
        <>
            <section className={styles.section}>
                <h3 className={styles.title}>Roles</h3>

                <div className={styles.roles}>
                    <RoleCard role="Software Engineer" description="Develops and maintains software applications." imageUrl="/lina-illustration.png" />
                    <RoleCard role="Data Scientist" description="Analyzes and interprets complex data." imageUrl="/lina-illustration.png" />
                    <RoleCard role="Product Manager" description="Oversees product development and strategy." imageUrl="/lina-illustration.png" />
                </div>

            </section>
        </>
    );
}