import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './user/homepage/homepage.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DonationcenterComponent, OrdinalPipe } from './user/donationcenter/donationcenter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { StartComponent } from './start/start.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { UsersTableComponent } from './admin/users-table/users-table.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserDetailsComponent } from './dialogs/user-details/user-details.component';
import { MatDialogModule,} from '@angular/material/dialog';
import { CreateAppointmentComponent } from './admin/create-appointment/create-appointment.component';
import { AppointmentListComponent } from './admin/create-appointment/appointment-list/appointment-list.component';
import {
  NgxMatDatetimePickerModule, 
  NgxMatNativeDateModule, 
  NgxMatTimepickerModule 
} from '@angular-material-components/datetime-picker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [    
    AppComponent,    
    HomepageComponent,
    ProfileComponent,
    DonationcenterComponent,
    PageNotFoundComponent,
    StartComponent,
    AdminHomeComponent,
    UserHomeComponent,
    OrdinalPipe,
    UsersTableComponent,
    CreateAppointmentComponent,
    AppointmentListComponent,
    
    
  ],
  imports: [
    MatDialogModule,
    MatRadioModule,
    MatIconModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    FlexLayoutModule,
    MatDatepickerModule,
    BrowserModule,
    MatInputModule,
    MatSlideToggleModule,
    AppRoutingModule,
     NgbModule,
     BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
