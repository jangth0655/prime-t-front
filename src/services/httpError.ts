export default class HttpError extends Error {
  constructor(private statusCode?: number, message?: string) {
    super(message);
    this.message = this.errorMessage;
    this.statusCode = statusCode;
  }

  get errorMessage() {
    switch (this.statusCode) {
      case 100:
      case 101: {
        return (this.message = "로그아웃 되었습니다.");
      }
      case 401: {
        return (this.message = "올바르지 않는 사용자입니다.");
      }
      case 400: {
        return (this.message = "잘못된 요청입니다.");
      }
      case 403: {
        return (this.message = "허용되지 않는 요청입니다.");
      }
      case 404: {
        return (this.message = "페이지를 찾을 수 없습니다.");
      }
      case 409: {
        return (this.message = "이미 등록된 유저가 있습니다.");
      }
      case 422: {
        return (this.message = "요청 내용이 올바르지 않습니다.");
      }
      case 500: {
        return (this.message = "서버 장애가 발생하였습니다.");
      }
      case 502: {
        return (this.message = "네트워크 통신오류");
      }
      default:
        throw new Error("통신 오류");
    }
  }

  getStatusCode() {
    return this.statusCode;
  }

  get errorData() {
    return {
      errorMessage: this.errorMessage,
      statusCode: this.getStatusCode(),
    };
  }
}
