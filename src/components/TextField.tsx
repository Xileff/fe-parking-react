type TextFieldProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  isRequired?: boolean;
};

const TextField = ({ placeholder, value, onChange, isRequired = false }: TextFieldProps) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className='w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
      required={isRequired}
    />
  );
};

export default TextField;
