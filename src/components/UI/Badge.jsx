import "./Ui.css";

const Badge = ({ type }) => {
  return (
    <span className={`badge badge-${type}`}>
      {type}
    </span>
  );
};

export default Badge;