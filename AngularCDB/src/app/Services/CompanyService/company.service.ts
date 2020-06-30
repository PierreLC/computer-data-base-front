import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/Models/Company/company.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(environment.apiUrl);
  }

  createCompany(company: Company): Observable<number> {
    return this.httpClient.post<number>(environment.apiUrl, company);
  }

  getCompany(id: number): Observable<Company> {
    return this.httpClient.get<Company>(`${ environment.apiUrl }/${ id }`);
  }

  deleteCompany(id: number): Observable<number> {
    return this.httpClient.delete<number>(`${ environment.apiUrl }/${ id }`)
  }

  updateCompany(company: Company): Observable<number> {
    return this.httpClient.put<number>(environment.apiUrl, company);
  }
}
