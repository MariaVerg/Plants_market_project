import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() species: string[];
  @Input() colors: string[];
  @Input() height: number[];
  
  speciesChecked:string[] = [];
  colorChecked:string[] = [];
  heightChecked:number[] = [];
  
  @Output() speciesSelected: EventEmitter<string[]> = new EventEmitter<string[]> ();

  @Output() colorSelected:EventEmitter<string[]> = new EventEmitter<string[]> ();

  @Output() heightSelected: EventEmitter<number[]> = new EventEmitter<number[]> (); 


  sendSpecies(e:any, item:string) {
    if (e.target.checked) {
      this.speciesChecked.push(item);
    } else {
      this.speciesChecked = this.speciesChecked.filter(m=>m!=item);
    }
    this.speciesSelected.emit(this.speciesChecked);
  }

  sendColor(e:any,  item:string) {
    // if (checked===true) {
    //   this.colorSelected.emit(value);
    // }
    if (e.target.checked) {
      this.colorChecked.push(item);
    } else {
      this.colorChecked = this.colorChecked.filter(m=>m!=item);
    }
    this.colorSelected.emit(this.colorChecked);
  }

  sendHeight(e:any,  item:number) {
    // if (checked===true) {
    //   this.heightSelected.emit(value);
    // }
    if (e.target.checked) {
      this.heightChecked.push(item);
    } else {
      this.heightChecked = this.heightChecked.filter(m=>m!=item);
    }
    this.heightSelected.emit(this.heightChecked);
  }

  constructor() {
   }

  ngOnInit(): void {
  }
}
