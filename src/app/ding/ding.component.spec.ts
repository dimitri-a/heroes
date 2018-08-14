import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DingComponent } from './ding.component';

describe('DingComponent', () => {
  let component: DingComponent;
  let fixture: ComponentFixture<DingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
