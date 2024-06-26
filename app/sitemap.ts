export default async function sitemap() {
    const baseUrl = 'https://sergiu.ie';

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/projects`, lastModified: new Date() }
    ];
}