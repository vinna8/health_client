import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  date: string = '';

  constructor(private datePipe: DatePipe) { }

  ngOnInit() { //мб дату от локации??
    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'EEEE, d MMMM y');
    if (formattedDate) {
      const parts = formattedDate.split(' ');
      parts[0] = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
      this.date = parts.join(' ');
    } else {
      this.date = '';
    }
  }
}
