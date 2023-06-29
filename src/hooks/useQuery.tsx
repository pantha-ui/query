type Search = string;
type Item = string;

const handleSearch = (search: Search) => {
  const arr = search.replace("?", "").split("&");
  let sorted = {};

  arr.forEach((item: Item) => {
    const arr = item.split("=");
    sorted[arr[0]] = arr[1];
  });

  return sorted;
};

export const useQuery = () => {
  const search = window.location.search;
  if (search === "") {
    return { query: null };
  } else {
    const result = handleSearch(search);
    return result as any;
  }
};
