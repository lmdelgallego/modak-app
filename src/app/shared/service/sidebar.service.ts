import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private _showSideBar: boolean = true;

  get showSideBar(): boolean {
    return this._showSideBar;
  }

  toggleSidebar(): void {
    this._showSideBar = !this._showSideBar;
  }
}
