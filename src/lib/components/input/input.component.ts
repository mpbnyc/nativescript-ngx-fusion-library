import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import{ IconModel } from '../../models/icon/icon.model';
import{ InputModel } from '../../models/input/input.model';
import { CfCoreComponent } from '../core/core.component';

@Component({
  selector: "cf-input",
  templateUrl: "./lib/components/input/input.component.html"
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