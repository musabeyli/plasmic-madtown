import * as React from "react";
import * as ReactDOM from "react-dom";
import GalleryDetail from "./ecommerce_image_slider/components/GalleryDetail";
import { GalleriesModel } from "./ecommerce_image_slider/models/Gallery";

export const fakeDataItems = () => {
  const idsPhotoAmazon = [
    "gamebox_gameplay_cards,jpg",
    "gamebox_gameplay_side.jpg",
    "gamebox_cover",
    "gamebox_back_cover",
  ];
  const sizes: any = { thumbnail: 150, product: 550, zoom: 850 };

  return idsPhotoAmazon.map((id, i) => {
    const o: any = {};
    for (let size in sizes) {
      o[size] = {
        url: `https:/www.madisonopoly.com/plasmic/blank_project/images/website_images/${id}`,
        alt: `foto ${i + 1} - ${sizes[size]}px`,
        format: size,
      };
    }
    return o;
  }) as GalleriesModel[];
};

// ReactDOM.render(
//   <GalleryDetail galleries={fakeDataItems()} thumbsPerView={3} />,
//   document.getElementById("app")
// );
