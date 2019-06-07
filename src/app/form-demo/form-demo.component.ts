import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  form = [{
    inputValue: ""
  }]

  constructor() { }

  ngOnInit() {
  }

  showResult(event){
    var num = event.target.value
    this.form.length = num
    console.log(num)
  }
  removeInputFiled(i){
    
  }
}
