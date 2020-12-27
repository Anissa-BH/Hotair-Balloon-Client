import { Component, OnInit } from '@angular/core';
import { HaBalloon } from 'src/app/interfaces/hotair-balloon';
import { HotairBalloonService } from 'src/app/services/hotair-balloon.service';


@Component({
  selector: 'app-hotair-balloon-list',
  templateUrl: './hotair-balloon-list.component.html',
  styleUrls: ['./hotair-balloon-list.component.css']
})
export class HotairBalloonListComponent implements OnInit {  

  constructor(private haBalloonService: HotairBalloonService) { }

  haBalloons: HaBalloon[]=[];
  

  ngOnInit() {    
    this.getHaBalloons();
  }

  getHaBalloons(): void {
    this.haBalloonService.getHaBalloons()
    .subscribe(
      res => {
        this.haBalloons = res;
      },
      err => console.log(err)
    )
  }

  deleteHaBalloon(id: number): void {
    this.haBalloonService.deleteHaBalloons(id)
    .subscribe(      
      res => {
        console.log(res);
        this.getHaBalloons();
      },
      err => console.log(err)
    )
  }

}
