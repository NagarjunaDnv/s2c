import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiencePanelComponent } from './audience-panel.component';

describe('AudiencePanelComponent', () => {
  let component: AudiencePanelComponent;
  let fixture: ComponentFixture<AudiencePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiencePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiencePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
