import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = 'https://backend-ecommerce-jwt-2024.vercel.app/api'

    

  /*------------------------------------------

  --------------------------------------------

  Http Header Options

  --------------------------------------------

  --------------------------------------------*/

  httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json'

    })

  }

   

  /*------------------------------------------

  --------------------------------------------

  Created constructor

  --------------------------------------------

  --------------------------------------------*/

  constructor(private httpClient: HttpClient) { }

    

  /**

   * Write code on Method

   *

   * @return response()

   */

  getAll(): Observable<any> {

  

    return this.httpClient.get(this.apiURL + '/articles/')

  

    .pipe(

      catchError(this.errorHandler)

    )

  }

    

  /**

   * Write code on Method

   *

   * @return response()

   */

  create(products:Products): Observable<any> {

  

    return this.httpClient.post(this.apiURL + '/articles/', JSON.stringify(products), this.httpOptions)

  

    .pipe(

      catchError(this.errorHandler)

    )

  }  

    

  /**

   * Write code on Method

   *

   * @return response()

   */

  find(_id:object): Observable<any> {

  

    return this.httpClient.get(this.apiURL + '/articles/' + _id)

  

    .pipe(

      catchError(this.errorHandler)

    )

  }

    

  /**

   * Write code on Method

   *

   * @return response()

   */

  update(_id:object, products:Products): Observable<any> {

  

    return this.httpClient.put(this.apiURL + '/articles/' + _id, JSON.stringify(products), this.httpOptions)

 

    .pipe( 

      catchError(this.errorHandler)

    )

  }

       

  /**

   * Write code on Method

   *

   * @return response()

   */

  delete(_id:object){

    return this.httpClient.delete(this.apiURL + '/articles/' + _id, this.httpOptions)

  

    .pipe(

      catchError(this.errorHandler)

    )

  }

      

  /** 

   * Write code on Method

   *

   * @return response()

   */

  errorHandler(error:any) {

    let errorMessage = '';

    if(error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;

    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    return throwError(errorMessage);

 }

}
