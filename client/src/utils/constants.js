const initPermissions = [
  { permission: "View", checked: false },
  { permission: "Create", checked: false },
  { permission: "Delete", checked: false },
  { permission: "Edit", checked: false },
];

export const userDetails = {
  FirstName: "",
  LastName: "",
  Email: "",
  SessionTimeOut: "",
  Role: "User",
  moviesPermissions: initPermissions,
  subscriptionsPermissions: initPermissions,
};

export const movieDetails = {
  Name: "",
  Runtime: "",
  AgeRestriction: "",
  Genres: [],
  Premiered: "",
  Language: "",
  Image: "",
  Trailer: "",
  Plot: "",
};

export const memberDetails = {
  Name: "",
  Email: "",
  City: "",
  Phone: "",
};

export const genresOptions = [
  "Actions",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Sport",
  "Thriller",
];

export const restricationsOptions = [
  "21+",
  "18+",
  "16+",
  "14+",
  "12+",
  "8+",
  "No limit",
];
