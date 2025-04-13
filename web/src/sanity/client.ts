import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'b7tr1fbj',
    dataset: 'production',
    apiVersion: "2024-11-01",
    useCdn: false,
});