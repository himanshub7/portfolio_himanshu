import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HoverLink } from 'src/directives/hoverLink.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Portfolio';
  yesOrNo=1;
  home:boolean=true;
  about:boolean=true;
  services:boolean=true;
  contact:boolean=true;
  navVisible:boolean=false;
  

  obj1= {
    firstName: "Himanshu",
    firstFun: function(){
      console.log("Himanshu inside function");
    }
  }
  

  constructor(private router:Router, private scroller:ViewportScroller){

  }
  
  ngOnInit() {
    console.log(this.obj1.firstName);
    this.obj1.firstFun();
  }

  

  homes(){
    // this.home=true;
    // this.about=false;
    // this.services=false;
    // this.contact=false;
    this.navVisible=false;
    this.scroller.scrollToAnchor('home');
    // window.scroll({ 
    //   top: 0,
    //   behavior: 'smooth' 
    // });
  }

  abouts(){
    // this.home=false;
    // this.about=true;
    // this.services=false;
    // this.contact=false;
    this.navVisible=false;
    this.scroller.scrollToAnchor('about');
    // window.scroll({ 
    //   top: 0,
    //   behavior: 'smooth' 
    // });
  }

  servicess(){
    // this.home=false;
    // this.about=false;
    // this.services=true;
    // this.contact=false;
    this.navVisible=false;
    this.scroller.scrollToAnchor('services');
    // window.scroll({ 
    //   top: 0,
    //   behavior: 'smooth' 
    // });
  }

  contacts(){
    // this.home=false;
    // this.about=false;
    // this.services=false;
    // this.contact=true;
    this.navVisible=false;
    this.scroller.scrollToAnchor('contact');
    // window.scroll({ 
    //   top: 0,
    //   behavior: 'smooth' 
    // });
  }

  homesNav(){
    // this.home=true;
    // this.about=false;
    // this.services=false;
    // this.contact=false;
    // window.scroll({ 
    //   top: 0,
    //   behavior: 'smooth' 
    // });
    this.navVisible=false;
    setTimeout(() => { this.scroller.scrollToAnchor('home') },200);
  }

  aboutsNav(){
    // this.home=false;
    // this.about=true;
    // this.services=false;
    // this.contact=false;
    // window.scroll({ 
    //   top: 0,
    //   behavior: 'smooth' 
    // });
    this.navVisible=false;
    setTimeout(() => { this.scroller.scrollToAnchor('about') },200);
  }

  servicessNav(){
    // this.home=false;
    // this.about=false;
    // this.services=true;
    // this.contact=false;
    // window.scroll({ 
    //   top: 0,
    //   behavior: 'smooth' 
    // });
    this.navVisible=false;
    setTimeout(() => { this.scroller.scrollToAnchor('services') },200);
  }

  contactsNav(){
    // this.home=false;
    // this.about=false;
    // this.services=false;
    // this.contact=true;
    // window.scroll({ 
    //   top: 0,
    //   behavior: 'smooth' 
    // });
    this.navVisible=false;
    setTimeout(() => { this.scroller.scrollToAnchor('contact') },200);
  }

  // showAll(){
  //   this.home=true;
  //   this.about=true;
  //   this.services=true;
  //   this.contact=true;
  //   window.scroll({ 
  //     top: 0,
  //     behavior: 'smooth' 
  //   });
  // }

  navOpen(){
    this.navVisible=true;
    setTimeout(() => { this.scroller.scrollToAnchor('background') },200);
  }

  navClose(){
    this.navVisible=false;
  }
  
  // project(){
  //   console.log('project');
  //   this.router.navigate(['/project']);
  // }

  // skill(){
  //   console.log('skill');
  //   this.router.navigate(['/skill']);
  //   console.log('skill');
  // }

  // contacts(){
  //   this.router.navigate(['/contact']);
  // }

}
