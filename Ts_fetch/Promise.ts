type RequetProps = { name: string; age: number };
type FetchProps = (
  data: RequetProps
) => Promise<{ message: string; resData: string }>;

const fetchFunc: FetchProps = async (data) => {
  try {
    // const url = "fetch";
    // const response = await fetch(url);
    // return response.json();
    const result = await new Promise<{ message: string; resData: string }>(
      (resolve) =>
        setTimeout(() => {
          resolve({ message: "성공", resData: "string" });
        }, 3000)
    );

    return result;
  } catch (error) {
    throw error;
  }
};
const obj: { [key: string]: string } = { name: "이름", test: "gg" };
console.log(obj.name);

const requestData: RequetProps = {
  name: "hyunmin",
  age: 123,
};

fetchFunc(requestData)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
