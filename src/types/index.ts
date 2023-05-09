export interface IMapping {
  [propertyName: string]: string;
}

export interface ITask {
  id: string;
  name: string;
}

export interface IDataRequest {
  tasks: ITask[];
  loading: boolean;
  error: boolean;
}
