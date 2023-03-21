function StarshipCard({ starship }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{starship.name}</h5>
        <p>Model: {starship.model}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
        <p>Length: {starship.length}</p>
      </div>
    </div>
  );
}

export default StarshipCard;
