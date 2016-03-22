import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Album} from './model.album';
import {Injectable} from 'angular2/core'; 
import 'rxjs/Rx';

@Injectable()
export class AlbumService {
    
    constructor(private http: Http) {
        console.log("Created Album Service");
    }
    
    getAll() : Observable<Album> {
        
        
        var response = this
                        .http
                        .get('http://jsonplaceholder.typicode.com/albums')
            
        console.log(response);
        
        return response.map(x => x.json());
    }
    
}