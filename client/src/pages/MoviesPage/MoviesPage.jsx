import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const dummyMovies = [
    {
      Name: "Triumph",
      Plot: "Inspired by a real story, a determined high school senior strives to be a wrestler one last time despite having cerebral palsy and goes to extreme lengths, crushing obstacles and inspiring others along his journey to prove his abilities.",
      Runtime: 100,
      Genres: ["Drama"],
      Trailer:
        "https://www.youtube-nocookie.com/embed/OdEUE_W2XE0?hd=1&wmode=opaque&controls=1&showinfo=0&autoplay=1",
      Image:
        "https://m.media-amazon.com/images/M/MV5BNzFjZjEyZTEtZGI2Yi00ZWE5LWI5MmUtNWFiMGJiYmYxYzU4XkEyXkFqcGdeQXVyMTY5NTkwNDk@._V1_SX300.jpg",
      Premiered: "2021-04-30",
      AgeRestriction: "No limit",
    },
    {
      Name: "Wonka",
      Plot: "With dreams of opening a shop in a city renowned for its chocolate, a young and poor Willy Wonka discovers that the industry is run by a cartel of greedy chocolatiers.",
      Runtime: 116,
      Genres: ["Adventure", "Comedy", "Family"],
      Trailer: "https://www.youtube-nocookie.com/embed/7O1TyCgXjEo?hd=1&wmode=opaque&controls=1&showinfo=0&autoplay=1",
      Image: "https://m.media-amazon.com/images/M/MV5BNDM4NTk0NjktZDJhMi00MmFmLTliMzEtN2RkZDY2OTNiMDgzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
      Premiered: "2023-12-15",
      AgeRestriction: "No limit"
  },
  {
      Name: "King of Killers",
      Plot: "Garan is a part of a group of international hitmen who are contracted to take out the most dangerous killer in the world, only to find out that they're the ones being hunted.",
      Runtime: 92,
      Genres: ["Action", "Crime", "Mystery"],
      Trailer: "https://www.youtube-nocookie.com/embed/bl-x2oPGEKs?hd=1&wmode=opaque&controls=1&showinfo=0&autoplay=1",
      Image: "https://m.media-amazon.com/images/M/MV5BOTUxMzVlYzUtMDRjYS00N2ZlLWE1NDItMzc0NWEyNjdiNTRlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
      Premiered: "2023-09-01",
      AgeRestriction: "Over 16"
  },
  {
      Name: "The Miracle Club",
      Plot: "There's just one dream for the women of Ballygar to taste freedom: to win a pilgrimage to the sacred French town of Lourdes.",
      Runtime: 90,
      Genres: ["Comedy", "Drama"],
      Trailer: "https://www.youtube-nocookie.com/embed/C__835DgPT4?hd=1&wmode=opaque&controls=1&showinfo=0&autoplay=1",
      Image: "https://m.media-amazon.com/images/M/MV5BMjk1YmM0OTctNDliMC00MGUxLWI5M2YtNjMxZWYyY2ExMTU4XkEyXkFqcGdeQXVyMTQyODg5MjQw._V1_SX300.jpg",
      Premiered: "2023-07-14",
      AgeRestriction: "No limit"
  },
  {
      Name: "Savage Salvation",
      Plot: "A recovering opioid addict seeks revenge on the dealers responsible for selling the drugs that resulted in his fiancee's death.",
      Runtime: 101,
      Genres: ["Action", "Thriller"],
      Trailer: "https://www.youtube-nocookie.com/embed/BZnfQv9wDmE?hd=1&wmode=opaque&controls=1&showinfo=0&autoplay=1",
      Image: "https://m.media-amazon.com/images/M/MV5BN2VjZGUwZjAtZDhlZS00NTYzLThiY2MtM2M3MDJlODI0NTJiXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg",
      Premiered: "2022-12-06",
      AgeRestriction: "Over 16"
  },
  {
      Name: "Freelance",
      Plot: "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but when a military coup breaks out in the middle of the interview, they are forced to escape into the jungle.",
      Runtime: 108,
      Genres: ["Action", "Comedy"],
      Trailer: "https://www.youtube-nocookie.com/embed/LKBgzbrNEq4?hd=1&wmode=opaque&controls=1&showinfo=0&autoplay=1",
      Image: "https://m.media-amazon.com/images/M/MV5BZmM2ZGU1NGUtNjhiYy00YzEwLWE0MDctNGRlZmZiY2E5ZTY0XkEyXkFqcGdeQXVyMjI0NjI0Nw@@._V1_SX300.jpg",
      Premiered: "2023-10-27",
      AgeRestriction: "No limit"
  },
  {
      Name: "Madame Web",
      Plot: "Cassandra Webb develops the power to see the future. Forced to confront revelations about her past, she forges a relationship with three young women bound for powerful destinies, if they can all survive a deadly present.",
      Runtime: 117,
      Genres: ["Action", "Adventure", "Sci-Fi"],
      Trailer: "https://www.youtube-nocookie.com/embed/1ZAe_SeugMc?hd=1&wmode=opaque&controls=1&showinfo=0&autoplay=1",
      Image: "https://m.media-amazon.com/images/M/MV5BMjhkYjA0ZmUtM2I4OC00YzQ1LTk2YWUtYjA3ZGRhM2YzYWU1XkEyXkFqcGdeQXVyMTc1MzUzOTY0._V1_SX300.jpg",
      Premiered: "2024-02-14",
      AgeRestriction: "No limit"
  },
  {
      Name: "Bob Marley: One Love",
      Plot: "The story of how reggae icon Bob Marley overcame adversity, and the journey behind his revolutionary music.",
      Runtime: 104,
      Genres: ["Biography", "Drama", "Music"],
      Trailer: "https://www.youtube-nocookie.com/embed/D780inMaXTY?hd=1&wmode=opaque&controls=1&showinfo=0&autoplay=1",
      Image: "https://m.media-amazon.com/images/M/MV5BZTRjYzlhNjQtOWZjOC00ZGQzLWEzZjAtMDZjZjBkODMwNWRiXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_SX300.jpg",
      Premiered: "2024-02-14",
      AgeRestriction: "No limit"
  },
  ];
  return (
    <div className={styles.moviesPage}>
      <div className={styles.movieCardsContainer}>
        {dummyMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
