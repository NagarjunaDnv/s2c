import { Component, OnInit, Input } from '@angular/core';
import { CreateAudienceCampaignService } from 'src/app/services/create-audience-campaign.service';
@Component({
  selector: 'app-quotas',
  templateUrl: './quotas.component.html',
  styleUrls: ['../basic-settings/basic-settings.component.css','../profiling-questions/profiling-questions.component.css','./sliders.css','./quotas.component.css']
})
export class QuotasComponent implements OnInit {
  @Input() group_index:number
  questions:any=[]
  constructor(private cacService:CreateAudienceCampaignService) { }

  ngOnInit() {
    try{
      this.getQuestions()
    }
    catch{
      console.log("Error")
    }
  }
  setupQuotasInPercent(){

  }
  setupQuotasInNumber(){

  }
  toggleFeasibilityNumbers(){

  }
  toggle1(e){
    console.log(e)
    if(e.target.checked){
      this.setupQuotasInPercent()
    }
    else{
      this.setupQuotasInNumber()
    }
  }
  btnToggle1(){
    let elem=document.getElementById("checkbox-1")
    if(elem['checked']){
      elem['checked']=false
      this.setupQuotasInNumber()
    }
    else{
      elem['checked']=true
      this.setupQuotasInPercent()
    }
  }

  toggle2(e){
    this.toggleFeasibilityNumbers()
  }
  btnToggle2(){
    let elem=document.getElementById("checkbox-2")
    if(elem['checked']){
      elem['checked']=false
    }
    else{
      elem['checked']=true
    }
    this.toggleFeasibilityNumbers()
  }

  getQuestions(){
    console.log(this.cacService.selectedQuestionIDs)
    Object.keys(this.cacService.selectedQuestionIDs[this.group_index]).forEach(profilingID=>{
      Object.keys(this.cacService.selectedQuestionIDs[this.group_index][profilingID]).forEach(questionID=>{
        if(this.cacService.selectedQuestionIDs[this.group_index][profilingID][questionID]!=false){
          this.questions.push({questionID:questionID,profilingCategoryID:profilingID,questionName:this.cacService.selectedQuestionIDs[this.group_index][profilingID][questionID]})
          console.log(this.cacService.selectedQuestionIDs[this.group_index][profilingID][questionID])
        }
      })
    })
  }
}
