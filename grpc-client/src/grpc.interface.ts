import { Observable } from 'rxjs';

export interface IGrpcService {
  accumulate(numberArray: INumberArray): Observable<any>;
}

interface INumberArray {
  data: number[];
}

export interface IUserService {
  create(test: { name: string }): Observable<any>;
}

export interface IHelloService {
  findOne(req: { id: string }): Observable<any>;
}
