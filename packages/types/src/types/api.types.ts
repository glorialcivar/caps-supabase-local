// Api types and interfaces

export interface ApiError {
  code: number;
  message: string;
  status: string;
  warning: ApiWarning[];
  error: [];
}

export interface ApiWarning {
  field: string;
  code: null;
  value: string;
  constraints: ApiConstraints;
}

export interface ApiConstraints {
  DocumentValidation: string;
}
