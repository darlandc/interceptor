import { TestBed, async, fakeAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DataService } from '../services/data.service';
import { AuthHttpInterceptor } from './interceptor';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

describe(`AuthHttpInterceptor`, () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DataService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthHttpInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should add an Authorization header', fakeAsync(() => {
    service.getPosts().subscribe(response => {
      expect(response).toBeTruthy();
    });
    const httpRequest = httpMock.expectOne(`${service.ROOT_URL}/posts`);

    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
  }));

});
