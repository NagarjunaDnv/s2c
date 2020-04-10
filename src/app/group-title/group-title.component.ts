import { Component, OnInit, Input } from '@angular/core';
import { CreateAudienceCampaignService } from '../services/create-audience-campaign.service';
@Component({
  selector: 'app-group-title',
  templateUrl: './group-title.component.html',
  styleUrls: ['../create-audience-campaign/create-audience-campaign.component.css','./group-title.component.css']
})
export class GroupTitleComponent implements OnInit {
  @Input() group_index:number
  constructor(public cacService:CreateAudienceCampaignService) { }

  ngOnInit() {
    console.log(this.group_index)
  }
}
