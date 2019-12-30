import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { TimelineModule } from './timeline/timeline.module';
import { environment } from '../environments/environment';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SignUpComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    NgbModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
