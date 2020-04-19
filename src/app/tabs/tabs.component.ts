import { Component, OnInit, Input } from '@angular/core';
import { CreateAudienceCampaignService } from '../services/create-audience-campaign.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() group_index:number
  @Input() tab_index:number
  constructor(public cacService:CreateAudienceCampaignService) { }

  ngOnInit() {
    console.log(this.group_index,this.tab_index)
    console.log(this.cacService.regionTypeSelected[0])
  }

}
