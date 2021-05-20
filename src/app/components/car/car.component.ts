import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service';
import {CarDetailDto} from '../../models/carDetailDto';
import {ActivatedRoute} from '@angular/router';
import {Car} from '../../models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  baseUrl = "https://localhost:44387";
  cars:CarDetailDto[] = [];
  car:CarDetailDto = { id:0, carName:"", colorId:0, brandName:"", brandId:0, colorName:"", dailyPrice:0, description:"", modelYear:0, imagePath: ""};
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      } else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      } else{
        this.getCars();
      }
    })
  }

  getCars(){
    return this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data;
    });
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.cars = response.data;
    })
  }
}
