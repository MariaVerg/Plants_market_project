import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Plant } from './models/plant';
import { Observable } from 'rxjs';
import { SearchResult } from './models/search-result';
import { SearchParameter } from './models/search-parameter';
import { Sale } from './models/sale';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    getData(): Observable<Plant[]> {
        return this.http.get('assets/plants.json')
            .pipe(
                map((data) => {
                    var list: Plant[] = data["plantsList"];
                    return list;
                })
            )
    }


    getSale() {
        return this.http.get('assets/sale.json')
    }


    plantsSearch( params:Observable<SearchParameter>) {
        return params.pipe(switchMap((p:SearchParameter) =>{
            return this.getData().pipe(map(d => {
                let list = d.filter(x =>
                    (!p.section||x.section===p.section)
                    && (!p.isDiscount||x.isDiscount===true)
                    && (!p.itemSearch||x.name.includes(p.itemSearch)||x.species.includes(p.itemSearch))                    
                )
                let res = this.calculateFilters(list);
                res.list = list.filter(x =>
                     (!p.species||p.species.length===0||p.species.includes(x.species))
                    && (!p.colors||p.colors.length===0||p.colors.includes(x.color))
                    && (!p.height||p.height.length===0||p.height.includes(x.height))
                )
                return  res;
            }))}
        ));
    } 


    calculateFilters(list: Plant[]): SearchResult {
        var species: string[] = this.selectUnique(list.map(item => item.species)).sort();
        var colors: string[] = this.selectUnique(list.map(item => item.color)).sort();
        var height: number[] = this.selectUnique(list.map(item => item.height)).sort(this.sortNumber);
        
        var res = new SearchResult() ;
        res.list = list;
        res.species = species;
        res.colors = colors;
        res.height = height;

        return res;
    }


    selectUnique(arr: any[]) {
        var result = [];
        for (let x of arr) {
            if (!result.includes(x)) {
                result.push(x);
            }
        }
        return result;
    }


    sortNumber(a: number, b: number) {
        return a - b
    }

    
    getPlant (plantName: string): Observable<Plant>{
        return this.getData()
            .pipe(map(d =>
                 d.find(x => x.name === plantName) 
            ))
    }
}
