import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:4000/app",
});

interface IActionHandler {
  action: any;
  onError: any;
  defaultValue: any;
}

export class LoginDto {
  username!: string;
  password!: string;
}

export class UserDto {
  name!: string;
  email!: string;
  username!: string;
  password!: string;
  roles!: string[];

  constructor() {
    this.name = "";
    this.email = "";
    this.username = "";
    this.password = "";
    this.roles = ["User"];
  }
}

export function createAsyncActionHandler({
  action,
  onError,
  defaultValue,
}: IActionHandler): (...args: any) => Promise<any> {
  return async (...args: any) => {
    try {
      const returnValue = await action(...args);
      return returnValue !== undefined ? returnValue : defaultValue;
    } catch (error) {
      console.error(error)
      onError(defaultValue);
      return defaultValue;
    }
  };
}

export const loginService = createAsyncActionHandler({
  defaultValue: "",
  onError: (defaultValue: any) => defaultValue,
  action: async (payload: LoginDto) => {
    const response = await http.post("/auth/login", payload);
    return response.data;
  },
});

export const registerService = createAsyncActionHandler({
  defaultValue: false,
  onError: (defaultValue: any) => defaultValue,
  action: async (payload: UserDto) => {
    const response = await http.post("/users/register", payload);
    return response.status === 201;
  },
});