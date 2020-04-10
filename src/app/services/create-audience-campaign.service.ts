import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateAudienceCampaignService {
  targetGroupsDetails:any=[
    {
      noOfWantedCompletes:'',
      country:'India',
      gender:'',
      maxAge:'',
      minAge:'',
      estimatedIncidenceRate:'',
      estimatedLengthOfInterview:'',
      startDate:new Date(),
      noOfDaysinField:''
    },
    {
      noOfWantedCompletes:'',
      country:'India',
      gender:'',
      maxAge:'',
      minAge:'',
      estimatedIncidenceRate:'',
      estimatedLengthOfInterview:'',
      startDate:new Date(),
      noOfDaysinField:''
    },
  ]
  constructor() { 
    
  }
}
