import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

/* The line `const { projectId, dataset } = client.config();` is destructuring the `config` object from
the `client` and extracting the `projectId` and `dataset` properties into separate variables
`projectId` and `dataset`. This allows easy access to these properties for further use in the code. */
const { projectId, dataset } = client.config();
/**
 * The function `urlFor` generates an image URL using the provided SanityImageSource, projectId, and
 * dataset.
 * @param {SanityImageSource} source - The `source` parameter in the `urlFor` function is of type
 * `SanityImageSource`. It is used to specify the image source for which the URL needs to be generated.
 */
export const urlFor = (source: SanityImageSource) =>{
    if(!source) return null;
    return projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
}
    