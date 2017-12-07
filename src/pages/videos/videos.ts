import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { PostDetailsPage } from '../post-details/post-details';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the VideosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

	url: string = 'http://www.theinfonerds.com/wp-json/wp/v2/posts?_embed&categories=6';
	items: any;

   constructor( private http: Http, public navCtrl: NavController, private nav: NavController, private loadingCtrl: LoadingController ) {
  }

 	ionViewDidLoad() {
		let loading = this.loadingCtrl.create({
		    content: 'Please wait...'
		  });
		loading.present();
		this.http.get( this.url )
	    .map(res => res.json())
	    .subscribe(data => {
	      // we've got back the raw data, now generate the core schedule data
	      // and save the data for later reference
	       this.items = data.map(item => {
	      	item.content.rendered = item.content.rendered.replace(/<(\/?|\!?)(h1)>/g, "");
					item.title.rendered = item.title.rendered.replace(/(&nbsp;|<([^>]+)>)/ig, "");
					item.excerpt.rendered = item.excerpt.rendered.replace(/(&nbsp;|<([^>]+)>)/ig, "");
	      	return item;
				});
	    	loading.dismiss();
	    },
	    err => { loading.dismiss(); 
	    });

	}

	itemTapped(event, item) {
		this.nav.push(PostDetailsPage, {
		  item: item
		});
	}
}
