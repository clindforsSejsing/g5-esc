export const loadData = async () => {
  try {
    const url = "https://lernia-sjj-assignments.vercel.app/api/challenges";
    const response = await fetch(url);
    const data = await response.json();
    const challenges = data.challenges;
    return challenges;
  } catch (error) {
    console.log(error);
  }
};



