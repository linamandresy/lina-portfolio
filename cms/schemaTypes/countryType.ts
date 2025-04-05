import { defineType } from "sanity";

export const countryType = defineType({
    name:'country',
    type:'document',
    title:'Country',
    fields:[{
        name:'countryName',
        type:'string',
        validation:(rule)=>rule.required()
    },{
        name:'countryCode',
        type:'string',
        validation:(rule)=>rule.required()
    },{
        name:'areaCode',
        title:'Phone Area Code',
        type:'string',
        validation:(rule)=>rule.required()
    }],
    preview:{
        select:{
            country:'countryName',
            areaCode:'areaCode',
            countryCode:'countryCode'
        },
        prepare({country,areaCode,countryCode}){
            return {
                title:country,
                subtitle:`${areaCode} ${countryCode}`
            }
        }
    }
})