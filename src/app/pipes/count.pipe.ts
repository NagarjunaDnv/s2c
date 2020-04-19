import {Pipe, PipeTransform} from '@angular/core';  
import { CreateAudienceCampaignService } from '../services/create-audience-campaign.service';
@Pipe ({  
  name : 'count'  
})  
export class CountPipe implements PipeTransform {  
    constructor(private cacService:CreateAudienceCampaignService){}
  
    transform(profilingCategoryID,group_index) : number{  
        return Object.keys(this.cacService.selectedProfilingCQ[group_index][profilingCategoryID]).filter(key=>this.cacService.selectedProfilingCQ[group_index][profilingCategoryID][key]==true).length
  }  
}  