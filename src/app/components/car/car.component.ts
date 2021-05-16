import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service';
import {CarDetailDto} from '../../models/carDetailDto';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetailDto[] = [];
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    return this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    });
  }
}
