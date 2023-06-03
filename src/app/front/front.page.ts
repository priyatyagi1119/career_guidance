import { Component, OnInit } from '@angular/core';
//import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-front',
  templateUrl: './front.page.html',
  styleUrls: ['./front.page.scss'],
})
export class FrontPage implements OnInit {
  caseno: any=0;
clgdata:any;
  constructor( private api:ApiService,private route:Router,private navctrl:NavController) {

    console.log("Colleg &course view cards");
    let data1={};                                                    //for collegedropdown
     this.api.myapicall("api/joinclg.php",data1).subscribe((res: any) => {
          //console.log("stu list-->"+res);
    //       this.studata=res;  
    this.clgdata=res;     
    console.log('clg details'+JSON.stringify(res));
    //alert(JSON.stringify(res));
          //console.log('success=='+res[0]['name']);
            ///    this.studata= res;
              }, (error: any) => {
                console.log('error='+ JSON.stringify(error));
                alert("error"+JSON.stringify(error));
              });
  }

  
    next_page(temp:any){
      var caseno=temp;
      //console.log("college page");

      this.navctrl.navigateForward(['home',{data:JSON.stringify(caseno)}]);
        }
   
        next_page1(temp:any){         //for quiz 
          var caseno=temp;
          //console.log("college page");
    
          this.navctrl.navigateForward(['user',{data:JSON.stringify(caseno)}]);
            }
       
    college_page(){
      var caseno=4;
      console.log("college page");

      this.navctrl.navigateForward(['home',{data:JSON.stringify(caseno)}]);
      // this.caseno=caseno;
     // this.route.navigate(['/home']);
    }
  

  ngOnInit() {
  }


  
  option={

    slidesPerView:1.5,
    centeredSlides:true,
    loop:true,
    spaceBetween:5,
    autoplay:true,
  }

user_case:any;

select_user(){
  
}
next(caseno:any){
  this.caseno=caseno;
  console.log(caseno);
}






}
