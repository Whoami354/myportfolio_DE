import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = createClient({
    projectId: 'hqnev04d',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skwqMv9Ij5cGg0jBw9kRJ6erPURyhnbq8BG2Xtm1kM3LDKS3ZBYytTIxP56j2iaLGv6thiyGx92zG37TYWF0reSHhNjpuGIMmmZdvukCLqw9Uaw9QaRBE6lMPtT0LZ5QxMB2NXSOwpT3hTD4TvkwF2t3nFCcKnldKneWAuxb0BXg8Wyy7AAm',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);