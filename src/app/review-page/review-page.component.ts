import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CaseformpreviewService } from '../caseformpreview.service';
import { SendmailService } from '../sendmail.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { v4 as uuid } from "uuid";

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewPageComponent implements OnInit {

  public caseformpreview;
  public unique_id: string;
  constructor(private router: Router, private caseformpreviewService: CaseformpreviewService, private sendMailService: SendmailService) {


    const caseformLoaded = JSON.parse(localStorage.getItem('current_session'));

    console.log('caseformLoaded: ');
    console.log(caseformLoaded);
    const interval = window.setInterval(() => {
      this.caseformpreview = this.caseformpreviewService.getPreview(caseformLoaded);
      console.log('caseformpreview-----');
      console.log(this.caseformpreview);
      window.clearInterval(interval);
    }, 1000);
  }

  sendMailPdf = () => {
    console.log('sendMailPdf in execution');
    this.unique_id = uuid();
    console.log(this.unique_id)
    localStorage.setItem('unique_id', this.unique_id);

    const interval = window.setInterval(() => {
      const caseform = JSON.parse(localStorage.getItem('current_session'));
      const signature1 = localStorage.getItem('signature1');
      const signature2 = localStorage.getItem('signature2');
      const date_signature = localStorage.getItem('date_today');

      const interval1 = window.setInterval(() => {
        const package4service = {
          caseform: caseform,
          signature1: signature1,
          signature2: signature2,
          date_signature: date_signature,
          data: caseform.four.other_actions.acas_date
        };
        console.log('the package4service im sending is:');
        console.log(package4service);
        this.sendMailService.sendPdfMail(package4service);
        window.clearInterval(interval1);
        this.router.navigate(['thankyou']);
      }, 1000);

      window.clearInterval(interval);
    }, 1000);
  }

  ngOnInit() {
  }

}
