import { Component, OnInit, Input } from '@angular/core';
import { CreateAudienceCampaignService } from 'src/app/services/create-audience-campaign.service';
import { CountriesService } from 'src/app/test/countries.service';
import TinyDatePicker from 'tiny-date-picker'
@Component({
  selector: 'app-basic-settings',
  templateUrl: './basic-settings.component.html',
  styleUrls: ['./basic-settings.component.css']
})
export class BasicSettingsComponent implements OnInit {
  @Input() group_index:number;
  errors:any={}
  constructor(public cacService:CreateAudienceCampaignService,private countriesService:CountriesService) { }

  ngOnInit() {
    this.initializeDatePicker()
    this.countriesService.fetchCountries().toPromise().then(res=>{
      this.cacService.countries=res
      console.log(res[0])
    }).catch(e=>{
      console.log(e)
    })
  }

  initializeDatePicker(){
    const dp= TinyDatePicker('.start-date',
    {
      mode:'dp-below',
      min:new Date(Date.now()),
      format(date) {
        return String(date.getDate())+' '+date.toLocaleString('default', { month: 'short' })+' '+String(date.getFullYear())
      },
    });

    dp.on('statechange', (_, picker) => {
      console.log(picker.state)
      this.cacService.targetGroupsDetails[this.group_index]['startDate']=picker.state.selectedDate
    });
  }
  continue(group_index){
    console.log(this.cacService['targetGroupsDetails'][group_index])
    this.checkDetails(group_index)
  }
  handleCountryChange(e,groupIndex){
    this.cacService.selectedCountryDetails[groupIndex]=this.cacService.countries.find(element=>element.name==e.target.value)
    this.cacService.regionTypeSelected[groupIndex]=false
    this.cacService.selectedOptions[this.group_index]={}
    this.cacService.targetGroupsDetails[this.group_index]['regionIDs']=[]
    this.cacService.profilingCategoryCurrentlySelected[groupIndex]=false
    this.cacService.selectedProfilingCQ[this.group_index]={}
    console.log(this.cacService.selectedCountryDetails[groupIndex])

  }
  checkDetails(group_index){
    const data=this.cacService['targetGroupsDetails'][group_index]
    this.errors={}
    this.cacService.basicSettingsErrors[group_index]=false
    if(!data['gender']){
      this.errors.gender=true
    }
    if(!data['minAge']|| !data['maxAge']){
      this.errors.age=true
    }
    else if(data['minAge']<this.cacService.selectedCountryDetails[group_index]['ageMin'] ||data['minAge']>75||data['maxAge']>75||data['maxAge']<this.cacService.selectedCountryDetails[group_index]['ageMin']){
      this.errors.ageRange=true
    }
    else if(data['maxAge']<data['minAge']){
      this.errors.ageCompare=true
    }
    if(!data['estimatedIncidenceRate']||!data['noOfWantedCompletes']||!data['estimatedLengthOfInterview']||!data['startDate']||!data['noOfDaysinField']){
      console.log(data)
      this.errors.survey=true
    }
    if(data['estimatedIncidenceRate']&&(data['estimatedIncidenceRate']<this.cacService.selectedCountryDetails[group_index]['validIncidenceRateRange']['min'] || data['estimatedIncidenceRate']>this.cacService.selectedCountryDetails[group_index]['validIncidenceRateRange']['max']||!Number.isInteger(data['estimatedIncidenceRate']))){
      this.errors.estimatedIncidenceRateRange=true
    }
    if(data['noOfWantedCompletes']&& (data['noOfWantedCompletes']<0 || !Number.isInteger(data['noOfWantedCompletes']))){
      this.errors.noOfWantedCompletes=true
    }
    if(data['estimatedLengthOfInterview'] && (data['estimatedLengthOfInterview']<this.cacService.selectedCountryDetails[group_index]['validLengthOfInterviewRange']['min'] ||data['estimatedLengthOfInterview']>this.cacService.selectedCountryDetails[group_index]['validLengthOfInterviewRange']['max'] || !Number.isInteger(data['estimatedLengthOfInterview']))){
      this.errors.estimatedLengthOfInterview=true
    }
    if(data['noOfDaysinField']&& (data['noOfDaysinField']<0 || !Number.isInteger(data['noOfDaysinField']))){
      this.errors.noOfDaysinField=true
    }

    if(Object.values(this.errors).find(e=>e==true)===undefined){
      this.cacService.basicSettingsErrors[group_index]=false
      if(this.cacService.selectedCountryDetails[this.group_index]['regionTypes'].length==0){
        this.cacService.reqTabIndex[group_index]=2
      }
      else{
        this.cacService.reqTabIndex[group_index]=1
      }
    }
    else{
      this.cacService.basicSettingsErrors[group_index]=true
    }
  }
}
