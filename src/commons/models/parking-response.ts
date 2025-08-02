export type ParkingResponse = {
  vehiclePlateNumber: string;
  checkInTime: string;
  checkOutTime?: string;
  totalPrice?: number;
};
