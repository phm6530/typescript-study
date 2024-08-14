const arrs = [
  {
    number: 1,
    name: "hyunin",
    job: "developer",
    option_idx: 1,
    option: "옵션 1번입니다.",
  },
  {
    number: 1,
    name: "hyunin",
    job: "developer",
    option_idx: 2,
    option: "옵션 2번입니다.",
  },
];

type NewArrProps = {
  number: number;
  name: string;
  job: string;
  option: { idx: number; value: string }[];
};

const newArr: NewArrProps[] = [];

arrs.forEach((item) => {
  const test = newArr.find((e) => e.number === item.number);
  if (!test) {
    newArr.push({
      number: item.number,
      name: item.name,
      job: item.job,
      option: [{ idx: item.option_idx, value: item.option }],
    });
  } else {
    test.option.push({ idx: item.option_idx, value: item.option });
  }
});

console.log(newArr[0].option);
