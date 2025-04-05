import { defineType } from "sanity";

export const cityType = defineType({
    name:'city',
    title:'City',
    type:'document',
    fields:[{
        name:'cityName',
        type:'string',
        validation:(rule)=>rule.required()
    },{
        name:'region',
        type:'string',
        validation:(rule)=>rule.required()
    },{
        name:'country',
        type:'reference',
        to:{type:'country'},
        validation:(rule)=>rule.required()
    }],
    preview:{
        select:{
            cityName:'cityName',
            region:'region',
            country:'country.countryName'
        },
        prepare({cityName,region,country}){
            return {
                title:`${cityName}, ${region}`,
                subtitle:`${country}`
            }
        }
    }
})