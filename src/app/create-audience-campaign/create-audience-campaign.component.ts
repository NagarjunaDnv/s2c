import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-create-audience-campaign',
  templateUrl: './create-audience-campaign.component.html',
  styleUrls: ['./create-audience-campaign.component.css']
})
export class CreateAudienceCampaignComponent implements OnInit {
  reqTabIndex:Array<Number>=[0,0];
  prevIndex:number=-1
  groups:any=[0,1]
  constructor() { }

  ngOnInit() {
    console.log(this.reqTabIndex[0])
  }
  openTab(group_index,tab_index){
    this.reqTabIndex[group_index]=tab_index
  }
  toggle(group_index){
    console.log(group_index,this.prevIndex)
    $('#'+`${group_index}`).collapse('toggle')
    if(group_index!=this.prevIndex){
      $('#'+`${this.prevIndex}`).collapse('hide')
    }
    this.prevIndex=group_index
  }
}
