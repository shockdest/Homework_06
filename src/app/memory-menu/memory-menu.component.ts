import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-memory-menu',
  templateUrl: './memory-menu.component.html',
  styleUrls: ['./memory-menu.component.scss']
})
export class MemoryMenuComponent implements OnInit {

  cardNumberSelectArray = [];
  @ViewChild("optionValue") optionValue:ElementRef;
  isGame=false;
  

  constructor() { }

  ngOnInit(): void {

    for(let i = 3;i<=10;i++){
      this.cardNumberSelectArray.push(i);
      }
      // console.log(this.cardNumberSelectArray);
  }

  getSelectValue(){
    localStorage.setItem("SelectValue", this.optionValue.nativeElement.value);
    this.isGame =true;
    //console.log(this.optionValue.nativeElement.value);
  }

}