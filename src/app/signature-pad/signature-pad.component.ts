import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignatureFieldComponent } from '../signature-field/signature-field.component';

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.css']
})
export class SignaturePadComponent  {
  public title = 'Angular signature';
  public title2 = 'Angular Confirm Signature';
  public form: FormGroup;

  // for convenience as we don't have a QueryList.index
  public secondSig: SignatureFieldComponent;

  @ViewChildren(SignatureFieldComponent) public sigs: QueryList<SignatureFieldComponent>;
  @ViewChildren('sigContainer1') public sigContainer1: QueryList<ElementRef>;
  @ViewChildren('sigContainer2') public sigContainer2: QueryList<ElementRef>;

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      signatureField1: ['', Validators.required],
      signatureField2: ['', Validators.required]

    });
  }

  public ngAfterViewInit() {
    this.secondSig = this.sigs.find((sig, index) => index === 1);
    this.beResponsive();
    this.setOptions();
  }

  // set the dimensions of the signature pad canvas
  public beResponsive() {
    console.log('Resizing signature pad canvas to suit container size');
    this.size(this.sigContainer1.first, this.sigs.first);
    this.size(this.sigContainer2.first, this.secondSig);

  }

  public size(container: ElementRef, sig: SignatureFieldComponent) {
    sig.signaturePad.set('canvasWidth', container.nativeElement.clientWidth);
    sig.signaturePad.set('canvasHeight', container.nativeElement.clientHeight);
  }

  public setOptions() {
    this.sigs.first.signaturePad.set('penColor', 'rgb(0, 0, 0)');
    this.secondSig.signaturePad.set('penColor', 'rgb(0, 0, 0)');

    this.sigs.first.signaturePad.set('backgroundColor', 'rgb(255, 255, 255)');
    this.secondSig.signaturePad.set('backgroundColor', 'rgb(255, 255, 255)');
    this.sigs.first.signaturePad.clear();
    this.secondSig.signaturePad.clear();
  }

  public submit() {
    console.log('CAPTURED SIGS:');
    console.log(this.sigs.first.signature);
    localStorage.setItem('signature1', this.sigs.first.signature);
    console.log(this.secondSig.signature); 
    localStorage.setItem('signature2', this.secondSig.signature);

  }

  public clear() {
    this.sigs.first.clear();
    this.secondSig.clear();

  }


}
