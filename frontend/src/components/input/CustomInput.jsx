import { useState } from 'react';
import { LuEyeClosed } from 'react-icons/lu';
import './CustomInput.css';
import { LuEye } from "react-icons/lu";

const CustomInput = ({
  placeholder,
  value,
  onChange,
  type = 'text',
  name,
  hasError = false,
}) => {
  const [showPasword, setshowPasword] = useState(false);

  const toggleShowPassword = () => {
    setshowPasword(!showPasword);
  };

  return (
    <div className="input-box">
      <input
        type={showPasword ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        style={{ border: hasError ? '2.5px solid red' : '' }}
        className="input"
      />
      {type === 'password' && (
        <div className="icon-box" onClick={toggleShowPassword} >
          {showPasword ? <LuEye /> : <LuEyeClosed />}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
