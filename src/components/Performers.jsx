export default function Performers({ actresses, actors }) {
  return (
    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-2">
      {actresses.map((actress) => {
        const { image, name, birth_year, nationality, biography, awards } = actress;
        return (
          <div key={actress.id} className="col">
            <div className="card">
              <img className="card-img-top" src={image} alt={name} />
              <div className="card-body">
                <h5 className="card-title mb-0">{name}</h5>
                <div className="birth-nationality border-bottom mb-1">
                  {birth_year} - {nationality}
                </div>
                <p className="bio mb-1">{biography}</p>
                <div className="list-heading mt-2 border-top">Awards:</div>
                <ul className="awards list-unstyled mb-0">
                  <li>
                    <strong>{awards}</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
      {actors.map((actor) => {
        const { image, name, birth_year, nationality, biography, awards } = actor;
        return (
          <div key={actor.id} className="col">
            <div className="card">
              <img className="card-img-top" src={image} alt={name} />
              <div className="card-body">
                <h5 className="card-title mb-0">{name}</h5>
                <div className="birth-nationality border-bottom mb-1">
                  {birth_year} - {nationality}
                </div>
                <p className="bio mb-1">{biography}</p>
                <div className="list-heading mt-2 border-top">Awards:</div>
                <ul className="awards list-unstyled mb-0">
                  {awards.map((award, index) => (
                    <li key={index}>
                      <strong>{award}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
