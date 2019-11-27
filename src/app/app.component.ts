import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  particleStyle: object = {};
  particleValue: boolean = true;
  particleParams: object = {};
  particlewidth: number = 100;
  particleheight: number = 100;

  ngOnInit() {
    this.particleStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'background-image': 'url("../assets/images/nature.jpg")',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'background-position': '50% 50%',
      'z-index': '-1'
    };

    this.particleParams = {
      'particles': {
        'number': {
          'value': 55,
        },
        'color': {
          'value': '#ffffff',
        },
        'shape':{
          'type': 'polygon',
          'stroke': {
            "width": 2,
            'color': '#ff9800'
        },
        'polygon': {
            'nb_sides': 6
        },
        },
        'opacity': {
          'value': 1,
          'random': false,
        },
        'size': {
          'value': 3,
          'random': true,
        },
        'line_linked': {
          'enable': true,
          'distance': 150,
          'color': '#ffffff',
          'opacity': 0.9,
          'width': 1,
        },
        'move': {
          'enable': true,
          'speed': 3,
          'direction': 'none',
          'random': false,
          'straight': false,
          'out_mode': 'bounce',
        },
      },
      'retina_detect': true,
    };
  }
}