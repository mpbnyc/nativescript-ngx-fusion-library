import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import{ IconModel } from '../../models/icon/icon.model';
import{ InputModel } from '../../models/input/input.model';
import { CfCoreComponent } from '../core/core.component';

@Component({
  selector: "cf-input",
  template: `
<StackLayout>
    <StackLayout class="container" orientation="horizontal" borderBottomWidth="2" borderBottomColor="blue" margin="0 5 0 5">
        <cf-icon class="lower" [cfIcon]="myFusionIcon" *ngIf="iconPosition==='left'"></cf-icon>
        <TextField width="100%" [(ngModel)]="valueModel" [hint]="placeholder" [maxLength]="cfInput.maxlength" backgroundColor="transparent" borderColor="transparent" paddingBottom="0" borderBottomWidth="0" [width]="iconPosition === 'right' ? '88%' : '100%'">
            <FormattedString [maxLength]="cfInput.maxlength">
                <Span [maxLength]="cfInput.maxlength"></Span>
            </FormattedString>
        </TextField>
        <cf-icon [cfIcon]="myFusionIcon" *ngIf="iconPosition==='right'"></cf-icon>
    </StackLayout>
</StackLayout>  
  `
})
export class CfInputComponent extends CfCoreComponent {
  @Input() cfInput: InputModel;
  @Output() onClick = new EventEmitter();
  valueModel: string;
  iconPosition: string = 'left';
  hint: string = "whatever";
  placeholder: string = "here is stuff";
  maxlength: number = 10;
  myFusionIcon = new IconModel ({
    name: 'mdi-done',
    size: 40,
    value: 'whatever'
  });
}