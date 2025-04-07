import { defineType } from "sanity";

export const techCategoryType = defineType({
    name:'techCategory',
    type:'document',
    title:'Technology`s Category',
    fields:[{
        name:'name',
        type:'string',
        validation:(rule)=>rule.required()
    }]
})