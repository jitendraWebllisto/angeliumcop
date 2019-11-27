import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { XmallComponent } from './component/xmall/xmall.component';
import { XcomicComponent } from './component/xcomic/xcomic.component';
import { XschoolComponent } from './component/xschool/xschool.component';
import { AuthGuard } from './service/auth.guard';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
  canActivate: [AuthGuard]
  },
  {path:'xmall',component:XmallComponent,
  canActivate: [AuthGuard]
  },
  {path:'xcomic',component:XcomicComponent,
  canActivate: [AuthGuard]
  },
  {path:'xschool',component:XschoolComponent,
  canActivate: [AuthGuard]  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
