import styles from "@/style/roles-section.module.css";
import RoleCard from "./RoleCard";

export default function RolesSection() {
    return (
        <>
            <section className={styles.section}>
                <h3 className={styles.title}>Roles</h3>

                <div>
                    <RoleCard role="Software Engineer" description="Develops and maintains software applications." imageUrl="https://example.com/software-engineer.jpg" />
                    <RoleCard role="Data Scientist" description="Analyzes and interprets complex data." imageUrl="https://example.com/data-scientist.jpg" />
                    <RoleCard role="Product Manager" description="Oversees product development and strategy." imageUrl="https://example.com/product-manager.jpg" />
                </div>

            </section>
        </>
    );
}