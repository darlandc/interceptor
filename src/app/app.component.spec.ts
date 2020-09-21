import { DataService } from './services/data.service';
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { componentFactoryName } from '@angular/compiler';

describe('AppComponent', () => {
  let service: DataService;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [DataService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit('', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    service = TestBed.inject(DataService);
    console.log(fixture);
    // fixture.getData().subscribe(response => {
    //   expect(response).toBeTruthy();
    // });
  }));

  it('', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const comp = TestBed.get(AppComponent);
    spyOn(comp, 'getUserList');
    spyOn(comp, 'ngOnInit').and.callThrough();

    tick();
    fixture.detectChanges();

    expect(comp.ngOnInit).toHaveBeenCalled();
    expect(comp.getUserList).toHaveBeenCalledTimes(1);
  });
});
