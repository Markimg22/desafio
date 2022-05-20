export type HttpRequest<D = any> = {
  url: string;
  token?: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PUT';
  data?: D;
};

export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

export type HttpResponse<B = any> = {
  statudCode: HttpStatusCode;
  body?: B;
};
