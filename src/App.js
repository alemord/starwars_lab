import { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './Components/StarshipCard';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      const data = await getAllStarships();
      setStarships(data);
    }

    fetchStarships();
  }, []);

  return (
    <div>
      <h1 class = "title"> Starships</h1>
      <div className="card-container">
        {starships.map(starship => (
          <StarshipCard
            key={starship.name}
            starship={starship}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

