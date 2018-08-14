import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BongComponent } from './bong.component';

describe('BongComponent', () => {
  let component: BongComponent;
  let fixture: ComponentFixture<BongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
