import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
    export class HttpService{
        constructor(
            private http: HttpClient
        ){

        }
        getRepos(): Promise<any>{
             return this.http.get('https://services-prod.worldoffice.cloud/').toPromise();
        }

    }