import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  sdata:any;
  p:any;
  cdata:any;
 num:any;
 adata:any;
 enter:any;
  re:any;
  otdata:any;
  regdata:any;
  opass:any;
  fname:any;
  lname:any;
  mobile:any; 
  email:any;
  uname:any;
  pass:any;
  cpass:any;
  formdata:any;
  emailid:any;
  select:any;
  password:any;
  captcha:any;
  constructor(private fb:FormBuilder, private api:ApiService,private route:Router) {
  this.formdata=fb.group({
    emailid:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    select:new FormControl('',[Validators.required]),
    captcha:new FormControl('',[Validators.required,Validators.minLength(6)]),
  }
  );
  this.regdata=new FormGroup({
    fname:new FormControl('',[Validators.required]),
     mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    uname:new FormControl('',[Validators.required]),
    pass:new FormControl('',[Validators.required,Validators.minLength(8)]),
    cpass:new FormControl('',[Validators.required,Validators.minLength(8)]),
  });
  this.otdata=new FormGroup({
opass:new FormControl('',[Validators.required,Validators.minLength(4)]),
  });
  this.sdata=new FormGroup({
    p:new FormControl('',[Validators.required,Validators.email]),
  });
  this.cdata=new FormGroup({
num:new FormControl('',[Validators.required,Validators.minLength(4)]),
  });
  this.adata=new FormGroup({
    enter:new FormControl('',[Validators.required,Validators.minLength(6)]),
    re:new FormControl('',[Validators.required,Validators.minLength(6)]),
  });
 } 
mysegment:any=1;
 casenum:any=1;
 caseno:any=0;
login(){
  this.mysegment=2;
  console.log(this.mysegment);
 }
Forgot()
{
  this.caseno=3;
  console.log(this.caseno);
}
setcaseno(temp:any){
this.caseno=temp;
console.log("caseno="+this.caseno)
}
getdata(frm:any){                            
  console.log("testing");
let apiname="login/login.php";
  let data={"email":frm.emailid,"password":frm.password};
  //this.api.myapicall(apiname,data);
  this.api.myapicall(apiname,data).subscribe((res: any) => {
 if(parseInt(JSON.stringify(res["rscode"]))==0)
 {
  this.route.navigate(['/front']);
 }
 else
 alert(JSON.stringify(res["msg"]));
    console.log('success=='+ JSON.stringify(res));
  }, (error: any) => {
    console.log('error='+error);
  });
}
ngOnInit() {
}
datainput(form:any){ 
   //for registration input
  /*console.log("firstname="+form.fname);
  console.log("lastname="+form.lname);
  console.log("mobileno.="+form.mobile);
  console.log("e-mail="+form.email);
  console.log("username="+form.uname);
  console.log("Password="+form.pass);
  console.log("confirm="+form.cpass);
  */
console.log("testing");
let apiname="login/regis_api.php";
  let data={"firstname":form.fname,"mobile":form.mobile,"email":form.email,"username":form.uname
  ,"password":form.pass};
  //this.api.myapicall(apiname,data);
  this.api.myapicall(apiname,data).subscribe((res: any) => {
    console.log('success=='+ JSON.stringify(res));
  }, (error: any) => {
    console.log('error='+error);
  });
  this.caseno=5;
}
odata(frm:any){
  //console.log("otp="+frm.opass);
  let apiname="verifyotp.php";
  let data={"otp":frm.opass};
  //this.api.myapicall(apiname,data);
  this.api.myapicall(apiname,data).subscribe((res: any) => {
    console.log('success=='+ JSON.stringify(res));   
  }, (error: any) => {
    console.log('error='+error);
  });
  //this.caseno=2;
}
seg(frm:any){
  //console.log("username="+frm.p);
  let apiname="forget_api.php";
  let data={"email":frm.p,"otp":frm.num};
  //this.api.myapicall(apiname,data);
  this.api.myapicall(apiname,data).subscribe((res: any) => {
    console.log('success=='+ JSON.stringify(res));
  }, (error: any) => {
    console.log('error='+error);
  });
  this.caseno=3;
}
sg(frm:any){
 // console.log("code="+frm.num);
  let apiname="forget_api.php";
  let data={"otp":frm.num};
  //this.api.myapicall(apiname,data);
  this.api.myapicall(apiname,data).subscribe((res: any) => {
    console.log('success=='+ JSON.stringify(res));   
  }, (error: any) => {
    console.log('error='+error);
  });
 this.caseno=4;
}
get(frm:any){
  console.log("enter="+frm.enter);
  console.log("re-enter="+frm.re);
}
home_page(){
  this.route.navigate(['/front']);
}
}