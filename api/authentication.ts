import axios from "axios";
import { apiBaseUrl } from '@/config';

export type RegisterBody = {
  name: string;
  lastname: string;
  alias: string;
  phone: string;
  email: string;
  password: string;
}

export const register = async (body: RegisterBody) => {
  const { data } = await axios.post<{
    success: boolean,
    message: string,
  }>(`${apiBaseUrl}/register`, body);
  return data;
};