import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HaBalloon } from 'src/app/interfaces/hotair-balloon';
import { HotairBalloonService } from 'src/app/services/hotair-balloon.service';


@Component({
  selector: 'app-hotair-balloon-form',
  templateUrl: './hotair-balloon-form.component.html',
  styleUrls: ['./hotair-balloon-form.component.css']
})
export class HotairBalloonFormComponent implements OnInit {

  haBalloon: HaBalloon = {
    label: '',
    size: 0,
    passengersNumber: 0,
    color: ""
  };

  edit: boolean = false;

  constructor(
    private haBalloonService: HotairBalloonService,
    private router: Router,
    private activatedRouter: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const params = this.activatedRouter.snapshot.params;
    if(params){
      this.haBalloonService.getHaBalloonById(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.haBalloon = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }

  submitHaBalloon(){
    this.haBalloonService.createHaBalloons(this.haBalloon)
     .subscribe(
       res => {console.log(res);
      this.router.navigate(['/'])},
       err => console.log(err)
     )
  }

  // updateHaBalloon(){
  //   this.haBalloonService.updateHaBalloons(this.haBalloon.id, this.haBalloon).subscribe(
  //     res => {
  //       console.log(res);
  //       this.router.navigate(['/haBalloons'])
  //     },
  //     err => console.log(err)
  //   )
  // }
}
