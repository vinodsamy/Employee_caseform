import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemCorrespondanceComponent } from './mem-correspondance.component';

describe('MemCorrespondanceComponent', () => {
  let component: MemCorrespondanceComponent;
  let fixture: ComponentFixture<MemCorrespondanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemCorrespondanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemCorrespondanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
