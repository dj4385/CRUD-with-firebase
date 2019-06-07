import { Component, OnInit } from '@angular/core';
import { FbDatabaseService } from '../common/fb-database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = {
    pname: "",
    quantity: "",
    price: ""
  }

  constructor(
    private fs: FbDatabaseService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  createProduct(){
    this.fs.createProduct(this.product).subscribe(
      res => {
        alert('Success')
        this.route.navigate(['/dashboard'])
      },
      err => {
        console.log('Error', err)
      }
    )
    
  }
}
