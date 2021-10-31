import axios from "axios";

const token = localStorage.getItem("Bearer");
const http = axios.create({
  baseURL: "http://localhost:3000/app",
  headers: {
    Authorization: `Bearer ${token}`,
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

export function createAsyncActionHandler<R>({
  action,
  onError,
  defaultValue,
}: IActionHandler): (...args: any) => Promise<R> {
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

export const loginService = createAsyncActionHandler<string>({
  defaultValue: "",
  onError: (defaultValue: string) => defaultValue,
  action: async (payload: LoginDto) => {
    const response = await http.post<{ access_token: string }>(
      "/auth/login",
      payload
    );
    const { access_token } = response?.data;

    return response.status === 201 ? access_token : "";
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

export const getAllQuizService = createAsyncActionHandler<Array<QuizDto>>({
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

export const getQuizById = createAsyncActionHandler<QuizDto>({
  defaultValue: [] as QuizDto[],
  onError: (defaultValue: any) => defaultValue,
  action: async (id: string) => {
    const response = await http.get("/quizzes/get-by-id", {
      params: {
        id,
      },
    });

    return response.data as QuizDto;
  },
});
