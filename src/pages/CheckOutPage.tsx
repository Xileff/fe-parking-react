import { Link } from 'react-router-dom';
import { formatDate } from '../commons/utils/date-utils';
import { Button, ButtonType } from '../components/Button';
import TextField from '../components/TextField';
import ErrorMessage from '../components/ErrorMessage';
import { formatToRupiah } from '../commons/utils/number-utils';
import useParkingCheckout from '../hooks/useParkingCheckout';

export default function CheckOutPage() {
  const {
    vehiclePlateNumber,
    setVehiclePlateNumber,
    detail,
    error,
    isLoading,
    handleCheckStatus,
    handleCheckout,
  } = useParkingCheckout();

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl shadow-lg p-6 w-full max-w-md space-y-6'>
        <Link to='/' className='text-blue-600 hover:underline text-sm'>
          &larr; Back to Home
        </Link>

        <h2 className='text-2xl font-semibold text-center text-gray-800'>Check Out Vehicle</h2>

        <form className='space-y-4'>
          <TextField
            placeholder='Plate Number'
            value={vehiclePlateNumber}
            onChange={setVehiclePlateNumber}
            isRequired
          />
          <Button
            title='Check Status'
            isLoading={isLoading}
            isDisabled={!vehiclePlateNumber}
            onClick={handleCheckStatus}
          />
        </form>

        {error && <ErrorMessage message={error} />}

        {detail && (
          <div className='space-y-4'>
            <div className='border rounded p-4 shadow bg-gray-50'>
              <div className='grid grid-cols-2 gap-2'>
                <div className='font-medium'>Plate Number:</div>
                <div>{vehiclePlateNumber}</div>

                <div className='font-medium'>Check In Time:</div>
                <div>{formatDate(detail.checkInTime)}</div>

                {detail.checkOutTime && (
                  <>
                    <div className='font-medium'>Check Out Time:</div>
                    <div>{formatDate(detail.checkOutTime)}</div>
                  </>
                )}

                <div className='font-medium'>Total Price:</div>
                <div>{formatToRupiah(detail.totalPrice ?? 0)}</div>
              </div>
            </div>

            <Button
              title='Check Out'
              isLoading={isLoading}
              buttonType={ButtonType.DESTRUCTIVE}
              onClick={handleCheckout}
            />
          </div>
        )}
      </div>
    </div>
  );
}
