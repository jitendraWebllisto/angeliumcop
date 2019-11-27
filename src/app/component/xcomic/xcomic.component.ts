import { Component, OnInit } from '@angular/core';
​import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-xcomic',
  templateUrl: './xcomic.component.html',
  styleUrls: ['./xcomic.component.css']
})
export class XcomicComponent implements OnInit {

    
    constructor(private spinner: NgxSpinnerService ) { }

  ngOnInit() {
    this.spinner.show(); 
   setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 5000);
  }

}
