import { Observable, observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
// import firestore from 'firebase/firestore' 


@Injectable({
  providedIn: 'root'
})
export class FbDatabaseService {

  ref = firebase.firestore().collection('product')
  user_ = firebase.firestore().collection('user')

  constructor(

  ) { }

  createProduct(data){
    return new Observable(
      (observer)=> {
        this.ref.add(data).then((doc)=> {
          observer.next({
            key: doc.id
          });
        });
      });
  }

  getProduct(){
    return new Observable(
      (obs) => {
        this.ref.onSnapshot(
          (querySnapshot)=> {
            let product_ = [];
            querySnapshot.forEach(
              (doc)=> {
                let data = doc.data()
                product_.push({
                  key: doc.id,
                  pname: data.pname,
                  quantity: data.quantity,
                  price: data.price
                });
              });
              obs.next(product_)
          })
      })
  }

  deleteProduct(id){
    return new Observable(
      (obs)=> {
        this.ref.doc(id).delete().then(
          ()=> {
            obs.next()
          }
        )
      }
    )
  }

  updateProduct(id, data){
    return new Observable(
      (obs)=> {
        this.ref.doc(id).update(data).then(
          ()=> {
            obs.next()
          }
        )
      }
    )
  }

  createUser(userData){
    return new Observable(
      (obs)=> {
        this.user_.add(userData).then(
          (reg) => {
            obs.next({
              key: reg.id
            })
          })
      })
  }

}
