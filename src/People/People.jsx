export const People = ({ people }) => (
    <div>
      <h2>Lista de personas</h2>
      <ul>
        {people.map((person) => (
          <li key={person.firstName}>{person.firstName} {person.lastName}</li>
        ))}
      </ul>
    </div>
  );
  
