import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  linkList = [
    {
      to: '/',
      label: 'Artwork',
      icon: PrimeIcons.IMAGES,
    },
    {
      to: '/crypto',
      label: 'Crypto',
      icon: PrimeIcons.MONEY_BILL,
    },
  ];
}
