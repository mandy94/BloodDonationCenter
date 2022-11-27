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

 const routes: Routes = [
      {path:'' , component:StartComponent},
      { path: 'user', component: UserHomeComponent },
      {path :'users', component: UsersTableComponent },
      { path: 'admin', component: AdminHomeComponent},
      { path: 'user/profile', component: UserProfileComponent },
      { path: 'admin/profile', component: AdminProfileComponent},
      { path: "centers", component: DonationcenterComponent},  
      // { path: '',   redirectTo: '/profile', pathMatch: 'full' }, 
      { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    NgbPaginationModule,
    NgbAlertModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
