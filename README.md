
## Alfresco ADF Rating Application Example

## Prerequisites

Before you start using this development framework, make sure you have installed all required software and done all the
necessary configuration.

## Getting Started

You can install an ADF application using [ADF Documentation](https://community.alfresco.com/docs/DOC-4595-getting-started-with-alfresco-application-development-framework).

### Step 1 :
 Create a folder *rating* in ..app//components/rating package. add the following files in rating folder:
 
 * rating.component.ts
 * rating.component.css
 * rating-dailog.component.html
 * rating-dailog.component.ts
 * rating-UI.html
 
 [Download Files Here](https://github.com/ThirupathiReddyCh/ADF-RatingWidget/tree/master/app/components/rating)
 
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
    
### Step 4: Customization in REST Service

You can easily add your own REST-Service via *rating.component.ts* file.

 private myUrl = 'http://localhost:2017/RESTfulExample/rest/ratingService';    
    
### Step 5 : How to use

To get it working simply add this line of code to your view (app.component.html):

  \<rating-UI> \</rating-UI>
  
 *You can see the rating Widget like below.*
 
![alt text](https://github.com/ThirupathiReddyCh/ADF-RatingWidget/blob/master/ratingImage.png)

