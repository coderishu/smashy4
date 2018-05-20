import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {DeductibleModule} from "./deductible/deductible-module";
import {PlanDeductibleComponent} from "./plan-deductible.component";
import {Routes, RouterModule} from "@angular/router";
//import {DeductibleComponent} from "./deductible/deductible.component";
import {CoinsuranceComponent} from "./coinsurance/coinsurance.component";
import {OutofPocketComponent} from "./outof-pocket/outof-pocket.component";
import {ChiropracticComponent} from "./chiropractic/chiropractic.component";
import {GeneralRadiologyComponent} from "./general-radiology/general-radiology.component";
import {PhysicalOccupation} from "./benefit-service/physicaloccupationtherapy/physical-occupation.component";
import {OutpatientHospitalComponent} from "./outpatient-hospital/outpatient-hospital.component";
import {NewBorn} from "./benefit-service/newborn/newborn.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {DeductibleDetailsComponent} from "./deductible/deductible-details/deductible-details.component";
import {DeductibleComponent} from "./deductible/deductible.component";
import {CoinsuranceDetailsComponent} from "./coinsurance/coinsurance-details/coinsurance-details.component";
import {OutofpocketDetailsComponent} from "./outof-pocket/outofpocket-details/outofpocket-details.component";
import {CopayComponent} from "./copay/copay.component";
// import {AmbulanceComponent} from "./ambulance/ambulance.component";
import {PhysicianServiceComponent} from "./physician-service/physician-service.component";
import{LongTermComponent} from "./benefit-service/longterm-acute-care/longterm.component";
import {ExtendedActive} from "./benefit-service/extendedActiveRehabition/extendedActive.component";
//import {Hospice} from "./benefit-service/hospice/hospice.component";
import {DurableEquipmentComponent} from "./benefit-service/durableMedicalEquipment/durableequipment.component";
import {HomeHealth} from "./benefit-service/HomeHealth/home-health.component";
import {LimitationComponent} from "./chiropractic/second-tab/limitation/limitation.component";
import{ChiropraticDeductibleComponent} from "./chiropractic/first-tab/add-cost-share/chiropratic-deductible/chiropratic-deductible.component";
import {ChiropracticOutofPocketComponent} from "./chiropractic/first-tab/add-cost-share/chiropractic-outof-pocket/chiropractic-outof-pocket.component";
import {ChiropracticCopayComponent} from "./chiropractic/first-tab/add-cost-share/chiropractic-copay/chiropractic-copay.component";
import {BenefitCategoryPipe} from "./public/pipes/benefit-category.pipe";
import {BenefitOutofPocketPipe} from "./public/pipes/benefit-outof-pocket.pipe";
import {ChiropaticCoinuranceComponent} from "./chiropractic/first-tab/add-cost-share/chiropatic-coinurance/chiropatic-coinurance.component";
 import {InclusionComponent} from "./chiropractic/third-tab/inclusion/inclusion.component";
import {AddCostShareQualifierComponent} from 'app/component/admin/plan-deductible/chiropractic/first-tab/add-cost-share/add-cost-share-qualifier/add-cost-share-qualifier.component';
import {BscommonModuleComponent} from 'app/component/admin/plan-deductible/public/component/bscommon-module/bscommon-module.component';
import {FourthQuarterCarryOverDeductibleComponent} from "./fourth-quarter-carry-over-deductible/fourth-quarter-carry-over-deductible.component";
import {ProfessionalServicesComponent} from "./benefit-service/professional-services/professional-services.component";
import {PreventiveServicesComponent} from "./benefit-service/preventive-services/preventive-services.component";
import {PrescriptionMedicationsComponent} from "./benefit-service/prescription-medications/prescription-medications.component";
import {OutpatientServicesComponent} from "./benefit-service/outpatient-services/outpatient-services.component";
import {BariatricSurgeryComponent} from "./benefit-service/bariatric-surgery/bariatric-surgery.component";
import {RadiologyServicesComponent} from "./benefit-service/radiology-services/radiology-services.component";
import {LaboratoryServicesComponent} from "./benefit-service/laboratory-services/laboratory-services.component";
import {SpecialtyMedicationsComponent} from "./benefit-service/specialty-medications/specialty-medications.component";
import {EmergencyRoomComponent} from "./benefit-service/emergency-room/emergency-room.component";
import {Maternity} from "./benefit-service/Maternity/maternity.component";
import {EmployeeAssistance} from "./benefit-service/employeeAssistanceProgram/employee-assistance.component";
import {UrgentCareComponent} from "./benefit-service/urgent-care/urgent-care.component";
import {InpatientHospitalComponent} from "./benefit-service/inpatient-hospital/inpatient-hospital.component";
import {SkillNursingComponent} from "./benefit-service/skillnursingfacility/skill-nursing.component";

export const PlanDeductibleRoutes: Routes = [
  {
    path: 'planDeductible',
    component: PlanDeductibleComponent,
    children:[
    //  { path: 'deductib',loadChildren: './deductible/deductible-module#DeductibleModule' },
      { path: 'deductible',component: DeductibleComponent, data:{breadcrumb:'Deductible'} },
     
      { path: 'durableMedicalEquipment',component: DurableEquipmentComponent, data:{breadcrumb:'Durable Equipment Component'} },
      { path: 'homeHealth',component: HomeHealth, data:{breadcrumb:'Home Health'} },
      { path: 'coinsurance',component: CoinsuranceComponent, data:{breadcrumb:'Coinsurance'} },
      { path: 'skilledNursingFAcility',component: SkillNursingComponent, data:{breadcrumb:'Skill Nursing'} },
      { path: 'OutofPocket',component: OutofPocketComponent , data:{breadcrumb:'Out of Pocket'}},
      { path: 'chiropractic',component: ChiropracticComponent , data:{breadcrumb:'Chiropractic'}},
      { path: 'extendedActiveRehabilitation',component: ExtendedActive , data:{breadcrumb:'ExtendedActive'}},
      { path: 'employeeAssistanceProgram',component: EmployeeAssistance , data:{breadcrumb:'EmployeeAssistance'}},
       { path: 'physicalOccupationalSpeechTherapy',component: PhysicalOccupation , data:{breadcrumb:'PhysicalOccupation'}},
      { path: 'generalRadiology',component: GeneralRadiologyComponent , data:{breadcrumb:'General Radiology'}},
      // { path: 'inpatientHospital',component: InpatientHospitalComponent , data:{breadcrumb:'Inpatient Hospital'}},
      { path: 'outpatientHospital',component: OutpatientHospitalComponent , data:{breadcrumb:'Out patient Hospital'}},
      // { path: 'emergencyRoom',component: EmergencyRoomComponent, data:{breadcrumb:'Emergency Room'} },
      // { path: 'urgentCare',component: UrgentCareComponent , data:{breadcrumb:'Urgent Care'}},
      { path: 'deductibleCustom',component: DeductibleDetailsComponent, data:{breadcrumb:'Deductible Custom'} },
      { path: 'coinsuranceCustom',component: CoinsuranceDetailsComponent, data:{breadcrumb:'Coinsurance Custom'} },
      { path: 'outofpocketCustom',component:  OutofpocketDetailsComponent , data:{breadcrumb:'Out of Pocket Custom'}},
      { path: 'copay',component:  CopayComponent, data:{breadcrumb:'Copay'} },
      { path: 'newborn',component:  NewBorn, data:{breadcrumb:'New Born'} },
      // { path: 'ambulance',component:  AmbulanceComponent , data:{breadcrumb:'Ambulance'}},
      { path: 'physicianServices',component:  PhysicianServiceComponent , data:{breadcrumb:'Physician Service'}},
      { path: 'professionalServices',component: ProfessionalServicesComponent , data:{breadcrumb:'Professional Services'}},
      { path: 'preventiveServices',component: PreventiveServicesComponent , data:{breadcrumb:'Preventive Services'}},
      { path: 'labServices',component: LaboratoryServicesComponent , data:{breadcrumb:'Laboratory Services'}},
      { path: 'longTermAcuteCare',component: LongTermComponent , data:{breadcrumb:'Long Term Component'}},
      { path: 'radiologyServices',component: RadiologyServicesComponent , data:{breadcrumb:'Radiology Services'}},
      { path: 'prescriptionMedications',component: PrescriptionMedicationsComponent , data:{breadcrumb:'Prsscription Medications'}},
      { path: 'specialtyMedications',component: SpecialtyMedicationsComponent , data:{breadcrumb:'Specialty Medications'}},
      { path: 'outpatientServices',component: OutpatientServicesComponent , data:{breadcrumb:'Outpatient Services'}},
      { path: 'bariatricSurgery',component: BariatricSurgeryComponent , data:{breadcrumb:'Bariatric Surgery'}},
      { path: 'emergencyRoom',component: EmergencyRoomComponent , data:{breadcrumb:'Emergency Room'}},
      { path: 'urgentCare',component: UrgentCareComponent , data:{breadcrumb:'Urgent Care'}},
      //{ path: 'hospice',component: Hospice, data:{breadcrumb:'Hospice'} },
      { path: 'maternity',component: Maternity , data:{breadcrumb:'Maternity'}},
      { path: 'inpatientHospital',component: InpatientHospitalComponent , data:{breadcrumb:'Inpatient Hospital'}},

    ]

  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //DeductibleModule,
    RouterModule.forChild(PlanDeductibleRoutes),

  ],
  //exports: [RouterModule],
  declarations: [PlanDeductibleComponent,
    InclusionComponent,
    CoinsuranceComponent,
    DurableEquipmentComponent,
    OutofPocketComponent,
    SkillNursingComponent,
    Maternity,
    ChiropracticComponent,
    HomeHealth,
    //Hospice,
    PhysicalOccupation,
    ExtendedActive,
    LongTermComponent,
    NewBorn,
    EmployeeAssistance,
    GeneralRadiologyComponent,
    OutpatientHospitalComponent,
    UrgentCareComponent,
    EmergencyRoomComponent,
    DeductibleComponent,
    DeductibleDetailsComponent,
    CoinsuranceDetailsComponent,
    OutofpocketDetailsComponent,
    CopayComponent,
    // AmbulanceComponent,
    PhysicianServiceComponent,
    ChiropracticOutofPocketComponent,
    ChiropracticCopayComponent,
    LimitationComponent,
    ChiropraticDeductibleComponent,
    BenefitCategoryPipe,
    BenefitOutofPocketPipe,
    ChiropaticCoinuranceComponent,
    AddCostShareQualifierComponent,
    BscommonModuleComponent,      //common module. Used in Benefit Services in right hand side
    FourthQuarterCarryOverDeductibleComponent,
    ProfessionalServicesComponent,
    PreventiveServicesComponent,
    LaboratoryServicesComponent,
    SpecialtyMedicationsComponent,
    RadiologyServicesComponent,
    PrescriptionMedicationsComponent,
    OutpatientServicesComponent,
    BariatricSurgeryComponent,
    InpatientHospitalComponent,

      ],
  exports: [
    RouterModule
  ],
})
export class PlanDeductibleModule { }
