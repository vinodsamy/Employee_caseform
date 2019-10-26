import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {
  constructor(private http: HttpClient) { }


  private apiurl = '/include/sendemail_caseform.php'; // + this.get_vars;

  sendPdfMail(variables) {

    this.http.post(this.apiurl, variables).subscribe((res: Response) => {
      console.log('result form webservice is: ', res);
      //return res;
    });
  }
}


