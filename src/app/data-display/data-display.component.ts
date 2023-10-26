import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit, OnDestroy {
  data: string[] = [];
  observableData: string[] = [];
  filteredData: string[] = [];
  private dataSubscription!: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Consumir datos de la Promise
    this.dataService.getData()
      .then((result) => this.data = result);

    // Consumir datos del Observable y aplicar un filtro usando map
    this.dataSubscription = this.dataService.getObservableData()
      .pipe(
        map((data) => data.filter((item) => item.startsWith('Dato')))
      )
      .subscribe((result) => this.observableData = result);
  }

  ngOnDestroy(): void {
    
    this.dataSubscription.unsubscribe();
  }
}

