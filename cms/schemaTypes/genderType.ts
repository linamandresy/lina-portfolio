import { defineType } from "sanity";

export const genderType = defineType({
    name:'gender',
    title:'Gender',
    type:'document',
    fields:[{
        name:'gender',
        type:'string',
        validation:(rule)=>rule
            .required()
    }]
})