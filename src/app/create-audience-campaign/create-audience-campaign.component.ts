import { Component, OnInit } from '@angular/core';
import { CreateAudienceCampaignService } from '../services/create-audience-campaign.service';
import {HttpClient,HttpHeaders} from '@angular/common/http'
declare var $:any;
@Component({
  selector: 'app-create-audience-campaign',
  templateUrl: './create-audience-campaign.component.html',
  styleUrls: ['./create-audience-campaign.component.css']
})
export class CreateAudienceCampaignComponent implements OnInit {
  prevIndex:number=-1
  groups:any=[0];
  countries:any;

  arrowDirectionUp:Object={}
  constructor(public cacService:CreateAudienceCampaignService,private http:HttpClient) { }

  ngOnInit() {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'X-Api-Key': 'GWDEXDDB9Ea29GSTBRDGDJy5DMk0LoUX',
    //   })
    // };
    // this.http.get('https://api.cintworks.net/ordering/reference/countries',httpOptions).subscribe(res=>{
    //   console.log(res)
    // })
  }
  openTab(group_index,tab_index:number){
    // if(!this.cacService.selectedCountryDetails[group_index]){
    //   return;
    // }
    // else if(this.cacService.basicSettingsErrors[group_index]==true||this.cacService.basicSettingsErrors[group_index]==undefined){
    //   return;
    // }
    // else if(this.cacService.selectedCountryDetails[group_index]['regionTypes'].length==0&&tab_index==1){
    //   return;
    // }
    this.cacService.reqTabIndex[group_index]=tab_index
  }


  toggle(group_index){
    console.log(group_index,this.prevIndex)
    $('#'+`${group_index}`).collapse('toggle')
    this.arrowDirectionUp[group_index]=!this.arrowDirectionUp[group_index]
    if(group_index!=this.prevIndex){
      $('#'+`${this.prevIndex}`).collapse('hide')
      this.arrowDirectionUp[this.prevIndex]=false
    }
    this.prevIndex=group_index
  }

  createTargetGroup(){
    this.groups.push(this.groups.length)
    this.cacService.targetGroupsDetails.push({})
    this.cacService.reqTabIndex.push(0)
    console.log(this.cacService.groupDetails)
  }
}
