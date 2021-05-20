import { Component, OnInit } from '@angular/core';
import {Brand} from '../../models/brand';
import {BrandService} from '../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] = [];
  currentBrand: Brand = { id : 0, name : ""};
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }
}
