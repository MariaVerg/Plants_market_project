import { Component, OnInit } from '@angular/core';
import { Plant } from '../models/plant';

import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-plant-page',
  templateUrl: './plant-page.component.html',
  styleUrls: ['./plant-page.component.css'],
  providers: [HttpService]
})
export class PlantPageComponent implements OnInit {

  plantName: string = '';
  plant:Plant;

  constructor( private activateRoute: ActivatedRoute,
              private httpService: HttpService ) { 
    this.plantName = activateRoute.snapshot.params['plantName'];
  }

  ngOnInit(): void {
    this.httpService.getPlant(this.plantName)
    .subscribe(data => this.plant=data )
  }

}
