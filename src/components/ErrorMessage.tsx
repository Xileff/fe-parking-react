type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <p className='text-sm text-red-600 bg-red-50 border border-red-200 p-2 rounded'>{message}</p>
  );
};

export default ErrorMessage;
