export const formatNumber = (value = 0) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};