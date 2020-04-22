import { Component, OnInit, Input } from '@angular/core';
import { CreateAudienceCampaignService } from 'src/app/services/create-audience-campaign.service';

@Component({
  selector: 'app-insight-exchange',
  templateUrl: './insight-exchange.component.html',
  styleUrls: ['../../basic-settings/basic-settings.component.css','../../regions/regions.component.css','../../profiling/profiling.component.css','./insight-exchange.component.css']
})
export class InsightExchangeComponent implements OnInit {
  @Input() group_index:number
  constructor(public cacService:CreateAudienceCampaignService) { }

  ngOnInit() {
  }
  getBy(p){
    this.cacService.audiencePanel[this.group_index]['show']=p
    //Funcion yet to be written
  }
}
