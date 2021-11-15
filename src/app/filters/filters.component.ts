import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  public categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];

  public filterForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      searchName: new FormControl(''),
      categoryName: new FormControl(''),
    });
  }
  ngOnDestroy() {}
}
