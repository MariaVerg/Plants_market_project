import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';
import { Plant } from '../models/plant';
import { SearchParameter } from '../models/search-parameter';

import { ActivatedRoute } from '@angular/router';
import {Subject, Subscription} from 'rxjs';
import { SearchResult } from '../models/search-result';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css'],
  providers: [HttpService]
})
export class PlantsComponent implements OnInit, OnDestroy {
  
  plantIsDiscount:boolean;

  plantsSelected: Plant[] = [];
  species: string[];
  colors: string[];
  height: number[];

  parametersOfSearch$ = new Subject<SearchParameter>();
  searchParameter:SearchParameter = new SearchParameter();  
  
  private subscription: Subscription;
  
  
  constructor(activateRoute: ActivatedRoute, private httpService: HttpService) {
    this.searchParameter.itemSearch = activateRoute.snapshot.params['itemSearch'];
    this.searchParameter.itemSearch = activateRoute.snapshot.params['species'];
    
    this.subscription = activateRoute.params.subscribe(params=>{
      this.searchParameter.species = params['species'];        
        this.searchParameter.section =params['section'];
        this.searchParameter.isDiscount = params['discount'];        
        this.searchParameter.itemSearch = params['itemSearch'];
        this.parametersOfSearch$.next( this.searchParameter);
    }); 
  }

  ngOnInit(): void {
    this.httpService.plantsSearch(
      this.parametersOfSearch$)
      .subscribe((data : SearchResult) => {
        this.plantsSelected = data.list;
        this.species = data.species;
        this.colors = data.colors;
        this.height = data.height; 
      },
      err => {
        console.error('Observer got an error: ' + err)
      });
    this.parametersOfSearch$.next( this.searchParameter);
  }
 

  setSpecies(speciesSelected: string[]) {
    this.searchParameter.species = speciesSelected;
    this.parametersOfSearch$.next(this.searchParameter);
  }

  setColor(colorSelected: string[]) {
    this.searchParameter.colors = colorSelected;
    this.parametersOfSearch$.next(this.searchParameter);
  }

  setHeight(heightSelected: number[]) {
    this.searchParameter.height = heightSelected;
    this.parametersOfSearch$.next(this.searchParameter);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
