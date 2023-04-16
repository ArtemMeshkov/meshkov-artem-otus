import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './timer-count-down.component.html',
  styleUrls: ['./timer-count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy {

    private subscription: Subscription = new Subscription;
  
    @Input()
    minutes: number = 10;

    @Output()
    timeEnded = new EventEmitter();

    public dateNow = new Date();
    public dDay = new Date();
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    public timeDifference!: number;
    public secondsToDday!: number;
    public minutesToDday!: number;


    private getTimeDifference () {
        this.timeDifference = this.dDay.getTime() - new  Date().getTime();
        if (Math.floor(this.timeDifference) === 0) {
          this.timeEnded.emit();
          this.subscription.unsubscribe();
          return;
        }
        this.allocateTimeUnits(this.timeDifference);
    }

    private allocateTimeUnits (timeDifference: any) {
          this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
          this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    }

    ngOnInit() {
      this.dDay.setMinutes(this.dateNow.getMinutes() + this.minutes);
       this.subscription = interval(1000)
           .subscribe(x => { this.getTimeDifference(); });
    }

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }
}