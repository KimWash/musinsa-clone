export class ResponseWrapper<T> {
  responseCode: string;
  data: T;

  constructor({ responseCode, data }: { responseCode: string; data: T }) {
    this.responseCode = responseCode;
    this.data = data;
  }
  static Success<T>(data: T) {
    return new ResponseWrapper({
      data: data,
      responseCode: "SUCCESS",
    });
  }
  static Error(error: Error) {
    return new ResponseWrapper({
      data: null,
      responseCode: error.name,
    });
  }
}