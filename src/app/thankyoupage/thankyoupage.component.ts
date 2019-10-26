import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyoupage',
  templateUrl: './thankyoupage.component.html',
  styleUrls: ['./thankyoupage.component.css']
})
export class ThankyoupageComponent implements OnInit {

  public email_forwarded_caseform = localStorage.getItem('email_forwarded_caseform');
  public unique_id = localStorage.getItem('unique_id');
  constructor() { }

  ngOnInit() {
  }

}
