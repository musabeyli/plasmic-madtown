import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  console.log(media.data.attributes.url);
  const { url } = media.data.attributes.url;
  console.log();
  // const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return getStrapiURL(url);
}
