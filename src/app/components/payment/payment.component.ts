import { Component, OnInit } from '@angular/core';
import {RentalService} from '../../services/rental.service';
import {Rental} from '../../models/rental';
import {ToastrService} from 'ngx-toastr';
import {CarDetailDto} from '../../models/carDetailDto';
import {CarService} from '../../services/car.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  rental:Rental= new class implements Rental {
    carId: number;
    customerId: number;
    id: number;
    rentDate: Date;
    returnDate: Date;
  }

  rentDate:Date;
  returnDate:Date;

  baseUrl = "https://localhost:44387";
  carDetails:CarDetailDto[];
  constructor(private rentalService:RentalService,
              private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService,
              private carService:CarService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetails(params["carId"]);
      }
    })
  }

  getCarDetails(carId:number){
    this.carService.getCarById(carId).subscribe(response => {
      this.carDetails = response.data;
    })
  }

  rentCar(carId:number){
    this.rental.carId = carId;
    this.rental.customerId = 1;
    this.rental.rentDate = this.rentDate;
    this.rental.returnDate = this.returnDate;


    this.rentalService.addRental(this.rental).subscribe(response => {
      this.toastrService.success("Başarıyla kiralandı", "Kiralandı")
    })
  }
}
