import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  console.log(media.data.);
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
