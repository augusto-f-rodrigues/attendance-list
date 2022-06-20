import "./styles.css";

export function Card(props) {
  return (
    <div className="container-card">
      <strong>{props.name}</strong>
      <p>{props.time}</p>
    </div>
  );
}
