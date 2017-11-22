import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { PostDetailsPage } from '../post-details/post-details';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

@Component({
	selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	url: string = 'http://www.theinfonerds.com/wp-json/wp/v2/posts?_embed';
	items: any;
	
	constructor( private http: Http, public navCtrl: NavController, private nav: NavController, public loadingCtrl: LoadingController, public storage: Storage ) {
		
		
	}

	ionViewDidLoad() {
		this.storage.get('home').then(data => {
			if (data) {
				this.items = JSON.parse(data);
				console.log(this.items[0])
				return;
			}
		})
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
				
				this.storage.set('home', JSON.stringify(this.items));
	    	loading.dismiss();
	    },
	    err => { loading.dismiss(); 
	    });

	}

	clearData() {
		this.storage.clear();
	}

	itemTapped(event, item) {
		this.nav.push(PostDetailsPage, {
		  item: item
		});
	}

	 
}