import styles from "@/style/roles-section.module.css";
import RoleCard from "./RoleCard";
import SectionTitle from "./SectionTitle";
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import { urlFor } from "@/utils/ImageResolver";
import { Company } from "@/sanity/types";

const QUERY_COMPANY = defineQuery(`*[
    _type == 'company'
    ]{...}`);


export default async function CompanySection() {
    const companies = await client.fetch(QUERY_COMPANY);
    return (
        <section className={styles.section}>
            <SectionTitle title="Companies" />
            <div className={styles.roles}>
                {companies.map((company: Company) => {
                    const image = urlFor(company.image)?.url() || '/lina-illustration.png';
                    let description = "";

                    if (
                        company?.description &&
                        Array.isArray(company.description) &&
                        company.description[0]?._type === 'block' &&
                        Array.isArray(company.description[0].children)
                    ) {
                        description = company.description[0].children[0]?.text || "";
                    }

                    return (
                        <RoleCard key={company._id} role={company.companyName} description={description} imageUrl={image} />
                    )
                })}
            </div>
        </section>
    );
}