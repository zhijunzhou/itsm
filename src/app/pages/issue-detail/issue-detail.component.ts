import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { JIRAService } from '../../services/jira.service';

@Component({
    selector: 'app-issue-detail',
    templateUrl: './issue-detail.component.html'
})
export class IssueDetailComponent implements OnInit, OnDestroy {
    private key: number = 0;
    private sub: any;
    private issue: any;

    constructor(
        private route: ActivatedRoute,
        private jiraServ: JIRAService,
        private breadServ: BreadcrumbService
    ) {

    }

    public ngOnInit() {
        // when calling routes change
        let idkey = 'key';
        this.sub = this.route.params.subscribe((data) => {
            this.key = data[idkey];
            // changing header
            this.breadServ.set({
                description: this.key,
                display: true,
                levels: [
                    {
                        icon: 'dashboard',
                        link: ['/'],
                        title: 'Home'
                    },
                    {
                        icon: 'clock-o',
                        link: ['/issue/' + this.key],
                        title: 'Issue ' + this.key
                    }
                ]
            });

            this.jiraServ.getIssue(this.key)
                .subscribe(
                (result) => {
                    this.issue = result;
                    console.log(result);
                },
                (err) => { console.log(err); },
                () => { console.log('Completed'); }
                );

        });

    }

    public ngOnDestroy() {
        this.sub.unsubscribe();
        this.breadServ.clear();
        this.route = null;
    }
}
