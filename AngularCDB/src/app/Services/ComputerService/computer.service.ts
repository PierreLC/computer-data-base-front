import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Computer } from 'src/app/Models/Computer/computer.model';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  private databaseUrl = 'MOCK';

  constructor(private httpClient: HttpClient) { }

  getComputers(): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>(this.databaseUrl);
  }

  createComputer(computer: Computer): Observable<number> {
    return this.httpClient.post<number>(this.databaseUrl, computer);
  }

  getComputer(id: number): Observable<Computer> {
    return this.httpClient.get<Computer>(`${ this.databaseUrl }/${ id }`);
  }

  deleteComputer(id: number): Observable<number> {
    return this.httpClient.delete<number>(`${ this.databaseUrl }/${ id }`)
  }

  updateComputer(computer: Computer): Observable<number> {
    return this.httpClient.put<number>(this.databaseUrl, computer);
  }
}
