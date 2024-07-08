import axios from "axios";

/** 에시데이터  */
const responseData = {
  message: "success",
  resData: { userData: { name: "it,s me", id: "phm", rules: "admin" } },
};

interface UserProps {
  userData: {
    name: string;
    id: string;
    rules: "admin" | "user";
  };
}

interface ResponseProps<T> {
  message: string;
  resData: T;
}

// fetch를 공통으로 사용한다 가정하면..
const commonFetch = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("에러!");
    }
    const { message, resData }: ResponseProps<T> = await response.json();
    return resData;
  } catch (error) {
    throw (error as Error).message;
  }
};

const fetchF = async (page: number): Promise<UserProps> => {
  const url = "";
  return commonFetch(`${url}?page=${page}`);
};

//http 라이브러리나 fetch 사용가능 하도록 추상화
const responseFunc = async <T>(
  cb: () => Promise<ResponseProps<T>>
): Promise<T> => {
  try {
    const { resData } = await cb();
    return resData;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

const fetchUserData = async (
  url: string
): Promise<ResponseProps<UserProps>> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("에러!");
  }
  return response.json();
};

const callbackFetch = async (page: number): Promise<UserProps> => {
  const url = `https://api.example.com/users?page=${page}`;
  return responseFunc(() => fetchUserData(url));
};
