export const createCategories = (data) => {
  const all = {};
  if (data !== undefined) {
    data.map((data) => {
      return data.category.map((category) => {
        if (all[category]) {
          return (all[category] = all[category] + 1);
        } else {
          return (all[category] = 1);
        }
      });
    });
  }
  const newArr = Object.entries(all);
  return newArr;
};
