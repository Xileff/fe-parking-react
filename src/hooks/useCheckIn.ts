import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios, { AxiosError } from 'axios';
import type { ParkingRequest } from '../commons/models/parking-request';
import type { ErrorResponse } from '../commons/models/error-response';
import { API_BASE_URL } from '../commons/constants';

export const useCheckIn = () => {
  const [vehiclePlateNumber, setVehiclePlateNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(undefined);
    setIsLoading(true);

    try {
      const payload: ParkingRequest = { vehiclePlateNumber };
      await axios.post(`${API_BASE_URL}/api/check-in`, payload);
      setIsLoading(false);

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Parked successfully',
        showConfirmButton: true,
      }).then((res) => {
        if (res.isConfirmed) navigate('/');
      });
    } catch (err) {
      setIsLoading(false);
      const error = err as AxiosError;
      if (error.response) {
        const errorResponse: ErrorResponse = error.response.data as ErrorResponse;
        setError(errorResponse.message);
      } else {
        setError('Oops, there was a mistake');
      }
    }
  };

  return {
    vehiclePlateNumber,
    setVehiclePlateNumber,
    isLoading,
    error,
    handleSubmit,
  };
};
