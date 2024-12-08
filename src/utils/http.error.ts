const messageList: Record<number, string> = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
};

type StatusCode = keyof typeof messageList;

class HttpError extends Error {
  status: StatusCode;

  constructor(status: StatusCode, message?: string) {
    super(message ?? messageList[status]);
    this.status = status;

    // This ensures that the class behaves correctly in the context of inheritance.
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export default HttpError;
