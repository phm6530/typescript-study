//싱글톤 패턴
class SingleTon {
  private static instance: SingleTon;
  public num: number = 0;

  // 생성막기
  private constructor() {}

  public incrementNum(): void {
    this.num += 1;
  }
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new SingleTon();
    return this.instance;
  }
}

//인스턴스 생성
const singleton = SingleTon.getInstance();

singleton.incrementNum();
singleton.incrementNum();
singleton.incrementNum();
singleton.incrementNum();
singleton.incrementNum();
singleton.incrementNum();

interface SingletonInstance {
  getNum: () => number;
  increment: () => void;
}

const singleTonFunc = (() => {
  let instance: SingletonInstance;
  let num: number = 0;

  const createInstance = (): SingletonInstance => {
    return {
      getNum: () => {
        return num;
      },
      increment: () => {
        num++;
      },
    };
  };

  return {
    getInstance: (): SingletonInstance => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const test = singleTonFunc.getInstance();
test.increment();
test.increment();
test.increment();
test.increment();
console.log(test.getNum());
