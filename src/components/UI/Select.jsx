import "./Ui.css";

const Select = ({ value, onChange, options }) => {
  return (
    <select
      className="select"
      value={value}
      onChange={onChange}
    >
      {options.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;