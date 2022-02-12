import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../models/ui-models/gender.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  private baseApiUrl = "https://localhost:44351";

  constructor(private httpClient: HttpClient) { }

  getGenders(): Observable<Gender[]> {
    return this.httpClient.get<Gender[]>(this.baseApiUrl + '/api/Gender');
  }

}
