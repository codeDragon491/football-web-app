import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Competition } from './competition';
import { environment } from '../environments/environment';

@Injectable()
export class CompetitionService {
  private competitionsUrl = 'https://api.football-data.org/v2/competitions';

  httpOptions = {
    headers: new HttpHeaders({
      'X-Auth-Token': environment.apiKey
    })
  };

  constructor(private http: HttpClient) {}

  public getCompetitions(): Observable<Competition> {
    return this.http.get<Competition>(this.competitionsUrl, this.httpOptions);
  }

  public getCompetition(id: number): Observable<Competition> {
    const url = `${this.competitionsUrl}/${id}/matches`;
    return this.http.get<Competition>(url, this.httpOptions);
  }

  public getMatch(id: number): Observable<Competition> {
    const url = `${this.competitionsUrl}/matches/${id}`;
    return this.http.get<Competition>(url, this.httpOptions);
  }
}
