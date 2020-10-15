import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-spinner';

  public showOrHide=true;

  ngOnInit(){
    this.showOrHideFn()
  }

  public showOrHideFn(){
    let that=this;
    setTimeout(()=>{
      that.showOrHide=!that.showOrHide;
    },2000)
  }
}
