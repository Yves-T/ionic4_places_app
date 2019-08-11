import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
    constructor(private router: Router, private navCtrl: NavController) {}

    onBookPlace() {
        // two ways of going back ...
        // 1. using the router
        // this.router.navigateByUrl('/places/tabs/discover');
        // or
        // 2. using the navController
        this.navCtrl.navigateBack('/places/tabs/discover');
    }

    ngOnInit(): void {}
}
