import { defineField, defineType } from "sanity";
import { filter } from "sanity/migrate";

export const projectType = defineType({
    name: 'project',
    type: 'document',
    title: 'Project',
    fieldsets: [
        { name: 'duration', options: { columns: 2 } }
    ],
    fields: [
        defineField({
            name: 'projectTitle',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name:'slug',
            type:'slug',
            options:{
                source:'projectTitle'
            },
            validation:(rule)=>rule.required()
        }),
        defineField({
            name: 'from',
            fieldset: 'duration',
            type: 'date'
        }),
        defineField({
            name: 'to',
            type: 'date',
            fieldset: 'duration'
        }),
        defineField({
            name: 'image',
            type: 'image'
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{
                type: 'block'
            }]
        }),
        defineField({
            name: 'actor',
            type: 'reference',
            to: { type: 'profile' }
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ 
                type: 'reference', 
                to: [{ type: 'technology' }] ,
                options:{
                    filter:({document})=>{
                        const selectedTech = (document?.technologies||[]).map(
                            (ref:any)=>ref._ref
                        )
                        return {
                            filter:'!(_id in $selected)',
                            params:{selected:selectedTech}
                        }
                    }
                }
            }]
        })

    ]
})