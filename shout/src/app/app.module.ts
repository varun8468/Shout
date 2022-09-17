import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { UsersComponent } from './pages/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './pages/posts/posts.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { FriendRequestsComponent } from './pages/friend-requests/friend-requests.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ForgotPasswordComponent,
    LoginComponent,
    ContactUsComponent,
    RegisterComponent,
    HomeComponent,
    LogoutComponent,
    UsersComponent,
    PostsComponent,
    FriendsComponent,
    FriendRequestsComponent,
    FeedComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
