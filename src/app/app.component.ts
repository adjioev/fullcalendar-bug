import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Calendar } from 'fullcalendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {


  title = 'app';

  calendar: any;

  config: any;

  // @ViewChild('cal-element')
  calElement: any;

  constructor(public el: ElementRef) {

  }

  ngAfterViewInit(): void {
    this.config = {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
      },
      events: [
        {
          title: 'Event Title 1',
          daysOfWeek: [1],
          startTime: '02:00',
          endTime: '04:00',
          startRecur: '2018-11-15',
          endRecur: '2018-12-22'
        }
      ],
      height: 'parent'
    }
    this.calElement = document.getElementById('cal-element');
    this.calendar = new Calendar(this.calElement, this.config);
    this.calendar.render();
  }

  ngOnInit(): void {

  }

}


// {
//   title: 'Event Title 2',
//   start: '2018-10-01',
//   end: '2018-10-05'
// }