/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
    selector: 'rating-dailog-component',
    templateUrl: './rating-dailog.component.html',
    styleUrls: ['./rating.component.css'],
    animations: [
        trigger('dialog', [
          transition('void => *', [
            style({ transform: 'scale3d(.3, .3, .3)' }),
            animate(100)
          ]),
          transition('* => void', [
            animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
          ])
        ])
      ]
})
export class RatingDailog {   
    @Input() closable = false;
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
}
