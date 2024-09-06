//Image utility function
import { Category, CDNImage, Image, Product } from "@artisan-commerce/types";

import { TransformMockImageSizeConfig } from "../lib/categories/categories.service.types";
import { getState } from "../lib/state";

// If mocks are on, tweak the URL to include the wanted dimensions
export const transformMockImageSize = <T extends Image = CDNImage>(
  image: T,
  config: TransformMockImageSizeConfig
): T => {
  const separator = "/image/upload";
  let bits: string[];
  const regex = new RegExp(/\/c_fill,h_\d*,w_\d*\//g);
  if (typeof image === "string") {
    bits = image.replace(regex, "/").split(separator);
  } else {
    bits = image.url.replace(regex, "/").split(separator);
  }
  if (bits.length !== 2) {
    throw new Error(
      `Only cloudinary images are supported, please upload the image to the cloudinary account.
      ${typeof image === "string" ? image : image.url}`
    );
  }
  const { imageHeight, imageWidth } = config;
  const url = `${bits[0]}${separator}/c_fill,h_${imageHeight},w_${imageWidth}${bits[1]}`;
  if (typeof image === "string") {
    return url as T;
  } else {
    return { ...(image as CDNImage), url } as T;
  }
};

export const transformMockImagesSize = <T extends Image = CDNImage>(
  images: T[],
  config: TransformMockImageSizeConfig
): T[] => {
  const { shouldMock } = getState();
  if (!shouldMock) return images;
  return images.map(image => transformMockImageSize(image, config));
};

export const transformProductImagesSize = (
  product: Product,
  config: TransformMockImageSizeConfig
): Product => {
  const { shouldMock } = getState();
  if (!shouldMock) return product;
  const images = transformMockImagesSize(product.images, config) as CDNImage[];
  return { ...product, images };
};

export const transformProductsImagesSize = (
  products: Product[],
  config: TransformMockImageSizeConfig
): Product[] => {
  const { shouldMock } = getState();
  if (!shouldMock) return products;
  return products.map(product => transformProductImagesSize(product, config));
};

export const transformCategoryImagesSize = (
  category: Category,
  config: TransformMockImageSizeConfig
) => {
  const { shouldMock } = getState();
  if (!shouldMock) return category;
  const images = transformMockImagesSize(category.images, config);
  return { ...category, images };
};

export const transformCategoriesImagesSize = (
  categories: Category[],
  config: TransformMockImageSizeConfig
) => {
  const { shouldMock } = getState();
  if (!shouldMock) return categories;
  return categories.map(category =>
    transformCategoryImagesSize(category, config)
  );
};
