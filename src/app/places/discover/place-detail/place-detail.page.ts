import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { ThrowStmt } from '@angular/compiler';
import { PlacesService } from '../../places.service';

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
    place: Place;

    constructor(
        private route: ActivatedRoute,
        private navCtrl: NavController,
        private modalCtrl: ModalController,
        private placeService: PlacesService
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('placeId')) {
                this.navCtrl.navigateBack('places/tabs/discover');
                return;
            }
            this.place = this.placeService.getPlace(paramMap.get('placeId'));
        });
    }

    onBookPlace() {
        // two ways of going back ...
        // 1. using the router
        // this.router.navigateByUrl('/places/tabs/discover');
        // or
        // 2. using the navController
        this.modalCtrl
            .create({
                component: CreateBookingComponent,
                componentProps: { selectedPlace: this.place },
            })
            .then(modalE => {
                modalE.present();
                return modalE.onDidDismiss();
            })
            .then(resultData => {
                console.log(resultData.data, resultData.role);
                if (resultData.role === 'confirm') {
                    console.log('BOOKED!');
                }
            });
    }
}
