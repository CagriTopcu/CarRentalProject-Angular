import { Component, OnInit } from '@angular/core';
import {CarImageService} from '../../services/car-image.service';
import {CarImage} from '../../models/carImage';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  baseUrl = "https://localhost:44387";
  carImages:CarImage[] = [];
  constructor(private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.getAllCarImages();
  }

  getAllCarImages(){
    this.carImageService.getAllCarImages().subscribe(response => {
      this.carImages = response.data;
    })
  }

}
