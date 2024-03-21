const fn = (num: number, name: string = "hyunmin", isTrue: boolean): string => {
  return `${num}살 ${name} 취업${isTrue}`;
};

let me = fn(34, undefined, true);

console.log(me);
