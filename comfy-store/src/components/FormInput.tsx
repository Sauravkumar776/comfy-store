import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  defaultValue?: string | number;
}

const FormInput = ({ label, name, type, defaultValue,placeholder }: FormInputProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="input input-bordered"
      />
    </div>
  );
};

export default FormInput;
