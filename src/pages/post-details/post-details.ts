import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
/**
 * Generated class for the PostDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html',
})
export class PostDetailsPage {

  selectedItem: any;
  date_post: any;
  
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private socialSharing: SocialSharing, private youtube: YoutubeVideoPlayer) {
  
  	this.selectedItem = navParams.get('item');
  	this.date_post = moment(this.selectedItem.date, moment.ISO_8601).format('LLLL');

  }

  smsShare() {
    this.socialSharing.shareViaTwitter('this.selectedItem.title.rendered', 'selectedItem._embedded["wp:featuredmedia"][0].source_url', 'this.selectedItem.link').then(() => {
      console.log("shareViaTwitter: Success");
    }).catch(() => {
      console.error("shareViaTwitter: failed");
    });
  }

  whatsappShare() {
    this.socialSharing.shareViaWhatsApp('this.selectedItem.title.rendered', 'selectedItem._embedded["wp:featuredmedia"][0].source_url', 'this.selectedItem.link').then(() => {
      console.log("shareViaWhatsApp: Success");
    }).catch(() => {
      console.error("shareViaWhatsApp: failed");
    });
  }

  facebookShare() {
    this.socialSharing.shareViaFacebook('this.selectedItem.title.rendered', 'selectedItem._embedded["wp:featuredmedia"][0].source_url', 'this.selectedItem.link').then(() => {
      console.log("shareViaFacebook: Success");
    }).catch(() => {
      console.error("shareViaFacebook: failed");
    });
  }

 	
  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailsPage');
    this.viewCtrl.showBackButton(false); 
  }

  cancel() {
    this.navCtrl.pop(); 
  } 

}
