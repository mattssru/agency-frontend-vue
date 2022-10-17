export const formatNumber = (value = 0) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getColorRank = (value = 0) => {
  console.log("value", value);
  let color = "#e0e0e0";
  if (value > 0 && value < 51) {
    color = "#f62459";
  } else if (value > 50 && value < 76) {
    color = "#f86200";
  } else if (value > 75 && value < 100) {
    color = "#fab600";
  } else if (value === 100) {
    color = "#5fcd8a";
  }
  return color;
};
