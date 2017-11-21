import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { PostDetailsPage } from '../post-details/post-details';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
	url: string = 'http://www.theinfonerds.com/wp-json/wp/v2/posts?_embed';
	items: any;
	
	constructor( private http: Http, public navCtrl: NavController, private nav: NavController, public loadingCtrl: LoadingController ) {
		
		
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
				this.items = data;
				console.log(data);
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