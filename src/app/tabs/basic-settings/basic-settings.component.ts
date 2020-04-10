import { Component, OnInit, Input } from '@angular/core';
import { CreateAudienceCampaignService } from 'src/app/services/create-audience-campaign.service';
import {countryList} from './countriesList'
@Component({
  selector: 'app-basic-settings',
  templateUrl: './basic-settings.component.html',
  styleUrls: ['./basic-settings.component.css']
})
export class BasicSettingsComponent implements OnInit {
  @Input() group_index:number;
  countryList:Array<any>=countryList
  errors:any={}
  constructor(public cacService:CreateAudienceCampaignService) { }

  ngOnInit() {
  }
  continue(group_index){
    console.log(this.cacService['targetGroupsDetails'][group_index])
    this.checkDetails(group_index)
  }
  checkDetails(group_index){
    const data=this.cacService['targetGroupsDetails'][group_index]
    this.errors={}
    if(data['gender']==''){
      this.errors.gender=true
    }
    if(data['minAge']=='' || data['maxAge']==''){
      this.errors.age=true
    }
    else if(data['minAge']<18 ||data['minAge']>75||data['maxAge']>75||data['maxAge']<18){
      this.errors.ageRange=true
    }
    if(data['estimatedIncidenceRate']==''||data['noOfWantedCompletes']==''||data['estimatedLengthOfInterview']==''||data['startDate']==''||data['noOfDaysinField']==''){
      console.log(data)
      this.errors.survey=true
    }
    if(data['estimatedIncidenceRate']!=null&&(data['estimatedIncidenceRate']<0 || data['estimatedIncidenceRate']>100||!Number.isInteger(data['estimatedIncidenceRate']))){
      this.errors.estimatedIncidenceRateRange=true
    }
    if(data['noOfWantedCompletes']!=null && (data['noOfWantedCompletes']<0 || !Number.isInteger(data['noOfWantedCompletes']))){
      this.errors.noOfWantedCompletes=true
    }
    if(data['estimatedLengthOfInterview']!=null && (data['estimatedLengthOfInterview']<0 || !Number.isInteger(data['estimatedLengthOfInterview']))){
      this.errors.estimatedLengthOfInterview=true
    }
    if(data['noOfDaysinField']!=null && (data['noOfDaysinField']<0 || !Number.isInteger(data['noOfDaysinField']))){
      this.errors.noOfDaysinField=true
    }
  }
}
