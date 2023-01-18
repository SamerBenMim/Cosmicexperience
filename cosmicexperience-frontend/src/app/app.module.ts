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
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { OurMissionComponent } from './about-us/our-mission/our-mission.component';
import { WhoAreWeComponent } from './about-us/who-are-we/who-are-we.component';
import { QuoteComponent } from './quote/quote.component';
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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';
import { FilterComponent } from './upcoming-events/events/filter/filter.component';
import { EventsService } from './upcoming-events/events.service';
import { TokenInterceptor } from './interceptors/login.interceptor';
import { DefaultImagePipe } from './pipe/default-image.pipe';

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
    QuoteComponent,
    ErrorPageComponent,
    WhoAreWeComponent,
    OurMissionComponent,
    AboutUsComponent,
    ProfileComponent,
    ProfileinfoComponent,
    UpcomingeventsComponent,
    PasteventsComponent,
    LayoutComponent,
    EditProfileComponent,
    CreateEventComponent,
    EventsComponent,
    PageComponent,
    FilterComponent,
    DefaultImagePipe
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
  providers: [
    EventsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    LoginGuard,
    LogoutGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }