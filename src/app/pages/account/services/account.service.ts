import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Account } from "../interfaces/account";

@Injectable({ providedIn: 'root' })
export class AccountService {

    apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getListAccount(pageIndex: number, pageSize: number, sortField: string | null, sortOrder: string | null) {
        let params = new HttpParams()
          .append('pageIndex', `${pageIndex}`)
          .append('pageSize', `${pageSize}`)
          .append('sortField', `${sortField}`)
          .append('sortOrder', `${sortOrder}`);

        return this.http
          .get(`${this.apiUrl}/account/page`, { params });
    }
    
}