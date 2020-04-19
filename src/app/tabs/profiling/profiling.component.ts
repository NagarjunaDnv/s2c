import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateAudienceCampaignService } from 'src/app/services/create-audience-campaign.service';

@Component({
  selector: 'app-profiling',
  templateUrl: './profiling.component.html',
  styleUrls: ['../basic-settings/basic-settings.component.css','../regions/regions.component.css','./profiling.component.css']
})
export class ProfilingComponent implements OnInit {
  @Input() group_index:number

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
}
