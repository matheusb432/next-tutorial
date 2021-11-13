export class ApiResponse {
  status: number;
  message: string;
  details?: string;

  constructor(status: number, message: string, details?: string) {
    this.status = status;
    this.message = message;
    if (details) this.details = details;
  }

  static notFound(id: number, objectName: string, details?: string) {
    return {
      status: 404,
      message: `The ${objectName} with id ${id} was not found.`,
      details: details,
    };
  }

  static noContent(id: number, objectName: string, details?: string) {
    return {
      status: 204,
      message: `The ${objectName} with id ${id} was not found.`,
      details: details,
    };
  }
}
