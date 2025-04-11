import styles from '@/style/work-section.module.css';
import SectionTitle from "./SectionTitle";
import HoverCard from './HoverCard';

export default function WorkSection() {
    return (
        <section className={styles.section}>
            
                <SectionTitle title="Collaborators" />
                
                <div className={styles.workExperience}>
                    <HoverCard image="/lina-illustration.png" title='WaterWipes : A mafatifaty website'/>
                    <HoverCard image="/lina-illustration.png" title='WaterWipes : A mafatifaty website'/>
                    <HoverCard image="/lina-illustration.png" title='WaterWipes : A mafatifaty website'/>
                    <HoverCard image="/lina-illustration.png" title='WaterWipes : A mafatifaty website'/>
                    <HoverCard image="/lina-illustration.png" title='WaterWipes : A mafatifaty website'/>

                </div>
        </section>
    );
}