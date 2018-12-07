import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
@Component({
  selector: 'app-material-slider',
  templateUrl: './material-slider.component.html',
  styleUrls: ['./material-slider.component.css']
})
export class MaterialSliderComponent implements OnInit {
  surverForm: FormGroup;
  //getter dirty check
  get selectedColorRed() {
    return this.surverForm!.get('redSlider')!.value;
  }

  get selectedColorGreen() {
    return this.surverForm!.get('greenSlider')!.value;
  }

  get selectedColorBlue() {
    return this.surverForm!.get('blueSlider')!.value;
  }

  // 組合顏色樣式
  get selectedColorStyle() {
    return `rgb(${this.selectedColorRed}, ${this.selectedColorGreen}, ${this.selectedColorBlue})`;
  }
  constructor() {
    this.surverForm = new FormGroup({
      redSlider: new FormControl(0, [Validators.min(0), Validators.max(255)]),
      greenSlider: new FormControl(0, [Validators.minLength(0), Validators.maxLength(255)]),
      blueSlider: new FormControl(0, [Validators.minLength(0), Validators.maxLength(255)])
    });
  }

  ngOnInit() {
  }

}
