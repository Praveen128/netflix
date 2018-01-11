import {
  Injectable
} from '@angular/core';
import {
  HttpModule,
  Http,
  Response
} from "@angular/http";
import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/observable/throw';
import {
  Subject
} from 'rxjs/Subject';

@Injectable()
export class AppService {
		constructor(private http: Http) {
    
		}
		
		getMockData(){
			return this.http.get('./data/mock-data.json')
			.catch((error: any) => this.handleError(error))
			.map((res: Response) =>  res.json());
			
		}
		handleError(err){
			 return Observable.throw(err);
		}
	
}