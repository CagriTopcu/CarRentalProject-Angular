import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service';
import {CarDetailDto} from '../../models/carDetailDto';
import {ActivatedRoute, Router} from '@angular/router';
import {CarImageService} from '../../services/car-image.service';
import {RentalService} from '../../services/rental.service';
import {RentalDetailDto} from '../../models/rentalDetailDto';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  baseUrl = "https://localhost:44387";
  cars:CarDetailDto[] = [];
  rentalDetail:RentalDetailDto[];

  constructor(private carService:CarService,
              private activatedRoute:ActivatedRoute,
              private carImageService:CarImageService,
              private rentalService:RentalService,
              private toastrService:ToastrService,
              private router: Router) { }

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

  makePayment(carId:number){
    this.router.navigate(['/payment/'+carId]);
  }
}
