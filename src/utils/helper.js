export const formatNumber = (value = 0) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getColorRank = (value = 0) => {
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

export const getColorTextPercent = (value = 0) => {
  let color = "#e0e0e0";
  if (value > 0 && value < 40.2) {
    color = "#f62459";
  } else if (value > 40.19 && value < 60.8) {
    color = "#f86200";
  } else if (value > 60.79 && value < 80) {
    color = "#fab600";
  } else if (value > 79.99 && value < 101) {
    color = "#5fcd8a";
  }
  return color;
};
export const getColorProgressBar = (value = 0) => {
  let color = "#e0e0e0";
  if (value > 0 && value < 26) {
    color = "#f62459";
  } else if (value > 25 && value < 37.6) {
    color = "#f86200";
  } else if (value > 37.5 && value < 50) {
    color = "#fab600";
  } else if (value > 49 && value < 100) {
    color = "#5fcd8a";
  } else {
    color = "#00908d";
  }
  return color;
};
