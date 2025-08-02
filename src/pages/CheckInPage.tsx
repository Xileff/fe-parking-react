import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';
import TextField from '../components/TextField';
import { useCheckIn } from '../hooks/useCheckIn';

export default function CheckInPage() {
  const { vehiclePlateNumber, setVehiclePlateNumber, isLoading, error, handleSubmit } =
    useCheckIn();

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl shadow-lg p-6 w-full max-w-md space-y-6'>
        <Link to='/' className='text-blue-600 hover:underline text-sm'>
          &larr; Back to Home
        </Link>

        <h2 className='text-2xl font-semibold text-center text-gray-800'>Check In Vehicle</h2>

        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Plate Number</label>

            <TextField
              placeholder='Example: B1234XYZ'
              value={vehiclePlateNumber}
              onChange={setVehiclePlateNumber}
              isRequired
            />
          </div>

          {error && <ErrorMessage message={error} />}

          <Button
            title='Check In'
            isLoading={isLoading}
            isDisabled={!vehiclePlateNumber}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}
