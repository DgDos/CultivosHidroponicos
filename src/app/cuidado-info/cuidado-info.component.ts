import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cuidado-info',
  templateUrl: './cuidado-info.component.html',
  styleUrls: ['./cuidado-info.component.css']
})
export class CuidadoInfoComponent implements OnInit {

  public show = false;
  public buttonName: any = 'Show';
  public info = 'esta es la info que debe llegar';

  ngOnInit() {  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }

}
