export const getRandomPhone = () => {
  const randomNum =
    Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
  return `05${randomNum}`;
};
