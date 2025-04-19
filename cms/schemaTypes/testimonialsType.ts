import { CommentIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const testimonialsType = defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  icon:CommentIcon,
  fields: [
    {
        name: "author",
        title: "Author",
        type: "string",
        validation: (Rule) =>
          Rule.required().error("Author is required"),
      },{
        name:"company",
        title:"Company",
        type:"reference",
        to:[{type:"company"}],
      },
        {
            name: "role",
            title: "Role",
            type: "string",
            validation: (Rule) =>
              Rule.required().error("Role is required"),
          },
        {
            name: "feedback",
            title: "Feedback",
            type: "array",
            of: [
                {
                    type: "block",
                    options: {
                        // Render the block content as HTML
                        html: true,
                    },
                },
            ],
            validation: (Rule) =>
              Rule.required().error("Feedback is required"),
          }
]})