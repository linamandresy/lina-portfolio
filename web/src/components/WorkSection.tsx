"use client";
import styles from '@/style/work-section.module.css';
import SectionTitle from "./SectionTitle";
import { useState } from "react";

const items = [
    {
        id: 1,
        title: "Mountain",
        image: "/lina-illustration.png",
        content: "Beautiful mountain view",
    },
    {
        id: 2,
        title: "Beach",
        image: "/lina-illustration.png",
        content: "Relaxing beach vibes",
    },
    {
        id: 3,
        title: "Forest",
        image: "/lina-illustration.png",
        content: "Green forest scenery",
    },
];

export default function WorkSection() {
    const [active, setActive] = useState(1);
    return (
        <section className={styles.section}>

            <SectionTitle title="Work Experience" />

            <div className="flex flex-col w-full h-[600px] overflow-hidden">
                {items.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={`relative cursor-pointer flex-1 transition-all duration-500 ${active === item.id ? "flex-[3]" : "flex-[1]"
                            }`}
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="bg-black/50 h-full w-full flex items-center justify-center">
                            <h2 className="text-white text-3xl">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}