export const calculateWinRate = (wins, losses) => {
  const matches = wins + losses;

  return (wins / matches) * 100;
};
