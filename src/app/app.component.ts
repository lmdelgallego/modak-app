import { Component } from '@angular/core';
import { environment } from 'src/environments/enviroment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `modak-app ${environment.production ? 'prod' : 'dev'}`;
}
