import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";


export const profileType = defineType({
    name: 'profile',
    title: 'Profile',
    type: 'document',
    icon: UserIcon,
    groups: [
        { name: 'basicInfo', title: 'Basic Info' },
        { name: 'contactInfo', title: 'Contact Info' },
    ],
    fieldsets: [{
        name: 'userName',
        title: 'Profile Name',
        options: {
            columns: 2
        }
    }
    ],
    fields: [
        defineField({
            name: 'firstName',
            type: 'string',
            fieldset: 'userName',
            group: 'basicInfo',
            validation: (rule) => rule
                .required()
        }),
        defineField({
            name: 'lastName',
            type: 'string',
            group: 'basicInfo',
            fieldset: 'userName'
        }),
        defineField({
            name: 'preferedName',
            type: 'string',
            fieldset: 'userName',
            group: 'basicInfo'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            validation: (rule) => rule.required(),
            hidden: ({ document }) => !document.firstName,
            options: {
                source: (doc) => {
                    if (doc.lastName) {
                        return `${doc.firstName}-${doc.lastName}`;
                    }
                    return doc.firstName;
                },
                slugify: (input) =>
                    input
                        .toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/[^a-zA-Z0-9-]/g, '')
                        .slice(0, 200),
            }
        }),
        defineField({
            name: 'dob',
            title: 'Date Of Birth',
            type: 'date',
            group: 'basicInfo',
            validation: (rule) => rule
                .required()
        }),
        defineField({
            name: 'profilePicture',
            type: 'image',
            group: 'basicInfo',
            validation: (rule) => rule
                .info("Better with profile picture")
        }),
        defineField({
            name: 'gender',
            type: 'reference',
            to: [{ type: 'gender' }],
            group: 'basicInfo',
            validation: (rule) => rule
                .required()
        }),
        defineField({
            name: 'country',
            validation: (rule) => rule.required(),
            type: 'reference',
            to: { type: 'country' },
            group: 'contactInfo'
        }),
        defineField({
            name: 'city',
            type: 'reference',
            group: 'contactInfo',
            to: { type: 'city' },
            options: {
                filter: ({ document }) => {
                    if (!document.country) {
                        return {
                            filter: '_type=="city"'
                        }
                    }
                    return {
                        filter: '_type=="city" && country._ref == $countryRef',
                        params: { countryRef: document.country._ref },
                    };
                }
            }
        }),
        defineField({
            name: 'phoneNumber',
            type: 'string',
            group: 'contactInfo',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'address',
            type: 'string',
            group: 'contactInfo'
        }),
        defineField({
            name: 'postalCode',
            type: 'string',
            validation: (rule) => rule.required(),
            group: 'contactInfo'
        }),
        defineField({
            name: 'linkedin',
            type: 'string',
            title: 'LinkedIn',
            group: 'contactInfo'
        })
    ],
    preview: {
        select: {
            firstName: 'firstName',
            lastName: 'lastName',
            city: 'city.cityName',
            cityRegion: 'city.region',
            country: 'country.countryName',
            image: 'profilePicture'
        },
        prepare({ firstName, lastName, city, cityRegion, country, image }) {
            let fullname = firstName;
            if (lastName) {
                fullname = `${fullname} ${lastName}`
            }
            return {
                title: `${fullname}`,
                subtitle: `${city}, ${cityRegion}, ${country}`,
                media: image || UserIcon
            }
        }
    }
})