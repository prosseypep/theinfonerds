import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EntertainmentGistsPage } from '../pages/entertainment-gists/entertainment-gists';
import { NewsPage } from '../pages/news/news';
import { MusicPage } from '../pages/music/music';
import { VideosPage } from '../pages/videos/videos';
import { SportsPage } from '../pages/sports/sports';
import { EventsPage } from '../pages/events/events';
import { EditorialsPage } from '../pages/editorials/editorials';
import { HealthPage } from '../pages/health/health';
import { FashionPage } from '../pages/fashion/fashion';
import { PostDetailsPage } from '../pages/post-details/post-details';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EntertainmentGistsPage,
    NewsPage,
    MusicPage,
    VideosPage,
    SportsPage,
    EventsPage,
    EditorialsPage,
    HealthPage,
    FashionPage,
    PostDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EntertainmentGistsPage,
    NewsPage,
    MusicPage,
    VideosPage,
    SportsPage,
    EventsPage,
    EditorialsPage,
    HealthPage,
    FashionPage,
    PostDetailsPage
  ],
  providers: [
    StatusBar,
    SocialSharing,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
