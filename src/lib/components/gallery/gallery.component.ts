import { Component, ViewChild, Input } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';

@Component({
  selector: "cf-gallery",
  template: `
<StackPanel height="300">  
    <slides pageIndicators="true" loop="true">
        <slide *ngFor="let picture of pictures" class="slide-1">
            <cf-image [url]="picture.url" [label]="picture.caption"></cf-image>
        </slide>
    </slides>
</StackPanel>
  `,
  styles: [
`
.slide-indicator-inactive{
    background-color: #fff;
    opacity : 0.4;
    width : 10;
    height : 10;
    margin-left : 2.5;
    margin-right : 2.5;
    margin-top : 0;
    border-radius : 5;
}

.slide-indicator-active{
    background-color: #fff;
    opacity : 0.9;
    width : 10;
    height : 10;
    margin-left : 2.5;
    margin-right : 2.5;
    margin-top : 0;
    border-radius : 5;
}
`
  ]
})
export class CfGalleryComponent {
  @Input() pictures: [{
    url: string,
    caption: string
  }];
  constructor() {
  }
}
