import { Component } from '@angular/core';
import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private popup: Popup) { }

  showPopup() {
    this.popup.show();
  }
}
