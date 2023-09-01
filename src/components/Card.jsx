import "./Card.css";

export function Card(props) {
  const user = props.user;
  return (
    <div className="card">
      <img src={user.picture.medium} width="70%" />
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <p>{user.location.country}</p>
      <p>{user.dob.age} years</p>
    </div>
  );
}
