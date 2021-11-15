import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopHeadlines } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public topHeadlines: TopHeadlines;
  public pageIndex: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy() {}

  public pageChanged(event) {
    this.router.navigate(['/home'], {
      queryParams: { page: event.pageIndex + 1 },
      queryParamsHandling: 'merge',
    });
  }
}
