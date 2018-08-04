import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  photos: Photo[];
  title = 'Photos';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getPhotos().subscribe(
      data => {
        console.log('success: ', data);
        this.photos = data;
      },
      error => {
        console.log('error: ', error);
      }
    );
  }

  getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>('http://jsonplaceholder.typicode.com/photos')
      .pipe(map(response => response)
    );
  }

}
