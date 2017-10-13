import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Http } from '@angular/http';
@Component({
    selector: 'rating-UI',
    templateUrl: './rating-UI.html',
    styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
    searchTerm: string = '';
    name: string;
    ratingValue = '';
    showDialog = false;
    rateDiv=true;
    ratedDiv=false;
    answer1: string;
    message:string;
    answer2: string;
   // private myUrl = 'http://localhost:2017/IPEMS/task/saveUserRating';
   private myUrl = 'http://localhost:2017/RESTfulExample/rest/ratingService/Good/yes/1/notbad';
      seasons = [
        'Yes',
        'No',
        'na'
      ];
      recommendList = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10'
      ];
  
      constructor(private http: Http) { }
      ngOnInit()  {
        this.rateDiv=true;
      }

    getRating(rating: string) {
        this.ratingValue = rating;  
        this.rateDiv=false;
        this.ratedDiv=true;
        }

    submitRating() {
        this.rateDiv=false;
        this.ratedDiv=false;
    this.http.get(this.myUrl).toPromise()
    .then(response => this.message = 'Rating saved Successfully');
      } 
}
