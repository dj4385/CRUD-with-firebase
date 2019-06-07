import { Component, OnInit } from '@angular/core';
import { FbDatabaseService } from '../common/fb-database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products:any = []

  constructor( 
    private fbService: FbDatabaseService
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.fbService.getProduct().
      subscribe(
        res => {
          this.products = res
        },
        err => {
          console.log(err)
        }
      )
  }

}
