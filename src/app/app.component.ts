import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  public isActive : boolean = true;

  ngOnInit(): void {
    
  }
  
  Click(){
    
    this.isActive = !this.isActive;
  }
}
