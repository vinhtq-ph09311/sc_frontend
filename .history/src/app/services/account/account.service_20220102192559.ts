import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class AccountService {

    apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getUsers(pageIndex: number, pageSize: number, sortField: string | null, sortOrder: string | null, filters: Array<{ key: string; value: string[] }>
      ): Observable<{ results: RandomUser[] }> {
        let params = new HttpParams()
          .append('page', `${pageIndex}`)
          .append('results', `${pageSize}`)
          .append('sortField', `${sortField}`)
          .append('sortOrder', `${sortOrder}`);
        filters.forEach(filter => {
          filter.value.forEach(value => {
            params = params.append(filter.key, value);
          });
        });
        return this.http
          .get<{ results: RandomUser[] }>(`${this.randomUserUrl}`, { params })
          .pipe(catchError(() => of({ results: [] })));
      }
    
}