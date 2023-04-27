import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  // public isActive : boolean = true;

  ngOnInit(): void {
    
  }
  
  // Click(){
    
  //   this.isActive = !this.isActive;
  // }

  public fruits: string[] = [
    "Pommes",
    "Poires",
    "Bananes",
    "Kiwi",
  ];


  public myFirstStr: string ="This is a string";
  public mySecondStr: string ="This is a string";

  public myNum : number = 42;
  public myNegativeNum: number = -42;
  public myDecimal: number = 5.4;

  public myFirstBool : boolean = true;
  public mySecondBool : boolean = false;

  public myNull : null = null;

  public myArray : [] = [];

  public myStrArray: String[] = ["str1", 'str2', `str3`];

  public myObject: {} = {};

  public myJoker: any;

  public myFirstJokerArray: any[] = ["str1", 'str2', `str3`, 42, true, [], {}];
  public mySecondJokerArray: Array<any> = ["str1", 'str2', `str3`, 42, true, [], {}];


}
