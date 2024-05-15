import {Component, OnInit} from "@angular/core";
import {EstimationOptionsInterface, WeekdayInterface} from "../../interfaces/todo.interface";
import {Constants} from "../../constants/constants";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DropdownChangeEvent} from "primeng/dropdown";

@Component({
  selector: 'app-create',
  templateUrl: 'create.component.html',
  styleUrls: ['create.component.scss']
})

export class CreateComponent implements OnInit {

  createForm: FormGroup;

  estimationOptions: EstimationOptionsInterface[] = [
    {label: 'Today', value: Constants.estimationOptions.TODAY},
    {label: 'This week', value: Constants.estimationOptions.THIS_WEEK},
    {label: 'This month', value: Constants.estimationOptions.THIS_MONTH},
  ];

  weekdays: WeekdayInterface[] = [
    {label: 'Monday', value: Constants.weekdays.MONDAY},
    {label: 'Tuesday', value: Constants.weekdays.TUESDAY},
    {label: 'Wednesday', value: Constants.weekdays.WEDNESDAY},
    {label: 'Thursday', value: Constants.weekdays.THURSDAY},
    {label: 'Friday', value: Constants.weekdays.FRIDAY},
    {label: 'Saturday', value: Constants.weekdays.SATURDAY},
    {label: 'Sunday', value: Constants.weekdays.SUNDAY},
  ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      estimationOption: [this.estimationOptions[0].value, Validators.required],
    })
  }

  optionChange(event: DropdownChangeEvent) {
    if (event.value === Constants.estimationOptions.THIS_WEEK) {
      this.createForm.removeControl('monthday');
      this.createForm.addControl('weekday', this.fb.control(this.weekdays[0].value, [Validators.required]));
    } else if (event.value === Constants.estimationOptions.THIS_MONTH) {
      this.createForm.removeControl('weekday');
      this.createForm.addControl('monthday', this.fb.control(null, [Validators.required]));
    } else {
      this.createForm.removeControl('weekday');
      this.createForm.removeControl('monthday');
    }
  }
}
