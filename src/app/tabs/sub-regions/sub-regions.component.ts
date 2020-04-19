import { Component, OnInit, Input } from '@angular/core';
import { CreateAudienceCampaignService } from 'src/app/services/create-audience-campaign.service';

@Component({
  selector: 'app-sub-regions',
  templateUrl: './sub-regions.component.html',
  styleUrls: ['../basic-settings/basic-settings.component.css','../regions/regions.component.css','./sub-regions.component.css','../profiling/profiling.component.css']
})
export class SubRegionsComponent implements OnInit {
  @Input() group_index:number;
  
  constructor(public cacService:CreateAudienceCampaignService) { }

  ngOnInit() {
  }

  discardRegionType(){
    this.cacService.regionTypeSelected[this.group_index]=false
    delete this.cacService.selectedRegionTypeIndex[this.group_index]
    this.cacService.selectedOptions[this.group_index]={}
    this.cacService.targetGroupsDetails[this.group_index]['regionIDs']=[]
  }
  toggle(regionID){
    this.cacService.selectedOptions[this.group_index][regionID]=!this.cacService.selectedOptions[this.group_index][regionID]
    this.cacService.targetGroupsDetails[this.group_index]['regionIDs']=this.setSelectedRegionIDs()
    console.log(this.cacService.targetGroupsDetails)
  }
  
  setSelectedRegionIDs(){
    return Object.keys(this.cacService.selectedOptions[this.group_index]).filter(key => this.cacService.selectedOptions[this.group_index][key] === true);
  }
  
  selectAll(){
    const regions=this.cacService['selectedCountryDetails'][this.group_index]['regionTypes'][this.cacService['selectedRegionTypeIndex'][this.group_index]]['regions']
    let IDs=[]
    let i=0;
    for(i;i<regions.length;i++){
      this.cacService.selectedOptions[this.group_index][regions[i]['id']]=true
      IDs.push(regions[i]['id'])
    }
    this.cacService.targetGroupsDetails[this.group_index]['regionIDs']=IDs
  }
  
  deSelectAll(){
    this.cacService.targetGroupsDetails[this.group_index]['regionIDs']=[]
    this.cacService.selectedOptions[this.group_index]={}
  }
}
