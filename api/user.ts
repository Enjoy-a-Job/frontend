import axios from "axios";
import { apiBaseUrl } from '@/config';

export type RegisterAddressBody = {
  latitude: string,
  longitude: string,
  name: string,
  street: string,
  city: string,
  region: string,
  country: string,
}

export const registerAddress = async (body: RegisterAddressBody) => {
  const { data } = await axios.post(`${apiBaseUrl}/register`, body);
  return data;
};