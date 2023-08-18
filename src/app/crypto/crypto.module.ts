import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoListComponent } from './list/list.component';
import { CryptoComponent } from './crypto.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptoRoutingModule } from './crypto-routing.module';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [CryptoListComponent, CryptoComponent],
  imports: [CommonModule, HttpClientModule, CryptoRoutingModule, TableModule],
})
export class CryptoModule {}
