import { PostsComponent } from './pages/posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './includes/header/header.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './pages/users/users.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { FriendRequestsComponent } from './pages/friend-requests/friend-requests.component';
import { FeedComponent } from './pages/feed/feed.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contact', component: ContactUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: MainComponent,
  children : [
    { path: '', component: PostsComponent },
    { path: 'friends', component: FriendsComponent },
    { path: 'requests', component: FriendRequestsComponent },
    { path: 'feed', component: FeedComponent },
   
  ]},
  // { path: 'main', component: HeaderComponent },
  { path: 'logout', component: HomeComponent },
 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }