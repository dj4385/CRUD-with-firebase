import { Injectable } from '@angular/core';
import swal from 'bootstrap-sweetalert'
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  successAlertMsg(title,messages){
    swal("Here's a message!")
  }
}
