import { Component ,OnInit} from '@angular/core';
import {Names} from './names'
import { MyserviceService } from './myservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  data:any;
  names;
  

  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
    this.names=Names
    this.myservice.getData().subscribe(data=>{
      console.log(data);
      this.data=data;
    })

    
  }










}
