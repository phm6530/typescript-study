const arr = [1, 2, 3, 4, 5];

const sumArr = <T extends number>(arr: T[]) => arr.map((e) => e + 1);

const aa = sumArr(arr);
console.log(aa);

interface Array<T> {
  myForEach(callback: (v?: number, i?: number, a?: number[]) => void): void;
}

Array.prototype.myForEach = function <T>(
  this: T[],
  callback: (v: T, i: number, a: T[]) => void
): void {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

[1, 2, 3].myForEach(() => {});
[1, 2, 3].myForEach((v, i, a) => console.log(v, i, a));
[1, 2, 3].myForEach((v, i) => console.log(v));
[1, 2, 3].myForEach((v) => 3);
