function importAll(r: any) {
  const images: Record<any, any> = {};

  r.keys().forEach((item: string, index: number) => {
    images[item.replace('./', '')] = r(item);
  });

  return images;
}

export const weatherIcon = (imageName: string): string => {
  const allWeatherIcons = importAll(
    (require as any).context('../assets/icons', false, /\.(png)$/)
  );

  const iconsKeys = Object.keys(allWeatherIcons);
  const iconsValues = Object.values(allWeatherIcons);
  const iconIndex = iconsKeys.indexOf(imageName);

  return iconsValues[iconIndex];
}
