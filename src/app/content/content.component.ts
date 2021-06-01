import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Sale } from '../models/sale';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [HttpService,  { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }]
})
export class ContentComponent implements OnInit {
  
  salePlants: Sale[] = [];
 
  constructor(private httpService: HttpService) {
   }

  ngOnInit(): void {
    this.httpService.getSale().subscribe(data => 
      this.salePlants = data["saleList"]
    )
  }

}
