import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { masterFirebaseConfig } from './api-keys';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { ManagerComponent } from './manager/manager.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { PositionPipe } from './position.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IndexComponent,
    PlayerPageComponent,
    ManagerComponent,
    PlayerListComponent,
    EditPlayerComponent,
    PositionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
