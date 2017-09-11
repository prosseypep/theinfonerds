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
import { HealthPage } from '../pages/health/health';
import { FashionPage } from '../pages/fashion/fashion';



@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Entertainment Gists', component: EntertainmentGistsPage},
      { title: 'News', component: NewsPage },
      { title: 'Music', component: MusicPage },
      { title: 'Videos', component: VideosPage },
      { title: 'Sports', component: SportsPage },
      { title: 'Events', component: EventsPage },
      { title: 'Editorials', component: EditorialsPage },
      { title: 'Health', component: HealthPage },
      { title: 'Fashion', component: FashionPage }
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

