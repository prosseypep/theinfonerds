import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
/**
 * Generated class for the EditorialsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-editorials',
  templateUrl: 'editorials.html',
})

export class EditorialsPage {
	url: string = 'http://www.theinfonerds.com/wp-json/wp/v2/category/editorials/posts';
	items: any;

	constructor( private http: Http, public navCtrl: NavController) {}

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