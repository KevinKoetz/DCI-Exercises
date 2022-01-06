import "./DogDetails.css";

function DogDetails({
  name,
  age,
  traits,
}: {
  name: string;
  age: number;
  traits: string[];
}) {
  return (
    <div className="DogDetails">
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      {traits.map((trait, index) => (
        <p key={index}>{trait}</p>
      ))}
    </div>
  );
}

export default DogDetails;
