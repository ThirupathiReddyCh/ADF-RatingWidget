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
    feedback: string;
   private myUrl = 'http://localhost:2017/RatingWidgetREST/rest/ratingService';
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

    submitRating(feedback:string) {
        this.rateDiv=false;
        this.ratedDiv=false;
        this.feedback=feedback;
    this.http.get(this.myUrl+'/'+this.ratingValue+'/'+this.answer1+'/'+this.answer2+'/'+this.feedback).toPromise()
    .then(response => this.message = 'Rating Submitted Successfully');
      } 
}
