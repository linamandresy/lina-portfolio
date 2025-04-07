import { CubeIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const technologyType = defineType({
    name:'technology',
    title:'Technology',
    type:'document',
    icon:CubeIcon,
    fields:[{
        name:'techName',
        type:'string',
        validation:(rule)=>rule.required()
    },{
        name:'logo',
        type:'image',
        validation:(rule)=>rule.required()
    },{
        name:'category',
        type:'reference',
        to:[{type:'techCategory'}],
        validation:(rule)=>rule.required()
    }]
})