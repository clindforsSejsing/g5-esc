export const filter = (() => {
  const topThree = (data) =>
    data.sort((a, b) => {
      return b.rating - a.rating;
    });

  const search = (searchInput, challenges) => {
    const searchResults = challenges.filter(
      (challenge) =>
        challenge.title.toLowerCase().includes(searchInput) ||
        challenge.description.toLowerCase().includes(searchInput)
    );
    console.log(searchResults);
    return searchResults;
  };

  const type = (typeSelected, challenges) => {
    const checkResults = challenges.filter((challenge) =>
      typeSelected.includes(challenge.type)
    );
    console.log(checkResults);
    return checkResults;
  };

  const rating = (minRating, maxRating, challenges) => {
    const ratingResults = challenges.filter(
      (challenge) =>
        challenge.rating >= minRating && challenge.rating <= maxRating
    );
    console.log(ratingResults);
    return ratingResults;
  };

  const tags = (tagsSelected, challenges) => {
    const tagResults = challenges.filter((challenge) =>
      tagsSelected.every((tags) => challenge.labels.includes(tags))
    );
    console.log(tagsSelected);
    console.log(tagResults);
    return tagResults;
  };

  return {
    topThree,
    search,
    type,
    tags,
  };
})();
