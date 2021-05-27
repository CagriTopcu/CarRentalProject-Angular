import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListResponseModel} from '../models/listResponseModel';
import {CarDetailDto} from '../models/carDetailDto';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44387/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetailDto>>{
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiUrl+"cars/getcardetails");
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiUrl+"cars/getcarsbybrandid?id="+brandId);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiUrl+"cars/getcarsbycolorid?colorId="+colorId);
  }

  getCarById(id:number):Observable<ListResponseModel<CarDetailDto>>{
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiUrl+"cars/getsinglecardetails?carId="+id);
  }
}
