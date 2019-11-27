import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticlesModule } from 'angular-particle';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule,} from '@angular/material/table';
import { MatFormFieldModule ,MatInputModule } from '@angular/material';
import { XmallComponent } from './component/xmall/xmall.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import {MatButtonModule} from '@angular/material/button';
import { XcomicComponent } from './component/xcomic/xcomic.component';
import { XschoolComponent } from './component/xschool/xschool.component';
import { LoaderComponent } from './component/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { NgxSpinnerModule } from "ngx-spinner";
import { ApiService } from './service/api.service';
import { AuthGuard } from './service/auth.guard';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    XmallComponent,
    XcomicComponent,
    XschoolComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,ReactiveFormsModule,
    FormsModule,HttpClientModule,BrowserAnimationsModule,
    MatTableModule,MatFormFieldModule ,MatInputModule,MatButtonModule,
    MatProgressSpinnerModule,NgxTypedJsModule,NgxSpinnerModule,
    ToastrModule.forRoot(),
    DeviceDetectorModule.forRoot()
  ],
  providers: [ApiService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
