import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {
    private _places: Place[] = [
        new Place(
            'p1',
            'Manhatten Mansion',
            'In the heart of New York City',
            'https://media.nbcsandiego.com/images/652*367/Neighbors_Say_Bright_Pink_Emoji_House_is_Revenge.jpg',
            149.99
        ),
        new Place(
            'p2',
            "L'Amour Toujours",
            'A romantic place in Paris!',
            'http://3.bp.blogspot.com/-FsKeK6ZdLY8/UtGIAPlx-yI/AAAAAAAAApE/vsj4bzjw2ZQ/s1600/DSC_0187.JPG',
            189.99
        )
    ];

    get places() {
        return [...this._places];
    }
    constructor() {}

    getPlace(id: string) {
        return { ...this._places.find(p => p.id === id) };
    }
}
