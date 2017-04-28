export class Pager {
    public totalResult: number;
    public resultSet: Array<any>;

    constructor(data: any={}) {
        this.totalResult = data.maxResults;
        this.resultSet = data.issues;
    }
}