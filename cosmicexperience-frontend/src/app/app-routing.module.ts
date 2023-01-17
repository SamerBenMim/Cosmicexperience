import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateEventComponent } from './profile/create-event/create-event.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { EventsComponent } from './upcoming-events/events/events.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent},
  {
    path: 'register',
    component: RegisterComponent,

  },
  { path: 'profile', component: ProfileComponent,
   },
  {
    path: 'editProfile',
    component: EditProfileComponent,
    // canActivate: [LoginGuard],
  },
  {
    path: 'createEvent',
    component: CreateEventComponent,
    // canActivate: [LoginGuard],
  },
  { path: 'events', component: EventsComponent},
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




