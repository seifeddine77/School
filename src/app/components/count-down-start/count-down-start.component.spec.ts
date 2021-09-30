import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownStartComponent } from './count-down-start.component';

describe('CountDownStartComponent', () => {
  let component: CountDownStartComponent;
  let fixture: ComponentFixture<CountDownStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
