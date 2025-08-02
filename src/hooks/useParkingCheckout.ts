import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import type { ParkingResponse } from '../commons/models/parking-response';
import type { ErrorResponse } from '../commons/models/error-response';
import type { ParkingRequest } from '../commons/models/parking-request';
import { API_BASE_URL } from '../commons/constants';

export default function useParkingCheckout() {
  const [vehiclePlateNumber, setVehiclePlateNumber] = useState('');
  const [detail, setDetail] = useState<ParkingResponse | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCheckStatus = async () => {
    setError(undefined);
    setDetail(undefined);
    setIsLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/api/detail/${vehiclePlateNumber}`);
      setDetail(res.data);
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        const errResponse = axiosError.response.data as ErrorResponse;
        setError(errResponse.message);
      } else {
        setError('Oops, terjadi kesalahan');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckout = async () => {
    setError(undefined);
    setIsLoading(true);
    try {
      const payload: ParkingRequest = { vehiclePlateNumber };
      await axios.post(`${API_BASE_URL}/api/check-out`, payload);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Checked Out Successfully',
        showConfirmButton: true,
      }).then((res) => {
        if (res.isConfirmed) navigate('/');
      });
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        const errResponse = axiosError.response.data as ErrorResponse;
        setError(errResponse.message);
      } else {
        setError('Oops, terjadi kesalahan');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    vehiclePlateNumber,
    setVehiclePlateNumber,
    detail,
    error,
    isLoading,
    handleCheckStatus,
    handleCheckout,
  };
}
