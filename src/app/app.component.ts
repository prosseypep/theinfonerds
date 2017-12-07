import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{ title: string, component: any, icon: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      { title: 'Home News', component: HomePage, icon: 'home' },
      { title: 'Entertainment Gists', component: EntertainmentGistsPage, icon: 'recording' },
      { title: 'News', component: NewsPage, icon: 'globe' },
      { title: 'Music', component: MusicPage, icon: 'musical-notes' },
      { title: 'Videos', component: VideosPage, icon: 'videocam' },
      { title: 'Sports', component: SportsPage, icon: 'football' },
      { title: 'Events', component: EventsPage, icon: 'calender' },
      { title: 'Editorials', component: EditorialsPage, icon: 'clipboard' },
      { title: 'Fashion', component: FashionPage, icon: 'shirt'},
      { title: 'Movie Talk', component: MovietalkPage, icon: 'videocam' },
      { title: 'Interviews', component: InterviewsPage, icon:'microphone' },
      { title: 'Lyrics', component: LyricsPage, icon: 'musical-note' },
      { title: 'Relationship & Romance', component: RelationshipPage, icon: 'rose' },
      { title: 'Stories', component: StoriesPage, icon: 'camera' },
      { title: 'About Us', component: AboutusPage, icon: 'at'},
      { title: 'Contact Us', component: ContactusPage, icon: 'contacts'}
    ]; 


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

