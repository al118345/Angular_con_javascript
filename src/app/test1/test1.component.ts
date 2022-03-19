import { Component, OnInit } from '@angular/core';
import {YoutubescriptService} from "../service/youtube.service";

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(private youtubeservice: YoutubescriptService) {
    this.youtubeservice.loadScript();
  }
  ngOnInit(): void {
  }

}
