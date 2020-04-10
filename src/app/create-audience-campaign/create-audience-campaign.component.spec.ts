import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAudienceCampaignComponent } from './create-audience-campaign.component';

describe('CreateAudienceCampaignComponent', () => {
  let component: CreateAudienceCampaignComponent;
  let fixture: ComponentFixture<CreateAudienceCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAudienceCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAudienceCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
