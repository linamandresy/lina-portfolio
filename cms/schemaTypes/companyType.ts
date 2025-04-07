import { CaseIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const companyType = defineType({
    name:'company',
    type:'document',
    icon:CaseIcon,
    fields:[
        defineField({
            name:'companyName',
            type:'string',
            validation:(rule)=>rule.required()
        }),
        defineField({
            name:'location',
            type:'reference',
            to:{type:'country'}
        }),
        defineField({
            name:'image',
            type:'image'
        }),
        defineField({
            name:'website',
            type:'string'
        }),
        defineField({
            name:'description',
            type:'array',
            of:[{type:'block'}]
        }),
        defineField({
            name:'projects',
            type:'array',
            of:[{type:'reference',to:{type:'project'}}]
        })
    ]
})