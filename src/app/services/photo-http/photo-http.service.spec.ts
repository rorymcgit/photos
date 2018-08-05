import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PhotoHttpService } from './photo-http.service';


describe('PhotoHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoHttpService],
      imports: [
        HttpClientModule,
      ]
    });
  });

  it('should be created', inject([PhotoHttpService], (service: PhotoHttpService) => {
    expect(service).toBeTruthy();
  }));
});
