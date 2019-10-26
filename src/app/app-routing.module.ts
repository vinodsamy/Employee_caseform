// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignaturePadComponent } from './signature-pad/signature-pad.component';
import { CaseformComponent } from './caseform/caseform.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReviewPageComponent } from './review-page/review-page.component';

const routes: Routes = [
  {
    path: '', component: CaseformComponent
  },
  {
    path: 'sig-pad', component: SignaturePadComponent
  },
  {
    path: 'reviewpage', component: ReviewPageComponent
  },
  {
    path: 'thankyou', component: ThankyoupageComponent
  },
  {
    path: '**', component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
