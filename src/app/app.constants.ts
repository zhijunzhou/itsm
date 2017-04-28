import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server: string = 'http://itsmpoc6341.cloudapp.net:7777';
    public issuesApiUrl = this.server + '/v1/issues/';
    public subTasksApiUrl = this.server + '/v1/subtasks/';
    public apiUrl: string = 'php-crud-api/api.php/';
    public serverWithApiUrl = this.server + this.apiUrl;
}
