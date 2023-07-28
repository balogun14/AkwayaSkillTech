import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPastStudentsComponent } from './section-past-students.component';

describe('SectionPastStudentsComponent', () => {
  let component: SectionPastStudentsComponent;
  let fixture: ComponentFixture<SectionPastStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionPastStudentsComponent]
    });
    fixture = TestBed.createComponent(SectionPastStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
