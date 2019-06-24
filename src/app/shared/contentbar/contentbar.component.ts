import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contentbar',
  templateUrl: './contentbar.component.html',
  styleUrls: ['./contentbar.component.scss']
})
export class ContentbarComponent implements OnInit {

  @Input() body: string;
  private content: string;
  private more: boolean = false;

  constructor() { }

  ngOnInit() {
    this.content = this.body.substring(0, 255);

  }

}
