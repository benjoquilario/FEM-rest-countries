export const convertPopulation = population => {
   const formatter = new Intl.NumberFormat();

   return formatter.format(population);
};
