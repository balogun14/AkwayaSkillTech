import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMentorComponent } from './our-mentor.component';

describe('OurMentorComponent', () => {
  let component: OurMentorComponent;
  let fixture: ComponentFixture<OurMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurMentorComponent]
    });
    fixture = TestBed.createComponent(OurMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
