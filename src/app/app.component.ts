import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    public myList: any[] = [];
    public recommendationsList: any[] = [];

    constructor(private appService: AppService) {

    }
    ngOnInit() {
        /** fetching data of my list and recommended list */
        this.appService.getMockData().subscribe(
            data => {
                this.myList = data.mylist;
                this.recommendationsList = data.recommendations;
            }, err => {
                console.log(err);
            });
    }

    /** method to add item from remommended list to My list */
    addToMyList(item) {
        let matchTitle = false;
        for (const listItem of this.myList) {
            if (listItem.title === item.title) {
                matchTitle = true;
            }
        }
        /** adds item only if it doesn't already exists */
        if (!matchTitle) {
            this.myList.push(item);
        }
    }
}
