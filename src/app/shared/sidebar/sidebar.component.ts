import { Component, HostListener } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { SidebarService } from '../service/sidebar.service';

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
      to: '/movies',
      label: 'movies',
      icon: PrimeIcons.TICKET,
    },
  ];

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (event.target.id !== 'sidebar-toggle') {
      this.service.toggleSidebar();
    } else {
      return;
    }
  }

  constructor(private service: SidebarService) {}
}
