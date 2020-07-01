import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Computer } from 'src/app/Models/Computer/computer.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  constructor(private httpClient: HttpClient) { }

  getComputers(): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>(environment.apiUrl);
  }

  createComputer(computer: Computer): Observable<number> {
    return this.httpClient.post<number>(environment.apiUrl, computer);
  }

  getComputer(id: number): Observable<Computer> {
    return this.httpClient.get<Computer>(`${ environment.apiUrl }/${ id }`);
  }

  deleteComputer(id: number): Observable<number> {
    return this.httpClient.delete<number>(`${ environment.apiUrl }/${ id }`)
  }

  updateComputer(computer: Computer): Observable<number> {
    return this.httpClient.put<number>(environment.apiUrl, computer);
  }
}
