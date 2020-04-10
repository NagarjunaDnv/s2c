import { TestBed } from '@angular/core/testing';

import { CreateAudienceCampaignService } from './create-audience-campaign.service';

describe('CreateAudienceCampaignService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateAudienceCampaignService = TestBed.get(CreateAudienceCampaignService);
    expect(service).toBeTruthy();
  });
});
