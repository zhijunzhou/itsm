import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';

@Injectable()
export class JIRAService {

    private headers: Headers;

    constructor(private http: Http, private config: Configuration) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public getIssues(): Observable<any[]> {
        return this.http.get(this.config.issuesApiUrl)
            .map((response: Response) => {
                let data = response.json();
                return data;
            })
            .catch(this.handleError);
    }

    public getIssue(key): Observable<any[]> {
        return this.http.get(this.config.issuesApiUrl + key)
            .map((response: Response) => {
                let data = response.json();
                return data;
            })
            .catch(this.handleError);
    }

    public getSubTasks(): Observable<any[]> {
        return this.http.get(this.config.subTasksApiUrl)
            .map((response: Response) => {
                let data = response.json();
                return data;
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}