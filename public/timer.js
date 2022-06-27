// class Timer{
//   constructor() {
//     this.timer = document.querySelector('.stopWatch')
//     // this.result = 0;
//     this.stopTime = true;
//     this.running = false;
//     this.hr = 0;
//     this.min = 0;
//     this.sec = 0;
//   }

//   clickEvents(){
//     document.querySelector('.start').addEventListener('click', () => this.startTimer())
//     document.querySelector('.stop').addEventListener('click', () => this.stopTimer())
//     document.querySelector('.reset').addEventListener('click', () => this.resetTimer())
//   }
 
//   startTimer(){
//     if (this.stopTime == true && this.running == false){
//       this.stopTime = false;
//       this.timerCycle();
//       this.running = true;
//     }
//   }

//   stopTimer() {
//     if (this.stopTime == false) {
//       this.stopTime = true;
//       this.running = false;
//       setTimeout("timer.timerCycle()",0)
//     }
//   }

//   timerCycle(){
//     if (this.stopTime == false){
//       this.sec = parseInt(this.sec);
//       this.min = parseInt(this.min);
//       this.hr = parseInt(this.hr);
//       console.log('test')

//       this.sec = this.sec + 1;

//       if (this.sec == 60){
//         this.min++;
//         this.sec = 0;
//       }

//       if ( this.min == 60){
//         this.hr++;
//         this.min = 0;
//         this.sec = 0;
//       }

//       if ( this.sec < 10 || this.sec == 0) {
//         this.sec = '0' + this.sec;
//       }

//       if ( this.min < 10 || this.min == 0) {
//         this.min = '0' + this.min;
//       }

//       if ( this.hr < 10 || this.hr == 0) {
//         this.hr = '0' + this.hr;
//       }

//       this.timer.innerHTML = this.hr + ':' + this.min + ':' + this.sec;
//     }

//     setTimeout("timerCycle()", 1000)

//   }

//     resetTimer() {
//       this.timer.innerHTML = '00:00:00';
//       this.running = false;
//       this.stopTime = true;
//       this.hr = 0;
//       this.sec = 0;
//       this.min = 0;
//     }
// }

// const timer = new Timer();
// timer.clickEvents();


class Timer{
  constructor(cron){
    this.timer = document.querySelector('.stopWatch')
    this.hour = 0;
    this.minute = 0;
    this.second = 0;

    this.cron = cron;
  }

  clickEvents(){
    document.querySelector('.start').addEventListener('click', () => this.startTimer())
    document.querySelector('.stop').addEventListener('click', () => this.stopTimer())
    document.querySelector('.reset').addEventListener('click', () => this.resetTimer())
  }

  stopTimer(){
    clearInterval(this.cron);
  }

  startTimer(){
   this.stopTimer();
   this.cron = setInterval(() => {this.timerCycle(); }, 1000); 
  }

    resetTimer() {
      this.timer.innerHTML = '00:00:00';
      // this.running = false;
      // this.stopTime = true;
      this.hour = 0;
      this.second = 0;
      this.minute = 0;
    }

  timerCycle(){
    this.second = parseInt(this.second);
    this.minute = parseInt(this.minute);
    this.hour = parseInt(this.hour);

    this.second++;

    if (this.second == 60) {
      this.second = 0;
      this.minute++;
    }
    if (this.minute == 60) {
      this.minute = 0;
      this.hour++;
    }
    if ( this.second < 10 || this.second == 0) {
      this.second = '0' + this.second;
    }

    if ( this.minute < 10 || this.minute == 0) {
      this.minute = '0' + this.minute;
    }

    if ( this.hour < 10 || this.hour == 0) {
      this.hour = '0' + this.hour;
    }

    this.timer.innerHTML = this.hour + ':' + this.minute + ':' + this.second;

  }
}
 

const timer = new Timer();
timer.clickEvents();