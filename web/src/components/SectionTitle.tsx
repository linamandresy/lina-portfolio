import styles from '@/style/section-title.module.css';

export default function SectionTitle({ title }: { title: string }) {
    return (
        <h3 className={styles.title}>
            {title}
        </h3>
    );
}