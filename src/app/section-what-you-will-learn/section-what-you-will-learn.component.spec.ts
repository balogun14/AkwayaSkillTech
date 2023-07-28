import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhatYouWillLearnComponent } from './section-what-you-will-learn.component';

describe('SectionWhatYouWillLearnComponent', () => {
  let component: SectionWhatYouWillLearnComponent;
  let fixture: ComponentFixture<SectionWhatYouWillLearnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionWhatYouWillLearnComponent]
    });
    fixture = TestBed.createComponent(SectionWhatYouWillLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
