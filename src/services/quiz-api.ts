import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/app",
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTc1YzAzMzc2MzBiOTI2ZGYzYjg1NzYiLCJyb2xlcyI6WyJVc2VyIl0sInVzZXJuYW1lIjoibWF1cmljaW9tb2NjZWxsaW5AaG90bWFpbC5jb20iLCJuYW1lIjoiTWF1cmljaW8gTW9jY2VsaW4iLCJlbWFpbCI6Im1hdXJpY2lvbW9jY2VsbGluQGhvdG1haWwuY29tIiwiaWF0IjoxNjM1NjE2OTk0LCJleHAiOjE2MzU2MjA1OTR9.4sRfshu1qf3q8UOXOLJNEJ0jcnb-jVKYrzJIxPnGbGQ",
  },
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

export class QuizUserDto {
  name!: string;
  email!: string;
}

export class QuizCategoryDto {
  active!: boolean;
  description!: string;
  questions!: QuizQuestionDto[];
}

export class QuizQuestionDto {
  active!: boolean;
  type!: number;
  description!: string;
}

export class QuizDto {
  _id!: string;
  active!: boolean;
  description!: string;
  quizOf!: QuizUserDto;
  categories!: QuizCategoryDto[];
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
      console.error(error);
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

export const getAllQuizService = createAsyncActionHandler({
  defaultValue: [] as QuizDto[],
  onError: (defaultValue: any) => defaultValue,
  action: async () => {
    const response = await http.get("/quizzes/get-all", {
      params: {
        skip: 0,
        limit: 10,
      },
    });

    return response.data as QuizDto[];
  },
});
