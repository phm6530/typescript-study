import axios, { AxiosResponse } from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

//기본 단일로 처리할때 axios type
const fetchAxios = async <T>(url: string): Promise<T> => {
  try {
    const { data }: AxiosResponse<T> = await axios.get<T>(url);
    return data; // data만 반환
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("알 수 없는 Error");
    }
  }
};

// get, post를 외부에서 핸들링하기위해 추상화
interface PostLists {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const commonAxios = async <T>(
  cb: () => Promise<AxiosResponse<T>>
): Promise<T> => {
  try {
    const { data } = await cb();
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error("알수 없는 에러");
    }
  }
};

const fetchs = async (): Promise<PostLists[]> => {
  return commonAxios<PostLists[]>(async () => axios.get(url));
};

// fetchs()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// fetchAxios(url)
//   .then((data) => console.log(data))
//   .catch((a) => console.log("11:", a.message));

interface Props<T, U = string> {
  a: T;
  b: U;
}

const Obj: Props<string, boolean> = {
  a: "aa",
  b: true,
};
