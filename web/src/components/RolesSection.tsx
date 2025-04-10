import styles from "@/style/roles-section.module.css";
import RoleCard from "./RoleCard";
import SectionTitle from "./SectionTitle";

export default function RolesSection() {
    return (
        <>
            <section className={styles.section}>
                <SectionTitle title="Roles" />

                <div className={styles.roles}>
                    <RoleCard role="Software Engineer" description="Develops and maintains software applications." imageUrl="/lina-illustration.png" />
                    <RoleCard role="Data Scientist" description="Analyzes and interprets complex data." imageUrl="/lina-illustration.png" />
                    <RoleCard role="Product Manager" description="Oversees product development and strategy." imageUrl="/lina-illustration.png" />
                </div>

            </section>
        </>
    );
}