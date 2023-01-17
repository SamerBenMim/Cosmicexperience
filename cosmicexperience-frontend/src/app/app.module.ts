import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './header/header.component';  
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { EventComponent } from './upcoming-events/event/event.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ProfileinfoComponent } from './profile/profileinfo/profileinfo.component';
import { UpcomingeventsComponent } from './profile/upcomingevents/upcomingevents.component';
import { PasteventsComponent } from './profile/pastevents/pastevents.component';
import { LayoutComponent } from './profile/upcomingevents/layout/layout.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { CreateEventComponent } from './profile/create-event/create-event.component';
import { EventsComponent } from './upcoming-events/events/events.component';
import { PageComponent } from './upcoming-events/events/page/page.component';

import { FilterComponent } from './upcoming-events/events/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent ,
    ToolbarComponent,
    SidenavComponent,
    FooterComponent,
    UpcomingEventsComponent,
    EventComponent,
    ErrorPageComponent,
    ProfileComponent,
    ProfileinfoComponent,
    UpcomingeventsComponent,
    PasteventsComponent,
    LayoutComponent,
    EditProfileComponent,
    CreateEventComponent,
    EventsComponent,
    PageComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }