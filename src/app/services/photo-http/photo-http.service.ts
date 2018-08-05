import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from '../../app.types';

@Injectable({
  providedIn: 'root'
})
export class PhotoHttpService {

  readonly PHOTOS_ENDPOINT = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private httpClient: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(this.PHOTOS_ENDPOINT)
      .pipe(map(response => response)
    );
  }
}
