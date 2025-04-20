import styles from '@/style/work-section.module.css';
import SectionTitle from "./SectionTitle";
import HoverCard from './HoverCard';
import { defineQuery } from 'next-sanity';
import { client } from '@/sanity/client';
import { urlFor } from '@/utils/ImageResolver';
import { Project } from '@/sanity/types';

const WORK_QUERY =  defineQuery( `*[_type == "project" && publish]{...}`);

export default async function WorkSection() {
    const works = await client.fetch(WORK_QUERY);
    return (
        <section className={styles.section}>
            
                <SectionTitle title="Works" />
                <div className={styles.workExperience}>
                    {works.map((work:Project,index:number) => {
                        const img:string = urlFor(work?.image)?.url() || '';
                        return (
                            <HoverCard key={index} image={img} title={work.projectTitle||''}/>
                        );
                        
                    })}

                </div>
        </section>
    );
}