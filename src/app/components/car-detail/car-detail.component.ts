import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service';
import {CarDetailDto} from '../../models/carDetailDto';
import {ActivatedRoute} from '@angular/router';
import {CarImageService} from '../../services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  baseUrl = "https://localhost:44387";
  cars:CarDetailDto[] = [];
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute, private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetails(params["carId"]);
      }
    })
  }

  getCarDetails(id:number){
    this.carService.getCarById(id).subscribe(response => {
      this.cars[0] = response.data[0];
    })
  }
}
