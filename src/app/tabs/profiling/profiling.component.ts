import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateAudienceCampaignService } from 'src/app/services/create-audience-campaign.service';

@Component({
  selector: 'app-profiling',
  templateUrl: './profiling.component.html',
  styleUrls: ['../basic-settings/basic-settings.component.css','../regions/regions.component.css','./profiling.component.css'],
})
export class ProfilingComponent implements OnInit {
  @Input() group_index:number
  test:any=1
  constructor(private http:HttpClient,private cacService:CreateAudienceCampaignService) { }

  ngOnInit() {
    this.http.get("../../../assets/profiling-categories.json").subscribe(res=>{
      console.log(res)
      this.cacService.profilingCategories[this.cacService.selectedCountryDetails[this.group_index]['id']]=res
    })
  }

  profilingQuestions(profilingCategoryID,categoryIndex){
    console.log(profilingCategoryID)
    this.cacService.profilingCategoryCurrentlySelected[this.group_index]=profilingCategoryID
  }
  clearAll(obj:Object){
    // Object.keys(obj).forEach(key=>{
    //   if(typeof obj[key]==='object'){
    //     this.clearAll(obj[key])
    //   }
    //   else{
    //     obj[key]=false
    //     this.cacService.targetGroupsDetails[this.group_index]['profilingVariables']=[]
    //     delete this.cacService.selectedProfilingVariableIDs[this.group_index][key]
    //     this.cacService.selectedProfilingCQ[this.group_index]={}
    //     this.test=0
    //   }
    // })
    this.cacService.selectedProfilingCQ[this.group_index]={}
    this.cacService.targetGroupsDetails[this.group_index]['profilingVariables']=[]
    this.cacService.selectedProfilingVariableIDs[this.group_index]={}
    this.cacService.selectedQuestionIDs[this.group_index]={}
  }
}
