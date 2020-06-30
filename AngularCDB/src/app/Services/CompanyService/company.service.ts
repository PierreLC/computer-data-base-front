import { Injectable } from '@angular/core';
import { Company } from 'src/app/Models/Company/company.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private databaseUrl = 'MOCK';

  constructor(private httpClient: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.databaseUrl);
  }

  createCompany(company: Company): Observable<number> {
    return this.httpClient.post<number>(this.databaseUrl, company);
  }

  getCompany(id: number): Observable<Company> {
    return this.httpClient.get<Company>(`${ this.databaseUrl }/${ id }`);
  }

  deleteCompany(id: number): Observable<number> {
    return this.httpClient.delete<number>(`${ this.databaseUrl }/${ id }`)
  }

  updateCompany(company: Company): Observable<number> {
    return this.httpClient.put<number>(this.databaseUrl, company);
  }
}
