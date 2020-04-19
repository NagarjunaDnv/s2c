import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilingQuestionsComponent } from './profiling-questions.component';

describe('ProfilingQuestionsComponent', () => {
  let component: ProfilingQuestionsComponent;
  let fixture: ComponentFixture<ProfilingQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilingQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilingQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
