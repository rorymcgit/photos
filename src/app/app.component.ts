import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Photo } from './app.types';
import { PhotoHttpService } from './services/photo-http/photo-http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  photoSubscription: Subscription;
  photos: Photo[];
  paginatedPhotos: Photo[];
  searchTerm: string;
  searchSubmitted: boolean;
  searchResults: Photo[];
  emptyResultSet: boolean;
  pageSizes: number[];
  pageSize: number;
  page: number;

  constructor(private photoHttpService: PhotoHttpService) {
    this.page = 1;
    this.pageSizes = [10, 20, 50, 100];
    this.pageSize = this.pageSizes[0];
  }

  private slicePhotos(pageStart: number, pageEnd: number): Photo[] {
    return this.photos.slice(pageStart, pageEnd);
  }

  setPageSize(size: number) {
    this.pageSize = size;
    this.goToPage();
  }

  goToPage(pg: number = this.page) {
    this.page = pg;
    const begin = this.page * this.pageSize - this.pageSize;
    const end = begin + this.pageSize;
    this.paginatedPhotos = this.slicePhotos(begin, end);
  }

  resetSearch() {
    this.searchResults = null;
    this.searchSubmitted = null;
    this.emptyResultSet = false;
    this.searchTerm = null;
  }

  search(form: NgForm) {
    this.searchResults = [];
    if (form.value.searchTerm) {
      this.searchSubmitted = true;
      this.searchResults = this.photos.filter( el => {
        return el.title.includes(form.value.searchTerm);
      });
    }

    this.emptyResultSet = this.searchResults.length === 0;
  }

  ngOnInit() {
    this.photoSubscription = this.photoHttpService.getPhotos().subscribe(
      data => {
        this.photos = data;
        this.paginatedPhotos = this.slicePhotos(0, this.pageSize);
      },
      error => {
        console.log('error: ', error);
      }
    );
  }

  ngOnDestroy() {
    this.photoSubscription.unsubscribe();
  }

}
