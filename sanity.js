import {
    createClient,
} from'next-sanity'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2022-5-17',
    useCdn: process.env.NODE_ENV === 'production',
}


export const SanityClient = createClient(config)
