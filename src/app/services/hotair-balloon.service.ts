import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HaBalloon } from '../interfaces/hotair-balloon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotairBalloonService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getHaBalloons(): Observable<HaBalloon[]> {
    return this.http.get<HaBalloon[]>(`${this.BASE_URL}/haballoons`);
  }

  getHaBalloonById(id: number): Observable<HaBalloon>{
    return this.http.get<HaBalloon>(`${this.BASE_URL}/haballoons/${id}`);
  }  
  
  createHaBalloons(haBalloon: HaBalloon): Observable<HaBalloon>{
    return this.http.post<HaBalloon>(`${this.BASE_URL}/haballoons`, haBalloon);
    
  }

  deleteHaBalloons(id: number): Observable<HaBalloon>{     
       return this.http.delete<HaBalloon>(`${this.BASE_URL}/haballoons/${id}`);
  }

  updateHaBalloons(id: number, haBalloon: HaBalloon): Observable<HaBalloon>{
    return this.http.patch<HaBalloon>(`${this.BASE_URL}/haballoons/${id}`, haBalloon);
  }  

}
