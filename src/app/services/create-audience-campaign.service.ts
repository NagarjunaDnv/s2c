import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateAudienceCampaignService {
  targetGroupsDetails:any=[
    {profilingVariables:[]}
  ]
  groupDetails:any={
    noOfWantedCompletes:'',
    country:'',
    gender:'',
    maxAge:'',
    minAge:'',
    estimatedIncidenceRate:'',
    estimatedLengthOfInterview:'',
    startDate:null,
    noOfDaysinField:'',
    regionIds:[],
    profilingVariables:[]
  }
  countries:any
  selectedCountryDetails:any=[] //arrayIndex represents group_index
  //Index represents the group index
  regionTypeSelected:Array<Boolean>=[false] //arrayIndex represents group_index
  selectedRegionTypeIndex:any={} //keys represent group_index
  basicSettingsErrors:any={} //keys represent group_index
  reqTabIndex:Array<Number>=[0]; //Digit at an index(group_index) represents tab index of that group_index
  tabNames:any=['Basic Settings','Regions','Audience Panel','Profiling','Quotas','Exclusions']
  profilingCategories:any={} //key represents countryID
  profilingQuestions:any={} //keys represents countryID and categoryID
  profilingCategoryCurrentlySelected:any={} //key represents groupindex //value represents categoryID
  selectedOptions:any={} //for sub-regions
  selectedProfilingCQ:any={ //variableIDs //key represents group_index //inner_key represents profiling categoryID & questionID
  }
  selectedProfilingVariableIDs:any={} //key=group_index,inner_keys=profilingVariableID
  selectedQuestionIDs:any={} //key=group_index,inner_key=QuestionID,inner_value=QuestionName or null
  audiencePanel:any={}

  quotasToggle:any={} //key-group_index inner-keys=gender or regions or profiling 
  constructor() { 
    
  }
}
