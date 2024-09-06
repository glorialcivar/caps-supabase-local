// Image types and interfaces
import { CDNImage, URLImage } from "artisn-rn/types";

export interface TransformMockImageSizeConfig {
  imageWidth: number;
  imageHeight: number;
}

export interface TransformMockImageSize {
  (image: URLImage, config: TransformMockImageSizeConfig): URLImage;
  (image: CDNImage, config: TransformMockImageSizeConfig): CDNImage;
}
