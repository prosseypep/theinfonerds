import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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
 

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
  
  	this.selectedItem = navParams.get('item');
  	
  }

  smsShare() {
    this.socialSharing.shareViaTwitter('this.selectedItem.title.rendered', 'selectedItem._embedded["wp:featuredmedia"][0].source_url', 'this.selectedItem.link').then(() => {
      console.log("shareViaSMS: Success");
    }).catch(() => {
      console.error("shareViaSMS: failed");
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
  }

}
