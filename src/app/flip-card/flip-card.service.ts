import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlipCardService {
  private baseURL: string = 'http://localhost:4000';

  
  constructor(
    private _httpClient: HttpClient,
  ) {}

  public getImages(): Observable<any> {
    return this._httpClient.get<any>(`${this.baseURL}/imagens`)
      .pipe(
        tap((data: any) => 
        data,
      ),
      catchError((error: HttpErrorResponse) => {
        console.log('error', error);
        return EMPTY; 
      })
    );
  }

  public getImagesById(id: number): Observable<any> {
    return this._httpClient.get<any>(`${this.baseURL}/imagens/${id}`)
      .pipe(
        tap((data: any) => 
        data,
      ),
      catchError((error: HttpErrorResponse) => {
        console.log('error', error);
        return EMPTY; 
      })
    );
  }
}
