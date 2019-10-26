import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemPersonalComponent } from './mem-personal.component';

describe('MemPersonalComponent', () => {
  let component: MemPersonalComponent;
  let fixture: ComponentFixture<MemPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
