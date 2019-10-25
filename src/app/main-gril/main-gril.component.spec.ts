import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGrilComponent } from './main-gril.component';

describe('MainGrilComponent', () => {
  let component: MainGrilComponent;
  let fixture: ComponentFixture<MainGrilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGrilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGrilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
