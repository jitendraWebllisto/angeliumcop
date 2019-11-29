import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-xmall',
  templateUrl: './xmall.component.html',
  styleUrls: ['./xmall.component.css']
})
export class XmallComponent implements OnInit {
  user = {
    name: 'Jeet',
    age: 24
  };
  deviceInfo = null;
  constructor(private deviceService: DeviceDetectorService,
    private translate: TranslateService) { 
    this.trackFunction();
    translate.setDefaultLang('en');

  }

  ngOnInit() {
  
  }
  
  switchLanguage(language: string) {
    this.translate.use(language);
  }

  trackFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
  }

}
