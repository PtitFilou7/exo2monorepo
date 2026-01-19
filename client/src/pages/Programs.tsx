import { useEffect, useState } from "react";

interface programmes {
  title: string;
  synopsis: string;
  country: string;
  year: number;
  poster: string;
}

function Programs() {
  const [seriesList, setSeriesList] = useState<programmes[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((res) => setSeriesList(res));
  }, []);
  return (
    <>
      {console.log(seriesList)}
      {seriesList.map((serie) => (
        // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
        <div>
          <h2>{serie.title}</h2>
          <img src={serie.poster} alt={serie.title} />
          <p>{serie.year}</p>
          <p>{serie.country}</p>
          <p>{serie.synopsis}</p>
        </div>
      ))}
    </>
  );
}

export default Programs;
