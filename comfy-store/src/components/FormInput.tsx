import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  defaultValue?: string | number;
  size: string
}

const FormInput = ({ label, name, type, defaultValue,size, placeholder }: FormInputProps) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};

export default FormInput;
