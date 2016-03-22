import {Component} from 'angular2/core';
import {AlbumService} from './services.album';
import {Album} from './model.album';

@Component({
    templateUrl: 'app/app.component.html',
    selector: 'app'
})
export class AppComponent {
    
    albums: Album[];
    
    constructor(public albumService: AlbumService) {
        albumService.getAll().subscribe(albums => this.albums = albums);
    }
    
}