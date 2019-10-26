import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemContactComponent } from './mem-contact.component';

describe('MemContactComponent', () => {
  let component: MemContactComponent;
  let fixture: ComponentFixture<MemContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
