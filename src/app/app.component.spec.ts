import { TestBed, async } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PhotoHttpService } from './services/photo-http/photo-http.service';
import { PhotoHttpServiceMock } from './services/photo-http/photo-http.mock.service';

describe('AppComponent', () => {
  let photoHttpService: PhotoHttpServiceMock;
  beforeEach(async(() => {
    photoHttpService = new PhotoHttpServiceMock();

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NgbModule.forRoot()
      ],
      providers: [
        {provide: PhotoHttpService, useValue: photoHttpService}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));
  it('should initialize variables with the correct values', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.page).toEqual(1);
    expect(fixture.componentInstance.pageSizes).toEqual([10, 20, 50, 100]);
    expect(fixture.componentInstance.pageSize).toEqual(10);
  }));
  describe('setPageSize()', () => {
    it('sets the pageSize and the photos to display', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const component = fixture.componentInstance;

      component.setPageSize(2);

      expect(component.pageSize).toEqual(2);
      expect(component.paginatedPhotos.length).toEqual(2);
    }));
  });
  describe('goToPage()', () => {
    it('goes to the right page', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const component = fixture.componentInstance;

      component.setPageSize(2);
      component.goToPage(3);

      const firstPhotoInView = component.paginatedPhotos[0];
      expect(component.paginatedPhotos.length).toEqual(2);
      expect(firstPhotoInView.id).toEqual(5);
    }));
  });
});
