import * as React from "react";
import * as ReactDOM from "react-dom";
import GalleryDetail from "./ecommerce_image_slider/components/GalleryDetail";
import { GalleriesModel } from "./models/Gallery";

const fakeDataItems = () => {
  const idsPhotoAmazon = [
    "A1QTZDMGkqL",
    "71YRyWb0rCL",
    "81hWbfwDvkL",
    "81L9SKDriUL",
    "81m8Q6CL73L",
    "71-RnxAnScL",
  ];
  const sizes: any = { thumbnail: 150, product: 550, zoom: 850 };

  return idsPhotoAmazon.map((id, i) => {
    const o: any = {};
    for (let size in sizes) {
      o[size] = {
        url: `https://images-na.ssl-images-amazon.com/images/I/${id}._SX${sizes[size]}_.jpg`,
        alt: `foto ${i + 1} - ${sizes[size]}px`,
        format: size,
      };
    }
    return o;
  }) as GalleriesModel[];
};

ReactDOM.render(
  <GalleryDetail galleries={fakeDataItems()} thumbsPerView={3} />,
  document.getElementById("app")
);
