import "./Ui.css";

const Button = ({ children, onClick, type = "primary" }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${type}`}
    >
      {children}
    </button>
  );
};

export default Button;