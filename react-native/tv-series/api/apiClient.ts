import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

export class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    // eslint-disable-next-line import/no-named-as-default-member
    this.client = axios.create({
      baseURL,
    });
  }

  getClient() {
    return this.client;
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);

    return response.data;
  }

  async post<T, D = unknown>(url: string, body: D, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, body, config);

    return response.data;
  }

  async put<T, D = unknown>(url: string, body: D, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, body, config);

    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);

    return response.data;
  }
}

export const apiClient = new ApiClient(process.env.EXPO_PUBLIC_API_URL);
