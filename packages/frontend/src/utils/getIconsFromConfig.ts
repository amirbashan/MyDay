import config from '../config';
import DefaultImg from '../assets/icons/baseIcons/Default.svg';

export const getIcon = (category: ImageCategory, iconName = '') => {
  const cache: { [key: string]: { image: string; alt: string } } = {};
  const cacheKey = `${category}-${iconName}`;
  let imageData;
  if (!cache[cacheKey]) {
    switch (category) {
      case ImageCategory.Basic:
        imageData = config.getBaseIcon(category, iconName);
        cache[cacheKey] = {
          image: imageData.image,
          alt: imageData.alt
        };
        break;
      default:
        cache[cacheKey] = {
          image: DefaultImg,
          alt: 'Missing image'
        };
    }
  }
  return cache[cacheKey];
};

export enum ImageCategory {
  Basic = 'basic'
}
