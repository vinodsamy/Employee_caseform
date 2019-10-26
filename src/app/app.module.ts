import { SendmailService } from './sendmail.service';
import { CaseformpreviewService } from './caseformpreview.service';
import { NgModule } from '@angular/core';

// declarations
import { AppComponent } from './app.component';
import { CaseformComponent } from './caseform/caseform.component';

// imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

import { ErrorStateMatcher } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material';

import { MatIconModule } from '@angular/material/icon';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { MemCorrespondanceComponent } from './mem-correspondance/mem-correspondance.component';
import { MemContactComponent } from './mem-contact/mem-contact.component';
import { MemPersonalComponent } from './mem-personal/mem-personal.component';
import { ChipsAutocompleteComponent } from './chips-autocomplete/chips-autocomplete.component';
import { SignatureFieldComponent } from './signature-field/signature-field.component';
import { SignaturePadComponent } from './signature-pad/signature-pad.component';
import { NotFoundComponent } from './not-found/not-found.component'; // <----- Here
import {AppRoutingModule} from './app-routing.module'
import { SignaturePadModule } from 'angular2-signaturepad';
import { ReviewPageComponent } from './review-page/review-page.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseformComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    MemCorrespondanceComponent,
    MemContactComponent,
    MemPersonalComponent,
    ChipsAutocompleteComponent,
    SignatureFieldComponent,
    SignaturePadComponent,
    NotFoundComponent,
    ReviewPageComponent,
    ThankyoupageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatChipsModule,
    FormsModule,
    MatExpansionModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
    AppRoutingModule,
    SignaturePadModule
  ],
  providers: [SendmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
