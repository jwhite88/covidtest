import { Directive, Input, OnChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDispayCCLogo]'
})
export class DispayCCLogoDirective implements OnChanges {

  constructor() { }
  @Input() creditCardImg: string;
  @HostBinding('src') imageSource;

  // tslint:disable-next-line: no-unused-expression
  ngOnChanges(): void {
    console.log('hello');
    this.imageSource = '../../assets/blank-white-card.jpg';
    this.test();
  }


  test(): void {
     // this.creditCardImg = this.toString();
    // let arr = this.creditCardImg.match
      if (this.creditCardImg) {
        if (this.creditCardImg.charAt(0) === '4') {
          console.log('VISA');
          this.imageSource = '../../assets/VISA_1.png';
        } else if (this.creditCardImg.charAt(0) === '5') {
          console.log('MasterCard');
          this.imageSource = '../../assets/Mastercard.png';
        // tslint:disable-next-line: max-line-length
        } else if (this.creditCardImg.charAt(0) + this.creditCardImg.charAt(1) === '34' || this.creditCardImg.charAt(0) + this.creditCardImg.charAt(1) === '37') {
          console.log('AMEX');
          this.imageSource = '../../assets/AMEX.png';
        // tslint:disable-next-line: max-line-length
        } else if (this.creditCardImg.charAt(0) + this.creditCardImg.charAt(1) === '30' || this.creditCardImg.charAt(0) + this.creditCardImg.charAt(1) === '36' || this.creditCardImg.charAt(0) + this.creditCardImg.charAt(1) === '39') {
          console.log('Diners');
          this.imageSource = '../../assets/Diners2.jpg';
        // tslint:disable-next-line: max-line-length
        } else if (this.creditCardImg.charAt(0) + this.creditCardImg.charAt(1) === '60' || this.creditCardImg.charAt(0) + this.creditCardImg.charAt(1) === '64' || this.creditCardImg.charAt(0) + this.creditCardImg.charAt(1) === '65') {
          console.log('Discover');
          this.imageSource = '../../assets/Discover.jpg';
        } else {
          console.log('Enter a valid Credit Card Number');
        }
    }
  }
}
