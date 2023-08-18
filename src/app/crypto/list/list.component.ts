import { Component } from '@angular/core';
import { CryptoServiceService } from '../service/crypto-service.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class CryptoListComponent {
  cryptoData: Array<any> = [];
  constructor(private service: CryptoServiceService) {
    this.service.getCoinData().subscribe((res) => {
      this.cryptoData = res as Array<any>;
    });
  }
}
