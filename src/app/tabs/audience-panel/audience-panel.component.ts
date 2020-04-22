import { Component, OnInit, Input } from '@angular/core';
import { CreateAudienceCampaignService } from 'src/app/services/create-audience-campaign.service';

@Component({
  selector: 'app-audience-panel',
  templateUrl: './audience-panel.component.html',
  styleUrls: ['../basic-settings/basic-settings.component.css','../regions/regions.component.css','../profiling/profiling.component.css','./audience-panel.component.css']
})
export class AudiencePanelComponent implements OnInit {
  @Input() group_index:number
  constructor(private cacService:CreateAudienceCampaignService) { }

  ngOnInit() {
  }

  toggle(audiencePanelIndex){
    this.cacService.audiencePanel[this.group_index]={}
    this.cacService.audiencePanel[this.group_index]['show']='All panels'
    this.cacService.audiencePanel[this.group_index][audiencePanelIndex]=true
  }
}
