import { Component, OnInit, Input } from '@angular/core';
import { CreateAudienceCampaignService } from 'src/app/services/create-audience-campaign.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profiling-questions',
  templateUrl: './profiling-questions.component.html',
  styleUrls: ['../basic-settings/basic-settings.component.css','../regions/regions.component.css','../sub-regions/sub-regions.component.css','./profiling-questions.component.css']
})
export class ProfilingQuestionsComponent implements OnInit {
  @Input() group_index:number;
  isDataRetrieved:boolean=false
  constructor(private cacService:CreateAudienceCampaignService,private http:HttpClient) { }

  ngOnInit() {
    console.log(this.cacService.profilingCategoryCurrentlySelected[this.group_index])
    this.profilingQuestions(this.cacService.selectedCountryDetails[this.group_index]['id'],this.cacService.profilingCategoryCurrentlySelected[this.group_index])
    console.log(this.cacService.selectedProfilingCQ)
  }

  async profilingQuestions(countryID,profilingCategoryID){
    console.log(this.cacService.profilingQuestions)
    if(!this.cacService.profilingQuestions[countryID] || !this.cacService.profilingQuestions[countryID][profilingCategoryID]){
      await this.http.get('../../../assets/questions.json').subscribe(async(res)=>{
        Object.assign(this.cacService.selectedProfilingCQ[this.group_index],{[profilingCategoryID]:{}})
        if(!this.cacService.profilingQuestions[countryID]){
          this.cacService.profilingQuestions[countryID]={}
        }
        Object.assign(this.cacService.profilingQuestions[countryID],{[profilingCategoryID]:res})
        this.isDataRetrieved=true
        console.log(res)
      })
    }
    else{
      if(Object.keys(this.cacService.selectedProfilingCQ[this.group_index]).length==0){
        Object.assign(this.cacService.selectedProfilingCQ[this.group_index],{[profilingCategoryID]:{}})
      }
      this.isDataRetrieved=true
    }
  }

  processVariableID(variableID){
    const profilingID=this.cacService.profilingCategoryCurrentlySelected[this.group_index]
    this.cacService.selectedProfilingCQ[this.group_index][profilingID][variableID]=!this.cacService.selectedProfilingCQ[this.group_index][profilingID][variableID]
  }

  selectAll(variables){
    const profilingID=this.cacService.profilingCategoryCurrentlySelected[this.group_index]
    variables.forEach(elem=>{
      this._selectAll(elem.id,profilingID)
    })
  }
  _selectAll(variableID,profilingID){
    this.cacService.selectedProfilingCQ[this.group_index][profilingID][variableID]=true
  }

  goBack(){
    console.log(this.cacService.profilingCategoryCurrentlySelected[this.group_index])
    this.cacService.profilingCategoryCurrentlySelected[this.group_index]=false
  }
}
