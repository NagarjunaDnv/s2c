import {Pipe, PipeTransform} from '@angular/core';  
import { CreateAudienceCampaignService } from '../services/create-audience-campaign.service';
@Pipe ({  
  name : 'count'  
})  
export class CountPipe implements PipeTransform {  
    constructor(private cacService:CreateAudienceCampaignService){}
  
    transform(profilingCategoryID,group_index,param2) : number{  
      let count=0
      Object.keys(this.cacService.selectedProfilingCQ[group_index][profilingCategoryID]).forEach(e=>{
        if(typeof this.cacService.selectedProfilingCQ[group_index][profilingCategoryID][e] === 'object'){
          count=count+this.count(this.cacService.selectedProfilingCQ[group_index][profilingCategoryID][e])
        }
      })
      return count
    }  

    count(obj):number{
      return Object.keys(obj).filter(key=>obj[key]!=false).length
    }
}  