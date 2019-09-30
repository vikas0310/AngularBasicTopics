import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs-routing-dynamically',
  templateUrl: './tabs-routing-dynamically.component.html',
  styleUrls: ['./tabs-routing-dynamically.component.css']
})
export class TabsRoutingDynamicallyComponent implements OnInit {

  navTabs: any;
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navTabs = [
      {
        label: 'First',
        path: './first',
        index: 0
      },
      {
        label: 'Second',
        path: './second',
        index: 1
      },
      {
        label: 'Third',
        path: './third',
        index: 2
      }
    ];
  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex  = this.navTabs.indexOf(this.navTabs.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
