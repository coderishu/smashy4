import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
//import 'core-js/es6/object';

@Injectable()
export class StoreInfoService {
  planInfoObj=[];
  planConfigObj=[];
  deductdetails=[];
  outofPocketDetails=[];
  coinsurance:any={};
  coinsuranceDetails:any={};
  outofPocket:any={};
  chiropracticObj:any={};
  deductibleCostshare=[];
  coinsuranceCostshare=[];
  coinsuranceOutofPocket=[];
  coinsuranceCopay=[];
  coinsuranceLimitation=[];

  physicianServices:any=[]; // In Benefit Services
  ChiropracticServices:any=[]; // In Benefit Services
  professionalServices:any=[]; // In Benefit Services
  preventiveServices:any=[]; // In Benefit Services
  bariatricSurgery:any=[]; // In Benefit Services
  emergencyRoom:any=[]; // In Benefit Services
  inpatienthospital:any=[];
  laboratoryServices:any=[];
  OutPatientServices:any=[];
  prescriptionMedications:any=[];
  radiologyServices:any=[];
  specialityMedications:any=[];
  urgentCare:any=[];
  longterm:any=[];
  empAssistance:any=[];
  maternity:any=[];
  newborn:any=[];
  homehealth:any=[];
  extendedactive:any=[];
  physicaloccupation:any=[];
  skillnursing:any=[];
  inclusion:any=[];
  hospice:any=[];
  Obj= {
    "common":true,
    "inNetwork":true,
    "outOfNetwork":false,
    "dualCreditPro": false,
    "seprateFMembers":false,
    "custom":false,
    "commonVal":'',
    "commonVal1":'',
    "inNetworkVal":'',
    "inNetworkVal1":'',
    "outOfNetworkVal":'',
    "outOfNetworkVal1":'',
  };
  constructor() { }
  setplanInfo(planInfoObj){
    this.planInfoObj=planInfoObj;
  };
  setplanConfig(planConfigObj){
    this.planConfigObj=planConfigObj;
    //console.log(JSON.stringify(this.planConfigObj))
  };
  getplanConfig(){
 return  this.planConfigObj;
    //console.log(JSON.stringify(this.planConfigObj))
  };
  getSelectedPlanInfo(){
    //console.log(JSON.stringify(Object.assign({}, this.planInfoObj,  this.planConfigObj)))
   //noinspection TypeScriptValidateTypes
    return Object.assign(<string>{}, this.planInfoObj,  this.planConfigObj);

  };
  setDeductibleInfo(planConfigObj){
    Object.assign(this.Obj,planConfigObj);
  };
  getDeductibleInfo(){
    return this.Obj;
  };

  getDeductdetails(){
    return this.deductdetails;
  };
  setDeductdetails(deductdetails){
  this.deductdetails=deductdetails;
  }

  /*****************coinsurance**************/
  setCoinsurance(coinsurance){
    Object.assign(this.coinsurance,coinsurance);
  }
  getCoinsurance(){
    return this.coinsurance;
  }
  /*****************coinsuranceDetails**************/
  setCoinsuranceDetails(coinsuranceDetails){
    this.coinsuranceDetails=coinsuranceDetails;
  }
  getCoinsuranceDetails(){
    return this.coinsuranceDetails;
  }
  /*****************out of pocket**************/
  setOutOfPocket(outofPocket){
    Object.assign(this.outofPocket,outofPocket);
  }
  getOutOfPocket(){
    return this.outofPocket;
  }
  /*****************out of pocket Details**************/
  setoutofPocketDetails(outofPocketDetails){
    this.outofPocketDetails=outofPocketDetails;
  }
  getOutofPocketDetails(){
    return this.outofPocketDetails;
  }
  /*****************Chiropractic**************/
  setChiropractic(chiropractic){
    this.chiropracticObj=chiropractic;
    console.log(this.chiropracticObj)
  }
  getChiropractic(){
    console.log(this.chiropracticObj)
    return this.chiropracticObj;
  }


  /*****************deductible Cost share**************/
  setdeductibleCostshare(deductibleCostshare){
    this.deductibleCostshare=deductibleCostshare;
  }
  getdeductibleCostshare(){
    return this.deductibleCostshare;
  }
  /*****************coinsurance Cost share**************/
  setCoinsuranceCostshare(coinsuranceCostshare){
    this.coinsuranceCostshare=coinsuranceCostshare;
  }
  getCoinsuranceCostshare(){
    return this.coinsuranceCostshare;
  }

  /*****************************coinsuranceOutofPocket****************/

setCoinsuranceOutofPocket(coinsuranceOutofPocket){
  this.coinsuranceOutofPocket=coinsuranceOutofPocket;
}
  getCoinsuranceOutofPocket(){
    return this.coinsuranceOutofPocket;
  }


  /*****************************coinsurance Copay****************/

  setCoinsuranceCopay(coinsuranceCopay){
    this.coinsuranceCopay=coinsuranceCopay;
  }
  getCoinsuranceCopay(){
    return this.coinsuranceCopay;
  }

  /*
   * Benefit Services
   */
  /************************Physician Services********************/

  setPhysicianServices(physicianServices){
    this.physicianServices=physicianServices;
  }
  getPhysicianServices(){
    return this.physicianServices;
  }
  /************************Chiropractic Services********************/

  setChiropracticServices(physicianServices){
    this.ChiropracticServices=physicianServices;
  }
  getChiropracticServices(){
    return this.ChiropracticServices;
  }
  /************************Professional Services********************/

  setProfessionalServices(physicianServices){
    this.professionalServices=physicianServices;
  }
  getProfessionalServices(){
    return this.professionalServices;
  }
  /************************Professional Services********************/
  setPreventiveServices(physicianServices){
    this.preventiveServices=physicianServices;
  }
  getPreventiveServices(){
    return this.preventiveServices;
  }
  /************************Bariatric Surgery********************/
  setBariatricSurgery(bariatricSurgery){
    this.bariatricSurgery=bariatricSurgery;
  }
  getBariatricSurgery(){
    return this.bariatricSurgery;
  }
  /************************Emergency Room********************/
  setEmergencyRoom(emergencyRoom){
    this.emergencyRoom=emergencyRoom;
  }
  getEmergencyRoom()
  {
    return this.emergencyRoom;
  }
  /************************In Patient Hospital********************/
  setInPatientHospital(inpatienthospital){
    this.inpatienthospital=inpatienthospital;
  }
  getInPatientHospital()
  {
    return this.inpatienthospital;
  }

  /************************laboratoryServices********************/

  setLaboratoryServices(laboratoryServices){
    this.laboratoryServices=laboratoryServices;
  }
  getLaboratoryServices()
  {
    return this.laboratoryServices;
  }
  /************************OutPatientServices********************/

  setOutPatientServices(OutPatientServices){
    this.OutPatientServices=OutPatientServices;
  }
  getOutPatientServices()
  {
    return this.OutPatientServices;
  }
  /************************prescriptionMedications********************/

  setPrescriptionMedications(prescriptionMedications){
    this.prescriptionMedications=prescriptionMedications;
  }
  getPrescriptionMedications()
  {
    return this.prescriptionMedications;
  }
  /************************Radiology-Services********************/

  setRadiologyServices(radiologyServices){
    this.radiologyServices=radiologyServices;
  }
  getRadiologyServices()
  {
    return this.radiologyServices;
  }

 
  /************************Speciality - Medications********************/

  setSpecialityMedications(specialityMedications){
    this.specialityMedications=specialityMedications;
  }
  getSpecialityMedications()
  {
    return this.specialityMedications;
  }
  /************************Urgent Care********************/
  setUrgentCare(urgentCare)
  {
    this.urgentCare=urgentCare;
  }
  getUrgentCare()
  {
    return this.urgentCare;
  }

/************************Long Term Component********************/
setLongTerm(longterm)
{
  this.longterm=longterm;
}
getLongTerm()
{
  return this.longterm;
}
/************************Employee Assistance Component********************/
setAssistance(empAssistance)
{
  this.empAssistance=empAssistance;
}
getAssistance()
{
  return this.empAssistance;
}
/************************Maternity Component********************/
setMaternity(maternity)
{
  this.maternity=maternity;
}
getMaternity()
{
  return this.maternity;
}

/************************New BornComponent********************/
setNewBorn(newborn)
{
  this.newborn=newborn;
}
getNewBorn()
{
  return this.newborn;
}

/************************Home Health Component********************/
setHomeHealth(homehealth)
{
  this.homehealth=homehealth;
}
getHomeHealth()
{
  return this.homehealth;
}
/************************Extended Active Rehabiliation Component********************/
setExtendedActive(extendedactive)
{
  this.extendedactive=extendedactive;
}
getExtendedActive()
{
  return this.extendedactive;
}
/************************Physical Ocupation Component********************/
setPhysicalOccupation(physicaloccupation)
{
  this.physicaloccupation=physicaloccupation;
}
getPhysicalOccupation()
{
  return this.physicaloccupation;
}
/************************Skill Nursing Component********************/
setSkillNursing(skillnursing)
{
  this.skillnursing=skillnursing;
}
getSkillNursing()
{
  return this.skillnursing;
}
/************************Inclusion Component********************/
setInclusion(inclusion)
{
  this.inclusion=inclusion;
  console.log("storageinclusion:"+JSON.stringify(this.inclusion));
  
}
getInclusion()
{

  return this.inclusion;
}
/************************Hospice Component********************/

setHospice(hospice)
{
  this.hospice=hospice;
  
}
getHospice()
{

  return this.hospice;
}

}
