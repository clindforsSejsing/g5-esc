export const filterSolutions = (() => {
  const topThree = (data) =>
    data.sort((a, b) => {
      return b.rating - a.rating;
    });

  return {
    topThree,
  };
})();
