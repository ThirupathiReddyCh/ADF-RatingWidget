
## Alfresco ADF Rating Application Example

## Prerequisites

Before you start using this development framework, make sure you have installed all required software and done all the
necessary configuration.

## Getting Started

You can install an ADF application using [ADF Documentation](https://community.alfresco.com/docs/DOC-4595-getting-started-with-alfresco-application-development-framework).

### Step 1 :
 Create a folder /components/rating in components package. add the following files in rating folder:

 * rating.component.ts
 * rating.component.css
 * rating-dailog.component.html
 * rating-dailog.component.ts
 * rating-UI.html
 
 ### Step 2 :
 
  import {RatingComponent} from './components/rating/rating.component';
  
  import {RatingDailog} from './components/rating/rating-dailog.component';
  
  Add the above two import statements in the **app.module.ts** file
  
  ### Step 3 :
  
  Add *RatingDailog, RatingComponent* to declarations in **app.module.ts** files:

  declarations: [
        AppComponent,
        
         ...
         
         ...
         
        RatingDailog,
        
        RatingComponent
    ],
    
## How to use

To get it working simply add this block of code to your view (app.component.html):

  <rating-UI></rating-UI>
  
  Ex:
   <md-menu #appMenu="mdMenu">
     ...
     ...
    </md-menu>
    <rating-UI></rating-UI>
</md-toolbar>
<router-outlet></router-outlet>

 For more advanced functionality you can add a couple attributes:

## Customization

You can easily add your own star style via css. You can use the star-width and star-height attributes to make the 'stars' bigger if necessary.

<style>
	.custom.ngrateit .ngrateit-star{
		background-image: url('custom.png');
	}
</style>
<ng-rate-it ng-model="model.custom" class="custom"></ng-rate-it>
## Release Note:

V4.0.0

BREAKING: The callback function binding has changed form two-way to method binding. This will allow you to pass your own variables to the callback function AND the current rating is passed in the rating parameter:
<ng-rate-it ng-model="model.basic" rated="myCallback(rating, 'Your own var')"></ng-rate-it>
$scope.myCallback = function (rating, cusotmVar) {
	console.log(rating, customVar);
}
To upgrade from v3 to v4, just add () after your function name.

V3.0.0

BREAKING: The over callback is removed.
BREAKING: If you're using your own template, you need to update it.
Template and CSS file are refactored in order to support mobile divices.
Moved calculations from template to controller.
