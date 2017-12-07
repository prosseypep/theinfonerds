import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { IonicStorageModule } from '@ionic/storage';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EntertainmentGistsPage } from '../pages/entertainment-gists/entertainment-gists';
import { NewsPage } from '../pages/news/news';
import { MusicPage } from '../pages/music/music';
import { VideosPage } from '../pages/videos/videos';
import { SportsPage } from '../pages/sports/sports';
import { EventsPage } from '../pages/events/events';
import { EditorialsPage } from '../pages/editorials/editorials';
import { FashionPage } from '../pages/fashion/fashion';
import { MovietalkPage } from '../pages/movietalk/movietalk';
import { InterviewsPage } from '../pages/interviews/interviews';
import { LyricsPage } from '../pages/lyrics/lyrics';
import { RelationshipPage } from '../pages/relationship/relationship';
import { StoriesPage } from '../pages/stories/stories';
import { ContactusPage } from '../pages/contactus/contactus';
import { AboutusPage } from '../pages/aboutus/aboutus';
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
    FashionPage,
    MovietalkPage,
    InterviewsPage,
    LyricsPage,
    RelationshipPage,
    StoriesPage,
    ContactusPage,
    AboutusPage,
    PostDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    FashionPage,
    MovietalkPage,
    InterviewsPage,
    LyricsPage,
    RelationshipPage,
    StoriesPage,
    ContactusPage,
    AboutusPage,
    PostDetailsPage
  ],
  providers: [
    StatusBar,
    SocialSharing,
    YoutubeVideoPlayer,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
