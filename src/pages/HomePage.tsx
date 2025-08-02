import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
      <h1 className='text-2xl font-bold'>Welcome to Parking System</h1>
      <div className='flex gap-4'>
        <Link to={'/check-in'}>
          <button className='bg-green-500 text-white px-4 py-2 rounded'>Check In</button>
        </Link>

        <Link to={'/check-out'}>
          <button className='bg-red-500 text-white px-4 py-2 rounded'>Check Out</button>
        </Link>
      </div>
    </div>
  );
}
