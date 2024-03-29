import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationcenterComponent } from './user/donationcenter/donationcenter.component';
import { ProfileComponent  as UserProfileComponent} from './user/profile/profile.component';
import { ProfileComponent as AdminProfileComponent } from './admin/profile/profile.component'
import { NgbPaginationModule, NgbAlertModule, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StartComponent } from './start/start.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UsersTableComponent } from './admin/users-table/users-table.component';
import { QuestionareComponent } from './user/questionare/questionare.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth-guard.service';
 const routes: Routes = [
      {path:'' , component:StartComponent},
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      { path: 'user', component:UserHomeComponent ,canActivate: [AuthGuard] ,data:{expectedRole:'USER'}},
      {path :'users', component:UsersTableComponent,canActivate: [AuthGuard] },
      { path: 'admin', component:AdminHomeComponent,canActivate: [AuthGuard] ,data:{expectedRole:'STAFF'}},
      { path: 'user/profile', component:UserProfileComponent  ,canActivate: [AuthGuard]},
      { path: 'admin/profile', component:AdminProfileComponent ,canActivate: [AuthGuard]},
      { path: 'centers', component:DonationcenterComponent},  
      { path: 'user/donation-centers', component:DonationcenterComponent},  
      {path: 'user/questionare', component:QuestionareComponent, canActivate: [AuthGuard]},
      // { path: '',   redirectTo: '/profile', pathMatch: 'full' }, 
      { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
