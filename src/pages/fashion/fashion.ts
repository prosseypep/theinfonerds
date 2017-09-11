import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the FashionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-fashion',
  templateUrl: 'fashion.html',
})
export class FashionPage {

	url: string = 'http://www.theinfonerds.com/wp-json/wp/v2/posts?_embed&categories=3';
	items: any;

   constructor( private http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

 	ionViewDidEnter() {
		this.http.get( this.url )
	    .map(res => res.json())
	    .subscribe(data => {
	      // we've got back the raw data, now generate the core schedule data
	      // and save the data for later reference
	      this.items = data;
	    });
	}

	ionViewDidLoad() {
    console.log('ionViewDidLoad EditorialsPage');
  	}
}