import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticlesModule } from 'angular-particle';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule,} from '@angular/material/table';
import { MatFormFieldModule ,MatInputModule } from '@angular/material';
import { XmallComponent } from './component/xmall/xmall.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { MatButtonModule} from '@angular/material/button';
import { XcomicComponent } from './component/xcomic/xcomic.component';
import { XschoolComponent } from './component/xschool/xschool.component';
import { LoaderComponent } from './component/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxTypedJsModule} from 'ngx-typed-js';
import { NgxSpinnerModule } from "ngx-spinner";
import { ApiService } from './service/api.service';
import { AuthGuard } from './service/auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './component/register/register.component';
import { DashboardModule} from './component/dashboard/dashboard.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'people',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    XmallComponent,
    XcomicComponent,
    XschoolComponent,
    LoaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,NgxIndexedDBModule.forRoot(dbConfig),
    AppRoutingModule,DashboardModule,
    ParticlesModule,ReactiveFormsModule,
    FormsModule,HttpClientModule,BrowserAnimationsModule,
    MatTableModule,MatFormFieldModule ,MatInputModule,MatButtonModule,
    MatProgressSpinnerModule,NgxTypedJsModule,NgxSpinnerModule,
    ToastrModule.forRoot(),
    DeviceDetectorModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ApiService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
