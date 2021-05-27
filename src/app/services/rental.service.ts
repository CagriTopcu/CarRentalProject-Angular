import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListResponseModel} from '../models/listResponseModel';
import {RentalDetailDto} from '../models/rentalDetailDto';
import {ResponseModel} from '../models/responseModel';
import {Rental} from '../models/rental';
@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44387/api/rentals"
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalDetailDto>>{
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(this.apiUrl+"/getrentaldetails");
  }

  addRental(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/add",rental);
  }
}

