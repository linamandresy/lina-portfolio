import { defineField, defineType } from "sanity";

export const projectType = defineType({
    name:'project',
    type:'document',
    title:'Project',
    fieldsets:[
        {name:'duration',options:{columns:2}}
    ],
    fields:[
        defineField({
            name:'projectTitle',
            type:'string',
            validation : (rule)=>rule.required()
        }),        
        defineField({
            name:'from',
            fieldset:'duration',
            type:'date'
        }),
        defineField({
            name:'to',
            type:'date',
            fieldset:'duration'
        }),
        defineField({
            name:'image',
            type:'image'
        }),
        defineField({
            name:'description',
            type:'array',
            of:[{
             type:'block'   
            }]
        }),
        defineField({
            name:'actor',
            type:'reference',
            to:{type:'profile'}
        })

    ]
})