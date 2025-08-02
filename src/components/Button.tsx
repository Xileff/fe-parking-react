enum ButtonType {
  PRIMARY,
  DESTRUCTIVE,
}

type ButtonProps = {
  title: string;
  isLoading: boolean;
  isDisabled?: boolean;
  buttonType?: ButtonType;
  onClick: () => void;
};

const Button = ({
  title,
  isLoading,
  onClick,
  isDisabled = false,
  buttonType = ButtonType.PRIMARY,
}: ButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      disabled={isLoading || isDisabled}
      className={`w-full py-2 px-4 text-white rounded-md transition ${
        isLoading || isDisabled
          ? 'bg-gray-400 cursor-not-allowed'
          : `${
              buttonType === ButtonType.PRIMARY
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-red-600 hover:bg-red-700'
            }`
      }`}
    >
      {isLoading ? (
        <span className='flex items-center justify-center'>
          <svg
            className='animate-spin mr-2 h-4 w-4 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z'
            ></path>
          </svg>
          Loading...
        </span>
      ) : (
        title
      )}
    </button>
  );
};

export { Button, ButtonType };
