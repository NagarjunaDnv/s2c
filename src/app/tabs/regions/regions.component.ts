import { Component, OnInit, Input } from '@angular/core';
import { CreateAudienceCampaignService } from 'src/app/services/create-audience-campaign.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['../basic-settings/basic-settings.component.css','./regions.component.css']
})
export class RegionsComponent implements OnInit {
  @Input() group_index:number
  constructor(public cacService:CreateAudienceCampaignService) { }

  ngOnInit() {
  }

  selectRegionType(regionarrIndex,regionName,regionID){
    this.cacService.selectedOptions[this.group_index]={}
    this.cacService.regionTypeSelected[this.group_index]=true
    this.cacService.selectedRegionTypeIndex[this.group_index]=regionarrIndex
    console.log(this.cacService.regionTypeSelected)
  }
}
