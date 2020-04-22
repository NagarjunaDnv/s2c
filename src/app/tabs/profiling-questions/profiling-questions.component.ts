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

  processVariableID(variableID,variableName,questionID,questionName){
    const profilingID=this.cacService.profilingCategoryCurrentlySelected[this.group_index]
    if(!this.cacService.selectedProfilingCQ[this.group_index][profilingID][questionID]){
      this.cacService.selectedProfilingCQ[this.group_index][profilingID][questionID]={}
      this._processVaribleID(variableID,variableName,questionID,questionName)
    }
    else{
      this._processVaribleID(variableID,variableName,questionID,questionName)
    }
  }

  _processVaribleID(variableID,variableName,questionID,questionName){
    const profilingID=this.cacService.profilingCategoryCurrentlySelected[this.group_index]
    this.setEmptyObjects(profilingID)
    this.cacService.selectedProfilingCQ[this.group_index][profilingID][questionID][variableID]=this.cacService.selectedProfilingCQ[this.group_index][profilingID][questionID][variableID]?false:variableName
    
    this.cacService.selectedQuestionIDs[this.group_index][profilingID][questionID]=this.count(this.cacService.selectedProfilingCQ[this.group_index][profilingID][questionID])?questionName:false
    console.log(this.cacService.selectedQuestionIDs)
    this.setSelectedProfilingVariableIDs(variableID)

  }

  setEmptyObjects(profilingID){
    if(!this.cacService.selectedQuestionIDs[this.group_index]){
      this.cacService.selectedQuestionIDs[this.group_index]={}
    }
    if(!this.cacService.selectedQuestionIDs[this.group_index][profilingID]){
      this.cacService.selectedQuestionIDs[this.group_index][profilingID]={}
    }
  }
  count(obj){
    return Object.keys(obj).filter(key=>obj[key]!=false).length
  }
  selectAll(variables,questionID,questionName){
    const profilingID=this.cacService.profilingCategoryCurrentlySelected[this.group_index]
    this.setEmptyObjects(profilingID)
    this.cacService.selectedQuestionIDs[this.group_index][profilingID][questionID]=questionName
    variables.forEach(elem=>{
      this._selectAll(elem.id,profilingID,elem.name,questionID)
    })
  }

  _selectAll(variableID,profilingID,variableName,questionID){
    if(!this.cacService.selectedProfilingCQ[this.group_index][profilingID][questionID]){
      this.cacService.selectedProfilingCQ[this.group_index][profilingID][questionID]={}
    }
    this.cacService.selectedProfilingCQ[this.group_index][profilingID][questionID][variableID]=variableName
    if(!this.cacService.selectedProfilingVariableIDs[this.group_index]||!this.cacService.selectedProfilingVariableIDs[this.group_index][variableID]){
      this.cacService.targetGroupsDetails[this.group_index]['profilingVariables'].push({id:variableID})
      try{
      this.cacService.selectedProfilingVariableIDs[this.group_index][variableID]=true
      console.log("try")
      }
      catch{
        this.cacService.selectedProfilingVariableIDs[this.group_index]={}
        this.cacService.selectedProfilingVariableIDs[this.group_index][variableID]=true
        console.log('catch')
      }
    }
  }

  goBack(){
    this.cacService.profilingCategoryCurrentlySelected[this.group_index]=false
  }

  clearAll(){
    const profilingID=this.cacService.profilingCategoryCurrentlySelected[this.group_index]
    Object.keys(this.cacService.selectedProfilingCQ[this.group_index][profilingID]).forEach(questionID=>{
      Object.keys(this.cacService.selectedProfilingCQ[this.group_index][profilingID][questionID]).forEach(variableID=>{
        if(this.cacService.selectedProfilingCQ[this.group_index][profilingID][questionID][variableID]!=false){
          this.setSelectedProfilingVariableIDs(variableID)
        }
      })
    })
    this.cacService.selectedProfilingCQ[this.group_index][profilingID]={}
    this.cacService.selectedQuestionIDs[this.group_index][profilingID]={}
  }
  setSelectedProfilingVariableIDs(variableID){
    let bool=false
    if(this.cacService.selectedProfilingVariableIDs[this.group_index]&&this.cacService.selectedProfilingVariableIDs[this.group_index][variableID]){
      this.cacService.targetGroupsDetails[this.group_index]['profilingVariables'].forEach((value,index)=>{
        if(value['id']==variableID){
          bool=true
          this.cacService.targetGroupsDetails[this.group_index]['profilingVariables'].splice(index,1)
          delete this.cacService.selectedProfilingVariableIDs[this.group_index][variableID]
          return;
        }
      })
    }
    if(!bool){
      this.cacService.targetGroupsDetails[this.group_index]['profilingVariables'].push({id:variableID})
      try
      {
        this.cacService.selectedProfilingVariableIDs[this.group_index][variableID]=true
      }
      catch
      {
        this.cacService.selectedProfilingVariableIDs[this.group_index]={}
        this.cacService.selectedProfilingVariableIDs[this.group_index][variableID]=true
      }
    }
  }
}
