export const filter = (() => {
  const topThree = (data) =>
    data.sort((a, b) => {
      return b.rating - a.rating;
    });

  const search = (searchInput, challenges) =>
    challenges.filter(
      (challenge) =>
        challenge.title.toLowerCase().includes(searchInput) ||
        challenge.description.toLowerCase().includes(searchInput)
    );

  const type = (typeSelected, challenges) =>
    typeSelected.length > 0
      ? challenges.filter((challenge) => typeSelected.includes(challenge.type))
      : challenges;

  const rating = (minRating, maxRating, challenges) => {
    const ratingResults = challenges.filter(
      (challenge) =>
        challenge.rating >= minRating && challenge.rating <= maxRating
    );
    return ratingResults;
  };

  const tags = (tagsSelected, challenges) => {
    const filterTags = challenges.filter((challenge) =>
      tagsSelected.every((tags) => challenge.labels.includes(tags))
    );
    const result = tagsSelected.length > 0 ? filterTags : challenges;
    return result;
  };
  const challenges = (
    typeSelected,
    tagsSelected,
    searchInput,
    minRating,
    maxRating,
    challenges
  ) => {
    const filterResult = filter.search(
      searchInput,
      filter.type(
        typeSelected,
        filter.rating(
          minRating,
          maxRating,
          filter.tags(tagsSelected, challenges)
        )
      )
    );
    return filterResult;
  };

  return {
    topThree,
    search,
    type,
    tags,
    rating,
    challenges,
  };
})();
