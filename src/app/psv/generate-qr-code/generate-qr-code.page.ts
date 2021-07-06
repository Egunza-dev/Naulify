import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-generate-qr-code',
  templateUrl: './generate-qr-code.page.html',
  styleUrls: ['./generate-qr-code.page.scss'],
})
export class GenerateQrCodePage implements OnInit {

  createdCode = null;
  display = false;
  href : string;
  qrData = JSON.parse(localStorage.getItem('user')).uid;

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  createCode(){
    this.createdCode = this.qrData;
    this.display = true;
  }

  downloadImage(){
    this.href = document.getElementsByTagName('img')[0].src;
  }

}
