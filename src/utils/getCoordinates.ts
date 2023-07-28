const getCoordinates = (points: number[][]): string => {
  const coordinates = points
    .map((point) => {
      const newPoint = [...point];
      return newPoint.reverse().join(',');
    })
    .join(';');

  return coordinates;
};

export { getCoordinates };
