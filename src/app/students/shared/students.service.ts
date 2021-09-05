import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from './students';

@Injectable()
export class StudentsService {
  protected URL = 'http://localhost:3000/api/students';

  constructor(protected http: HttpClient) {
  }

  public findById(id: any): Observable<Student> {
    return this.http.get<Student>(this.URL + '/' + id);
  }

  public findAll(params?): Observable<Student[]> {
    return this.http.get<Student[]>(this.URL, {params});
  }

  public delete(id): Observable<Student> {
    return this.http.delete<Student>(this.URL + '/' + id);
  }

  public insert(data: Student): Observable<Student> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post<Student>(this.URL, data, {headers});
  }

  public update(student: Student): Observable<Student> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.put<Student>(this.URL + '/' + student.id, student, {headers});
  }
}
