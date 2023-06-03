import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  casenum:any=1;
 // mysegment:any=1;
  formdata:any;
  userform:any;
   em:any;
    pass:any; 
   //forg:any;
   // pwd:any;
  constructor(private api:ApiService,private fb: FormBuilder,private route:Router,private navctrl:NavController) {
    this.formdata=new FormGroup({
      pwd:new FormControl('',[Validators.required,Validators.minLength(8)])
             });
             this.userform=new FormGroup({
           em:new FormControl('',[Validators.required,Validators.email]),
             pass:new FormControl('',[Validators.required,Validators.minLength(5)])
          // cpass:new FormControl('',[Validators.required,Validators.minLength(5)])
                  });
     }
  ngOnInit() {
  }
  cases(temp:any){
      var caseno=temp;
      //console.log("college page");
      this.navctrl.navigateForward(['home',{data:JSON.stringify(caseno)}]);
  }
  /*
  getdata(data:any){
    console.log("pwd="+data.pwd);
  }*/
  userdata(form:any){
    //console.log("em="+data.em);
    //console.log("pass="+data.pass);
    console.log("adminLogin");
    let apiname="login/adminlogin.php";
    let data={"email":form.em,"password":form.pass};
    this.api.myapicall(apiname,data).subscribe((res: any) => {
      console.log('success=='+ JSON.stringify(res));
    }, (error: any) => {
      console.log('error='+error);
    });
    this.casenum=2;
      }
   /*
      password(data:any){
        console.log("eph="+data.eph); 
        this.casenum=3;
      }
      */
     /*
      data(form: any) {                                                    //new category
        console.log("adminLogin");
        let apiname="login/adminlogin.php";
        let data={"email":form.em,"password":form.pass};
        this.api.myapicall(apiname,data).subscribe((res: any) => {
          console.log('success=='+ JSON.stringify(res));
        }, (error: any) => {
          console.log('error='+error);
        });
        //console.log("select_category=" + form.cgory);
       // console.log("description=" + form.des);
      }*/
 setcasenum(temp:any){
  this.casenum=temp;
  console.log("new casenum="+this.casenum);
 }
}
