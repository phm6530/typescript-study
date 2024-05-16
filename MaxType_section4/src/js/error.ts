class ErrorStatus extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends ErrorStatus {
  constructor(message: string) {
    super(404, message);
  }
}

class ValidationError extends ErrorStatus {
  constructor(message: string) {
    super(400, message);
  }
}

class AuthenticationError extends ErrorStatus {
  constructor(message: string, public name: string) {
    super(401, message);
  }
}

const notFoundError = new NotFoundError("Resource not found");
const validationError = new ValidationError("Invalid input data");
const authenticationError = new AuthenticationError(
  "Authentication failed",
  "에러이름!"
);

const fetchs = (int: number): any => {
  try {
    throw new Error();
    return result;
  } catch (error) {
    const err = new NotFoundError("에러!!!!!");
    return err;
  }
};

const gg: number = 1;
const result = fetchs(gg);
console.log(result); // NotFoundError: 에러!!!!!
