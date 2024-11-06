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
    message: string,
    user: {
      alias: string,
      name: string,
      email: string,
      phone: string,
      id: string,
      updated_at: string,
      created_at: string,
    }
  }>(`${apiBaseUrl}/register`, body);
  return data;
};

export const resendText = async (body: { phone: string }) => {
  const { data } = await axios.post<{
    message: string,
  }>(`${apiBaseUrl}/re-send-validate-code`, body);
  return data;
};

export const validateTwilioCode = async (body: { phone: string, code: string }) => {
  const { data } = await axios.post<{
    status: string,
  }>(`${apiBaseUrl}/validate-code`, body);
  return data;
}