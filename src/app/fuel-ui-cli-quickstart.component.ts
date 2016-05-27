import { Component } from '@angular/core';
import {DATE_PICKER_PROVIDERS, DateRange, Collapse} from 'fuel-ui/fuel-ui';

@Component({
  moduleId: module.id,
  selector: 'fuel-ui-cli-quickstart-app',
  templateUrl: 'fuel-ui-cli-quickstart.component.html',
  styleUrls: ['fuel-ui-cli-quickstart.component.css'],
  directives: [DATE_PICKER_PROVIDERS, Collapse]
})
export class FuelUiCliQuickstartAppComponent {
  title = 'fuel-ui-cli-quickstart works!';
  name: string = 'World';
  collapsed: boolean = false;
  duration: number = 500;
  
  dateRangePickerValue: DateRange;
  
  datePickerValueChange(eventValue: any){
      this.dateRangePickerValue = eventValue;
  }
}
