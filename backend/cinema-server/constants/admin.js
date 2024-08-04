export const personalInfo = {
  FirstName: "Ron",
  LastName: "Levi",
  SessionTimeOut: "60",
  Role: "Admin",
  CreatedDate: new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
};

export const permissions = {
  movies: ["View", "Create", "Edit", "Delete"],
  subscriptions: ["View", "Create", "Edit", "Delete"],
};
