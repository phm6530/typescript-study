class ErrorStatus {
  constructor(public errorMsg: string, public status?: number) {}
}

//404
class NotFoundError extends ErrorStatus {
  constructor(msg: string) {
    super(msg, 404);
  }
}

//요청 구문에러
class BadRequestError extends ErrorStatus {
  constructor(msg: string) {
    super(msg, 400);
  }
}

class UnauthorizedError extends ErrorStatus {
  constructor(msg: string) {
    super(msg, 401);
  }
}

const errors = new NotFoundError("없는 페이지에요");
console.log(errors);
