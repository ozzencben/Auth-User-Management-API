import './CustomButton.css';

const CustomButton = ({ title, onClick, disabled }) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default CustomButton;
