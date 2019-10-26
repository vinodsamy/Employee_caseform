import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import { v4 as uuid } from "uuid";
import {
  FormBuilder,
  FormGroup,
  Validators,
  NgForm,
  FormGroupDirective,
  FormControl
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatStepper } from '@angular/material';
// import { url } from 'inspector';
// import {Http, Response} from '@angular/http';

// import {COMMA, ENTER} from '@angular/cdk/keycodes';
// import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';

// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//       const isSubmitted = !!(form && form.submitted);
//       const controlTouched = !!(control && (control.dirty || control.touched));
//       const controlInvalid = !!(control && control.invalid);
//       const parentInvalid = !!(control && control.parent && control.parent.invalid && (control.parent.dirty || control.parent.touched));
//       return isSubmitted || (controlTouched && (controlInvalid || parentInvalid));

@Component({
  selector: 'app-caseform',
  templateUrl: './caseform.component.html',
  styleUrls: ['./caseform.component.css']
})
export class CaseformComponent implements OnInit {
  someProblems = true;
  descriptionFieldIsCompliant = false;
  problemDescriptionIsTooShort = true;
  unique_id: string;

  private apiUrl =
    'http://parallelreality.co.uk/workbench/caseform1/mailpdf.php';

  private current_session = {
    one: {
      forename: '',
      surname: '',
      email: '',
      memid: '',
      job: {
        job_title: '',
        commenced: ''
      },
      employer: {
        office_name: '',
        address1: '',
        address2: '',
        address3: '',
        postcode: '',
        phone_number: ''
      },
      workplace: {
        workplace_name: '',
        address1: '',
        address2: '',
        address3: '',
        postcode: ''
      },
      case: {
        problem: '',
        solution: '',
        date_incident: '',
        date_hearing1: ''
      }
    },
    two: {
      correspondance: {
        title: '',
        forename: '',
        initial: '',
        surname: '',
        address1: '',
        address2: '',
        city: '',
        county: '',
        postcode: ''
      },
      contact: {
        home_phone: '',
        work_phone: '',
        mobile_phone: '',
        work_extension: '',
        home_email: '',
        work_email: '',
        voice_text_number: ''
      },
      personal: {
        dob: '',
        joined: '',
        nino: '',
        gender: '',
        have_disability: '',
        any_needs: '',
        ethnic_origin: ''
      },
      self_organized_groups: {
        title: '',
        forename: '',
        initial: '',
        surname: '',
        address1: '',
        address2: '',
        address3: '',
        city: '',
        county: '',
        postcode: '',
        contact_phone: ''
      },
      fitness_to_practice: {
        registration_body: '',
        pin_number: ''
      },
      disclosure_barring: {
        adults_list: '',
        children_list: ''
      }
    },
    three: {
      general: {
        payrollno: '',
        ended: '',
        type: ''
      },
      monetary: {
        h_week: '',
        wage_week: '',
        salary_month: '',
        pay_week: '',
        pay_month: '',
        bonuses_week: '',
        bonuses_month: ''
      }
    },
    four: {
      general: {
        type_hearing1: '',
        date_hearing2: '',
        type_hearing2: '',
        date_meeting1: '',
        type_meeting1: '',
        date_meeting2: '',
        type_meeting2: ''
      },
      similar_claim: {
        is_present: '',
        title1: '',
        forename1: '',
        initial1: '',
        surname1: '',
        address1: '',
        city1: '',
        county1: '',
        postcode1: '',
        contact_phone1: '',
        title2: '',
        forename2: '',
        initial2: '',
        surname2: '',
        address2: '',
        city2: '',
        county2: '',
        postcode2: '',
        contact_phone2: ''
      },
      other_actions: {
        anyone_else: '',
        name: '',
        action: '',
        acas: '',
        acas_date: '',
        certificate: '',
        certificate_date: ''
      },
      signature1: '',
      signature2: ''
    }
  };

  private current_session_default_blank = {
    one: {
      forename: '',
      surname: '',
      email: '',
      memid: '',
      job: {
        job_title: '',
        commenced: ''
      },
      employer: {
        office_name: '',
        address1: '',
        address2: '',
        address3: '',
        postcode: '',
        phone_number: ''
      },
      workplace: {
        workplace_name: '',
        address1: '',
        address2: '',
        address3: '',
        postcode: ''
      },
      case: {
        problem: '',
        solution: '',
        date_incident: '',
        date_hearing1: ''
      }
    },
    two: {
      correspondance: {
        title: '',
        forename: '',
        initial: '',
        surname: '',
        address1: '',
        address2: '',
        city: '',
        county: '',
        postcode: ''
      },
      contact: {
        home_phone: '',
        work_phone: '',
        mobile_phone: '',
        work_extension: '',
        home_email: '',
        work_email: '',
        voice_text_number: ''
      },
      personal: {
        dob: '',
        joined: '',
        nino: '',
        gender: '',
        have_disability: '',
        any_needs: '',
        ethnic_origin: ''
      },
      self_organized_groups: {
        title: '',
        forename: '',
        initial: '',
        surname: '',
        address1: '',
        address2: '',
        address3: '',
        city: '',
        county: '',
        postcode: '',
        contact_phone: ''
      },
      fitness_to_practice: {
        registration_body: '',
        pin_number: ''
      },
      disclosure_barring: {
        adults_list: '',
        children_list: ''
      }
    },
    three: {
      general: {
        payrollno: '',
        ended: '',
        type: ''
      },
      monetary: {
        h_week: '',
        wage_week: '',
        salary_month: '',
        pay_week: '',
        pay_month: '',
        bonuses_week: '',
        bonuses_month: ''
      }
    },
    four: {
      general: {
        type_hearing1: '',
        date_hearing2: '',
        type_hearing2: '',
        date_meeting1: '',
        type_meeting1: '',
        date_meeting2: '',
        type_meeting2: ''
      },
      similar_claim: {
        is_present: '',
        title1: '',
        forename1: '',
        initial1: '',
        surname1: '',
        address1: '',
        city1: '',
        county1: '',
        postcode1: '',
        contact_phone1: '',
        title2: '',
        forename2: '',
        initial2: '',
        surname2: '',
        address2: '',
        city2: '',
        county2: '',
        postcode2: '',
        contact_phone2: ''
      },
      other_actions: {
        anyone_else: '',
        name: '',
        action: '',
        acas: '',
        acas_date: '',
        certificate: '',
        certificate_date: ''
      },
      signature1: '',
      signature2: ''
    }
  };
  isLinear = false;
  titles = [
    { value: 'man', viewValue: 'Mr.' },
    { value: 'woman', viewValue: 'Mrs.' }
  ];
  genders = [
    { value: 'man', viewValue: 'Male' },
    { value: 'woman', viewValue: 'Female' }
  ];
  yesnoanswer = [
    { value: 'yes', viewValue: 'Yes, I do' },
    { value: 'no', viewValue: 'No, I don\'t' }
  ];
  yesnoanswer_straight = [
    { value: 'yes', viewValue: 'Yes' },
    { value: 'no', viewValue: 'No' }
  ];
  yesnoanswer_iam = [
    { value: 'yes', viewValue: 'Yes, I am' },
    { value: 'no', viewValue: 'No, I\'m not' }
  ];
  yesnoanswer_thereis = [
    { value: 'yes', viewValue: 'Yes, there is' },
    { value: 'no', viewValue: 'No, there isn\'t' }
  ];
  employment_types = [
    { value: 'a', viewValue: 'Permanent' },
    { value: 'b', viewValue: 'Temporary' },
    { value: 'c', viewValue: 'Casual' },
    { value: 'd', viewValue: 'Fixed Term Contract' },
    { value: 'e', viewValue: 'Full-time' },
    { value: 'f', viewValue: 'Part-time' },
    { value: 'g', viewValue: 'Job share' }
  ];
  ethnic_origins = [
    { value: 'a', viewValue: 'Bangladeshi' },
    { value: 'b', viewValue: 'Chinese' },
    { value: 'c', viewValue: 'Indian' },
    { value: 'd', viewValue: 'Pakistani' },
    { value: 'e', viewValue: 'Asian UK' },
    { value: 'f', viewValue: 'Asian Other' },
    { value: 'g', viewValue: 'Black African' },
    { value: 'h', viewValue: 'Black Caribbean' },
    { value: 'i', viewValue: 'Black UK' },
    { value: 'l', viewValue: 'Black Other' },
    { value: 'm', viewValue: 'White UK' },
    { value: 'n', viewValue: 'Irish' },
    { value: 'o', viewValue: 'White Other' }
  ];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  @ViewChild('stepper') stepper: MatStepper;
  // tslint:disable-next-line: variable-name
  constructor(private _formBuilder: FormBuilder) { }
  matcher = new MyErrorStateMatcher();

  step = { one: 0, two: 0, three: 0, four: 0 };

  move(index: number) {
    this.stepper.selectedIndex = index;
    this.save('anotherStep');
  }

  setStep(expansion: string, index: number) {
    this.step[expansion] = index;
  }

  nextStep(expansion: string) {
    this.step[expansion]++;
    // this.save();
    if (expansion === 'one') {
      // check email was filled
      // call webservice and send email with pdfs
    }
  }

  prevStep(expansion: string) {
    this.step[expansion]--;
    // this.save();
  }

  // tslint:disable-next-line: variable-name
  formatParams(array_params) {
    const urlVars = {};
    let varValCouple, propName, propValue;
    console.log('var 0 is ' + array_params[0]);
    console.log('var is ' + array_params);
    for (let i = 0; i < array_params.length; i++) {
      varValCouple = array_params[i].split('=');
      propName = varValCouple[0];
      propValue = varValCouple[1];
      urlVars[propName] = propValue;
    }
    this.displayParams(urlVars);
  }

  patchFirstFormGroup(urlVars) {
    const jobcommenced = decodeURI(urlVars.p17);
    const commenced = this.formatDate(jobcommenced);

    if (commenced != false) {
      this.firstFormGroup.patchValue({
        job: {
          commenced: commenced
        }
      });
    }
    this.firstFormGroup.patchValue({
      forename: decodeURI(urlVars.p1),
      surname: decodeURI(urlVars.p2),
      memid: decodeURI(urlVars.p0),
      email: decodeURI(urlVars.p5),
      job: { job_title: decodeURI(urlVars.p12) },
      employer: { office_name: decodeURI(urlVars.p7) },
      workplace: { workplace_name: decodeURI(urlVars.p10) }
    });
  }
  formatDate(date) {
    if (date != '') {
      console.log('date is: ' + date);
      const dateFormatted = new Date(date);
      return dateFormatted.toISOString().substring(0, 10);
    } else {
      return false;
    }
  }
  patchSecondFormGroup(urlVars) {
    let processedGender;
    if (decodeURI(urlVars.p3) == 'Male') {
      processedGender = 'man';
    }
    if (decodeURI(urlVars.p3) == 'Female') {
      processedGender = 'woman';
    }

    let processedEO;
    switch (decodeURI(urlVars.p15)) {
      case 'BANGLADESHI':
        processedEO = 'a';
        break;
      case 'CHINESE':
        processedEO = 'b';
        break;
      case 'INDIAN':
        processedEO = 'c';
        break;
      case 'PAKISTANI':
        processedEO = 'd';
        break;
      case 'ASIAN  UK':
        processedEO = 'e';
        break;
      case 'ASIAN OTHER':
        processedEO = 'f';
        break;
      case 'BLACK AFRICAN':
        processedEO = 'g';
        break;
      case 'BLACK CARIBBEAN':
        processedEO = 'h';
        break;
      case 'BLACK  UK':
        processedEO = 'i';
        break;
      case 'BLACK OTHER':
        processedEO = 'l';
        break;
      case 'WHITE UK':
        processedEO = 'm';
        break;
      case 'IRISH':
        processedEO = 'n';
        break;
      case 'WHITE OTHER':
        processedEO = 'o';
        break;
      case 'WHITE':
        processedEO = 'o';
        break;
    }

    // {value: 'a', viewValue: 'Bangladeshi'},
    // {value: 'b', viewValue: 'Chinese'},
    // {value: 'c', viewValue: 'Indian'},
    // {value: 'd', viewValue: 'Pakistani'},
    // {value: 'e', viewValue: 'Asian UK'},
    // {value: 'f', viewValue: 'Asian Other'},
    // {value: 'g', viewValue: 'Black African'},
    // {value: 'h', viewValue: 'Black Caribbean'},
    // {value: 'i', viewValue: 'Black UK'},
    // {value: 'l', viewValue: 'Black Other'},
    // {value: 'm', viewValue: 'White UK'},
    // {value: 'n', viewValue: 'Irish'},
    // {value: 'o', viewValue: 'White Other'}

    const dateOfBirth = decodeURI(urlVars.p13);
    const dob = this.formatDate(dateOfBirth);
    if (dob != false) {
      this.secondFormGroup.patchValue({
        personal: {
          dob: dob
        }
      });
    }

    const datejoined = decodeURI(urlVars.p14);
    console.log('datejoined: ' + datejoined);
    const joined = this.formatDate(datejoined);
    if (joined != false) {
      this.secondFormGroup.patchValue({
        personal: {
          joined: joined
        }
      });
    }

    this.secondFormGroup.patchValue({
      personal: {
        gender: processedGender,
        ethnic_origin: processedEO,
        nino: decodeURI(urlVars.p16)
      },
      contact: {
        voice_text_number: decodeURI(urlVars.p4),
        home_phone: decodeURI(urlVars.p8),
        work_phone: decodeURI(urlVars.p9),
        work_email: decodeURI(urlVars.p5),
        mobile_phone: decodeURI(urlVars.p18)
      },
      correspondance: {
        title: processedGender,
        forename: decodeURI(urlVars.p1),
        surname: decodeURI(urlVars.p2),
        address1: decodeURI(urlVars.p19),
        address2: decodeURI(urlVars.p20) + ' ' + decodeURI(urlVars.p21),
        city: decodeURI(urlVars.p22),
        county: decodeURI(urlVars.p23),
        postcode: decodeURI(urlVars.p24)
      }
    });
  }

  displayParams(urlVars) {
    console.log('urlVars is ');
    console.log(urlVars);
    //if (this.firstFormGroup.value.memid === urlVars.p0) { // on 15 oct 2018 Pradeep asked me to take this one out
    console.log('memid is same');
    this.patchFirstFormGroup(urlVars);
    this.patchSecondFormGroup(urlVars);
    //}
  }
  fillUsingSavedData() {
    if (localStorage.getItem('current_session')) {
      const storedData: string = localStorage.getItem('current_session');
      this.current_session = JSON.parse(storedData);
    }
    this.firstFormGroup.patchValue(this.current_session.one);
    // this.secondFormGroup.value = this.current_session.two;
    // this.thirdFormGroup.value = this.current_session.three;
    // this.fourthFormGroup.value = this.current_session.four;
  }

  lookForMemid() {
    // receiving url params
    const array_params = decodeURIComponent(
      window.location.search.substring(1)
    ).split('&');
    console.log('arrayparam is');
    console.log(array_params);
    console.log('im looking for member id -----------------------------------');
    if (array_params[0] !== '') {
      console.log('array riconosciuto');
      this.formatParams(array_params);
    }

    //this.save('temp');
  }

  fixit(fieldToFocus) {
    if (fieldToFocus === 'problem') {
      this.stepper.selectedIndex = 0;
      this.setStep('one', 0);
      console.log('this.step.one is ' + this.step.one);
    }
    if (fieldToFocus === 'forename') {
      this.stepper.selectedIndex = 0;
      this.setStep('one', 4);
      console.log('this.step.one is ' + this.step.one);
    }
    if (fieldToFocus === 'surname') {
      this.stepper.selectedIndex = 0;
      this.setStep('one', 4);
      console.log('this.step.one is ' + this.step.one);
    }

    if (fieldToFocus === 'email') {
      this.stepper.selectedIndex = 0;
      this.setStep('one', 4);
      console.log('this.step.one is ' + this.step.one);
    }
    if (fieldToFocus === 'memid') {
      this.stepper.selectedIndex = 0;
      this.setStep('one', 4);
      console.log('this.step.one is ' + this.step.one);
    }
    if (fieldToFocus === 'solution') {
      this.stepper.selectedIndex = 0;
      this.setStep('one', 0);
      console.log('this.step.one is ' + this.step.one);
    }
    if (fieldToFocus === 'other_actions') {
      this.stepper.selectedIndex = 3;
      this.setStep('four', 2);
      console.log('this.step.four is ' + this.step.four);
    }
    const anchor = document.querySelector('#' + fieldToFocus);
    const interval = window.setInterval(() => {
      anchor.scrollIntoView();
      window.clearInterval(interval);
    }, 100);
    console.log('location hashed');
  }
  save(type) {
    this.current_session.one = this.firstFormGroup.value;
    this.current_session.two = this.secondFormGroup.value;
    this.current_session.three = this.thirdFormGroup.value;
    this.current_session.four = this.fourthFormGroup.value;

    localStorage.setItem(
      'current_session',
      JSON.stringify(this.current_session)
    );
    console.log('current session', this.current_session);
    if (type == 'final') {
      localStorage.setItem(
        'email_forwarded_caseform',
        this.firstFormGroup.value.email
      );
      // alert(uuid());
    }
    if (type == 'anotherStep') {
      window.scroll(0, 0);
    }
  }

  ngOnInit() {
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.current_session = this.current_session_default_blank;

    const interval = window.setInterval(() => {
      this.lookForMemid();
      window.clearInterval(interval);
    }, 500);

    // let vatdemo = decodeURIComponent(window.location.search.substring(1)).split(',');
    // console.log('var is ' + vatdemo);

    // let vatdemo1 = decodeURIComponent(window.location.search.substring(1)).split('=');
    // console.log('var is ' + vatdemo1);

    // var first_value={
    // forename: 'Jonathan',
    // surname: 'Smith',
    // email: 'jonathan.smith@emailprovider.co.uk',
    // job: {job_title: 'HGVDrivers (Refuse Drivers)', commenced: '19 Mar 2016'},
    // employer: {office_name: 'Veolia Environmental Services (UK) Plc[30778]'},
    // workplace: {workplace_name: 'Drury Lane Depot[2041319]/'}
    // }

    // let first_split=this.firstFormGroup.split(',')
    // var query = window.location.search.substring(1);
    // var vars = query.split("&");
    // for (var i=0;i<vars.length;i++) {
    //         var pair = vars[i].split("=");
    //         if(pair[0] == variable){return pair[1];}
    // }

    console.log('current session ', this.current_session);
    this.firstFormGroup = this._formBuilder.group({
      forename: [this.current_session.one.forename, Validators.required],
      surname: [this.current_session.one.surname, Validators.required],
      email: [
        this.current_session.one.email,
        Validators.compose([
          Validators.required,
          Validators.pattern(emailRegEx)
        ])
      ],
      memid: [this.current_session.one.memid, Validators.required],
      job: this._formBuilder.group({
        job_title: [
          this.current_session.one.job.job_title,
          Validators.required
        ],
        commenced: [this.current_session.one.job.commenced, Validators.required]
      }),
      employer: this._formBuilder.group({
        office_name: [
          this.current_session.one.employer.office_name,
          Validators.required
        ],
        address1: [
          this.current_session.one.employer.address1,
          Validators.required
        ],
        address2: [
          this.current_session.one.employer.address2,
          Validators.required
        ],
        address3: [
          this.current_session.one.employer.address3,
          Validators.required
        ],
        postcode: [
          this.current_session.one.employer.postcode,
          Validators.required
        ],
        phone_number: [
          this.current_session.one.employer.phone_number,
          Validators.required
        ]
      }),
      workplace: this._formBuilder.group({
        workplace_name: [
          this.current_session.one.workplace.workplace_name,
          Validators.required
        ],
        address1: [
          this.current_session.one.workplace.address1,
          Validators.required
        ],
        address2: [
          this.current_session.one.workplace.address2,
          Validators.required
        ],
        address3: [
          this.current_session.one.workplace.address3,
          Validators.required
        ],
        postcode: [
          this.current_session.one.workplace.postcode,
          Validators.required
        ]
      }),
      case: this._formBuilder.group({
        problem: [this.current_session.one.case.problem, Validators.required],
        solution: [this.current_session.one.case.solution, Validators.required],
        date_incident: [
          this.current_session.one.case.date_incident,
          Validators.required
        ],
        date_hearing1: [this.current_session.one.case.date_hearing1]
      })
    });
    this.secondFormGroup = this._formBuilder.group({
      correspondance: this._formBuilder.group({
        title: [
          this.current_session.two.correspondance.title,
          Validators.required
        ],
        forename: [
          this.current_session.two.correspondance.forename,
          Validators.required
        ],
        initial: [this.current_session.two.correspondance.initial],
        surname: [
          this.current_session.two.correspondance.surname,
          Validators.required
        ],
        address1: [
          this.current_session.two.correspondance.address1,
          Validators.required
        ],
        address2: [this.current_session.two.correspondance.address2],
        city: [
          this.current_session.two.correspondance.city,
          Validators.required
        ],
        county: [
          this.current_session.two.correspondance.county,
          Validators.required
        ],
        postcode: [
          this.current_session.two.correspondance.postcode,
          Validators.required
        ]
      }),
      contact: this._formBuilder.group({
        home_phone: [
          this.current_session.two.contact.home_phone,
          Validators.required
        ],
        work_phone: [
          this.current_session.two.contact.work_phone,
          Validators.required
        ],
        mobile_phone: [
          this.current_session.two.contact.mobile_phone,
          Validators.required
        ],
        work_extension: [this.current_session.two.contact.work_extension],
        home_email: [
          this.current_session.two.contact.home_email,
          Validators.compose([
            Validators.required,
            Validators.pattern(emailRegEx)
          ])
        ],
        work_email: [
          this.current_session.two.contact.work_email,
          Validators.compose([
            Validators.required,
            Validators.pattern(emailRegEx)
          ])
        ],
        voice_text_number: [this.current_session.two.contact.voice_text_number]
      }),
      personal: this._formBuilder.group({
        dob: [this.current_session.two.personal.dob, Validators.required],
        joined: [this.current_session.two.personal.joined, Validators.required],
        nino: [this.current_session.two.personal.nino, Validators.required],
        gender: [this.current_session.two.personal.gender, Validators.required],
        have_disability: [
          this.current_session.two.personal.have_disability,
          Validators.required
        ],
        any_needs: [this.current_session.two.personal.any_needs],
        ethnic_origin: [
          this.current_session.two.personal.ethnic_origin,
          Validators.required
        ]
      }),
      self_organized_groups: this._formBuilder.group({
        title: [
          this.current_session.two.self_organized_groups.title,
          Validators.required
        ],
        forename: [
          this.current_session.two.self_organized_groups.forename,
          Validators.required
        ],
        initial: [this.current_session.two.self_organized_groups.initial],
        surname: [
          this.current_session.two.self_organized_groups.surname,
          Validators.required
        ],
        address1: [
          this.current_session.two.self_organized_groups.address1,
          Validators.required
        ],
        address2: [this.current_session.two.self_organized_groups.address2],
        address3: [this.current_session.two.self_organized_groups.address3],
        city: [
          this.current_session.two.self_organized_groups.city,
          Validators.required
        ],
        county: [
          this.current_session.two.self_organized_groups.county,
          Validators.required
        ],
        postcode: [
          this.current_session.two.self_organized_groups.postcode,
          Validators.required
        ],
        contact_phone: [
          this.current_session.two.self_organized_groups.contact_phone,
          Validators.required
        ]
      }),
      fitness_to_practice: this._formBuilder.group({
        registration_body: [
          this.current_session.two.fitness_to_practice.registration_body,
          Validators.required
        ],
        pin_number: [
          this.current_session.two.fitness_to_practice.pin_number,
          Validators.required
        ]
      }),
      disclosure_barring: this._formBuilder.group({
        adults_list: [
          this.current_session.two.disclosure_barring.adults_list,
          Validators.required
        ],
        children_list: [
          this.current_session.two.disclosure_barring.children_list,
          Validators.required
        ]
      })
    });
    this.thirdFormGroup = this._formBuilder.group({
      general: this._formBuilder.group({
        // job_title: [this.current_session.three.general.job_title, Validators.required],
        // commenced: [this.current_session.three.general.commenced, Validators.required],
        payrollno: [
          this.current_session.three.general.payrollno,
          Validators.required
        ],
        ended: [this.current_session.three.general.ended],
        type: [this.current_session.three.general.type, Validators.required]
      }),
      monetary: this._formBuilder.group({
        h_week: [
          this.current_session.three.monetary.h_week,
          Validators.required
        ],
        wage_week: [
          this.current_session.three.monetary.wage_week,
          Validators.required
        ],
        salary_month: [
          this.current_session.three.monetary.salary_month,
          Validators.required
        ],
        pay_week: [
          this.current_session.three.monetary.pay_week,
          Validators.required
        ],
        pay_month: [
          this.current_session.three.monetary.pay_month,
          Validators.required
        ],
        bonuses_week: [
          this.current_session.three.monetary.bonuses_week,
          Validators.required
        ],
        bonuses_month: [
          this.current_session.three.monetary.bonuses_month,
          Validators.required
        ]
      })
    });
    this.fourthFormGroup = this._formBuilder.group({
      general: this._formBuilder.group({
        // date_incident: [this.current_session.four.general.date_incident, Validators.required],
        // date_hearing1: [this.current_session.four.general.date_hearing1, Validators.required],
        type_hearing1: [
          this.current_session.four.general.type_hearing1,
          Validators.required
        ],
        date_hearing2: [this.current_session.four.general.date_hearing2],
        type_hearing2: [this.current_session.four.general.type_hearing2],
        date_meeting1: [
          this.current_session.four.general.date_meeting1,
          Validators.required
        ],
        type_meeting1: [
          this.current_session.four.general.type_meeting1,
          Validators.required
        ],
        date_meeting2: [this.current_session.four.general.date_meeting2],
        type_meeting2: [this.current_session.four.general.type_meeting2]
      }),
      similar_claim: this._formBuilder.group({
        is_present: [
          this.current_session.four.similar_claim.is_present,
          Validators.required
        ],
        title1: [this.current_session.four.similar_claim.title1],
        forename1: [this.current_session.four.similar_claim.forename1],
        initial1: [this.current_session.four.similar_claim.initial1],
        surname1: [this.current_session.four.similar_claim.surname1],
        address1: [this.current_session.four.similar_claim.address1],
        city1: [this.current_session.four.similar_claim.city1],
        county1: [this.current_session.four.similar_claim.county1],
        postcode1: [this.current_session.four.similar_claim.postcode1],
        contact_phone1: [
          this.current_session.four.similar_claim.contact_phone1
        ],
        title2: [this.current_session.four.similar_claim.title2],
        forename2: [this.current_session.four.similar_claim.forename2],
        initial2: [this.current_session.four.similar_claim.initial2],
        surname2: [this.current_session.four.similar_claim.surname2],
        address2: [this.current_session.four.similar_claim.address2],
        city2: [this.current_session.four.similar_claim.city2],
        county2: [this.current_session.four.similar_claim.county2],
        postcode2: [this.current_session.four.similar_claim.postcode2],
        contact_phone2: [this.current_session.four.similar_claim.contact_phone2]
      }),
      other_actions: this._formBuilder.group({
        anyone_else: [
          this.current_session.four.other_actions.anyone_else,
          Validators.required
        ],
        name: [this.current_session.four.other_actions.name],
        action: [this.current_session.four.other_actions.action],
        acas: [this.current_session.four.other_actions.acas],
        acas_date: [this.current_session.four.other_actions.acas_date],
        certificate: [this.current_session.four.other_actions.certificate],
        certificate_date: [
          this.current_session.four.other_actions.certificate_date
        ]
      })
    });
  }
}
