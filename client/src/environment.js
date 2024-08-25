const config = {
  apiURL:
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_CINEMA_API_PROD
      : import.meta.env.VITE_CINEMA_API_DEV,
};

export default config;
