import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() group_index:number
  @Input() tab_index:number
  constructor() { }

  ngOnInit() {
    console.log(this.group_index,this.tab_index)
  }

}
