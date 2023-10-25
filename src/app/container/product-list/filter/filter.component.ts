import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outofStock: number = 0;

  @Output()
  emitFilterChange: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterButton: string = 'all';

  handleFilterChange() {
    this.emitFilterChange.emit(this.selectedFilterButton);
  }
}
