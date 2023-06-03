
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { ApiService } from '../api.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  casenum: any = 0;
  caseno: any;
  //pages


//Addcollege 
state:any;
city:any;
collegeName:any;
collegeAdd:any;
collegeurl:any;
contact:any;
  
  //addCourse
collegeId:any;
coursename:any;
duration:any;
seats:any;
entranceexam:any;
mode:any;
eligibility:any;
minpercentage:any;
fees:any;
//

 
  addcategory: any;
  cgory: any;
  subcategory:any;
  userdata:any;
  brand:any;
  no:any;  //sub category


  formdata:any;
  search:any;//search
 

  AddCollegeForm:any;
  Addcourse:any;
  
  classlist:any;
  collegelist:any;
  categorylist:any
  //for dropdown fetch data
  collegeview:any;
  courseview:any;
  jobs:any;
  //for cards view
  
  
  jobdata:any;
jc:any;
kc:any;
lc:any;
mc:any;
nc:any;
oc:any;
pc:any;
qc:any;
rc:any;
job_list:any;
eli_list:any;
city_list:any;
experience:any;
 //state:any;
 //for job insertion
  
  
  
  caseno1:any;
  caseno2:any;
  constructor( private api:ApiService,private route:Router,private route1:ActivatedRoute) {
console.log("home page<br/>");
    this.caseno1=this.route1.snapshot.params['data'];
    console.log('caseno is'+this.caseno1);
this.caseno=this.caseno1;


this.AddCollegeForm= new FormGroup({
state:new FormControl(''),
city:new FormControl(''),
collegeName:new FormControl(''),
collegeAdd:new FormControl(''),
collegeurl:new FormControl(''),
contact:new FormControl('')
});

this.Addcourse= new FormGroup({
  collegeId:new FormControl(''),
  coursename:new FormControl(''),
  duration:new FormControl(''),
  seats:new FormControl(''),
   entranceexam:new FormControl(''),
   mode:new FormControl(''),
  eligibility:new FormControl(''),
  minpercentage:new FormControl(''),
  fees:new FormControl('')
 
  });

this.jobdata=new FormGroup({
jc:new FormControl(),
kc:new FormControl(),
lc:new FormControl(),

  });


this.addcategory = new FormGroup({
  cgory: new FormControl('',[Validators.required]),
  des: new FormControl('',[Validators.required])

} );
   
   this.subcategory = new FormGroup({
      scgory: new FormControl('',[Validators.required]),
      subcatgory:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required])
   });
   this.brand = new FormGroup({
    scatgory: new FormControl('',[Validators.required]),
    ssubcatgory:new FormControl('',[Validators.required]),
   Brand:new FormControl('',[Validators.required])
 });

 this.formdata= new  FormGroup({
  search:new FormControl(''),
});


this.jobdata=new FormGroup({
jc:new FormControl(),
kc:new FormControl(),
lc:new FormControl(),
mc:new FormControl(),
nc:new FormControl(),
oc:new FormControl(),
pc:new FormControl(),
qc:new FormControl(),
rc:new FormControl(),
  });                               //job 

//for state dropdown
console.log("c list");

let data1={};                                                    //for collegedropdown
 this.api.myapicall("collegelist.php",data1).subscribe((res: any) => {
      //console.log("stu list-->"+res);
//       this.studata=res;  
this.collegelist=res;     
console.log('college list'+JSON.stringify(res));
//alert(JSON.stringify(res));
      //console.log('success=='+res[0]['name']);
        ///    this.studata= res;
          }, (error: any) => {
            console.log('error='+ JSON.stringify(error));
            alert("error"+JSON.stringify(error));
          });
          



let data={};
    this.api.myapicall("state.php",data).subscribe((res: any) => {
      //console.log("stu list-->"+res);
//       this.studata=res;  
this.classlist=res;     
console.log('success=='+JSON.stringify(res));
      //console.log('success=='+res[0]['name']);
        ///    this.studata= res;
          }, (error: any) => {
            console.log('error='+ JSON.stringify(error));
          });
		  


let data2={};                                                      //for collegeView
   this.api.myapicall("viewcollege.php",data1).subscribe((res: any) => {
      //console.log("stu list-->"+res);
//       this.studata=res;  
this.collegeview=res;     
console.log('success=='+JSON.stringify(res));
      //console.log('success=='+res[0]['name']);
        ///    this.studata= res;
          }, (error: any) => {
            console.log('error='+ JSON.stringify(error));
          });
 
 let data3={};                                             //for courseView
   this.api.myapicall("viewcourse.php",data1).subscribe((res: any) => {
      //console.log("stu list-->"+res);
//       this.studata=res;  
this.courseview=res;     
console.log('success=='+JSON.stringify(res));
      //console.log('success=='+res[0]['name']);
        ///    this.studata= res;
          }, (error: any) => {
            console.log('error='+ JSON.stringify(error));
          });


let data4={};                                             //for categorydropdown
   this.api.myapicall("categorylist.php",data4).subscribe((res: any) => {
     
this.categorylist=res;     
console.log('success=='+JSON.stringify(res));
      //console.log('success=='+res[0]['name']);
        ///    this.studata= res;
          }, (error: any) => {
            console.log('error='+ JSON.stringify(error));
          });
	


    console.log("view jobs");                       //for jobs view

let data5={};
    this.api.myapicall("jobs.php",data5).subscribe((res: any) => {
this.jobdata=res;     
console.log('success=='+JSON.stringify(res));
//alert("data"+JSON.stringify(res));
     // console.log('success=='+res[0]['name']);
        ///    this.studata= res;

          }, (error: any) => {
            console.log('error='+ JSON.stringify(error));
          });	
		  
		  
		   let jobdata1={};
      this.api.myapicall("api/category.php",jobdata1).subscribe((res:any) => {
        this.job_list=res;  
  console.log('success=='+JSON.stringify(res));
 
            }, (error: any) => {
              console.log('error='+ JSON.stringify(error));
            });

            console.log("Eligibility");
            let jobdata2={};
                this.api.myapicall("api/eligibility.php",jobdata2).subscribe((res:any) => {
                  this.eli_list=res;  
            console.log('success=='+JSON.stringify(res));
                      }, (error: any) => {
                        console.log('error='+ JSON.stringify(error));
                      });

                      console.log("City List");
                      let jobdata3={};
                          this.api.myapicall("api/city.php",jobdata3).subscribe((res:any) => {
                            this.city_list=res;  
                      console.log('success=='+JSON.stringify(res));
                                }, (error: any) => {
                                  console.log('error='+ JSON.stringify(error));
                                });
                                console.log(" Experience");
                                let jobdata4={};
                                    this.api.myapicall("api/experience.php",jobdata4).subscribe((res:any) => {
                                      this.experience=res;  
                                console.log('success=='+JSON.stringify(res));
                                          }, (error: any) => {
                                            console.log('error='+ JSON.stringify(error));
                                          });

                                          console.log("State");
                                          let jobdata5={};
                                              this.api.myapicall("api/state.php",jobdata5).subscribe((res:any) => {
                                                this.state=res;  
                                          console.log('success=='+JSON.stringify(res));
                                                    }, (error: any) => {
                                                      console.log('error='+ JSON.stringify(error));
                                                    });
		  
		  
		  
		  
		  
	

 }

 
  
  
  data(form: any) {                                                    //new category
    console.log("testing");
    let apiname="category.php";
    let data={"newcategory":form.cgory,"description":form.des};
    this.api.myapicall(apiname,data).subscribe((res: any) => {
      console.log('success=='+ JSON.stringify(res));
      
    }, (error: any) => {
      console.log('error='+error);
    });
    //console.log("select_category=" + form.cgory);
   // console.log("description=" + form.des);
     this.caseno=7; 
  
  }
   
  
  
  scategory(form:any){                     //sub category
   console.log("testing2");
    let apiname="subcategory.php";
    let data={"category":form.scgory,"subcategory":form.subcatgory};
    this.api.myapicall(apiname,data).subscribe((res: any) => {
      console.log('success=='+ JSON.stringify(res));
      
    }, (error: any) => {
      console.log('error='+error);
    });
  }
  
  
  get(form:any){
    console.log("select_category=" + form.scatgory);
    console.log("subcategory=" + form.ssubcatgory);
    console.log("description=" + form.Brand);
    
  }
 
  next(caseno:any){
    this.caseno=caseno;
    console.log(caseno);
  }
 
  back(){
 
    this.route.navigate(['/front']);
  } 

  jdata(d:any){
  

  let dataa={"jobcategory":d.jc,"eligibilitycerteria":d.kc,"city":d.pc,"jobexperience":d.lc
              ,"state":d.oc,"position":d.mc,"payrate":d.nc,"address":d.qc,"contactdetails":d.rc};
    //this.api.myapicall(apiname,data);
    this.api.myapicall("api/jobs.php",dataa).subscribe((res: any) => {

      console.log('success=='+ JSON.stringify(res));
    //this.caseno=2;
      
    }, (error: any) => {
      console.log('error='+ JSON.stringify(error));
    });
}
  getdata(frm:any){
    console.log("select="+frm.search)
  }
  
  
  search1(){
    console.log("search");
  }


addcollege(form:any){

console.log("testing");

let apiname="addcollege.php";
let data={"state":form.state,"city":form.city,"collegename":form.collegeName,"address":form.collegeAdd,
"url":form.collegeurl,"contact":form.contact};
  //this.api.myapicall(apiname,data);
  this.api.myapicall(apiname,data).subscribe((res: any) => {
    console.log('success=='+JSON.stringify(res));
    
  }, (error: any) => {
    console.log('error='+error);
  });
  //this.caseno=2;




}





addcourse(form:any){

  console.log("testing course module");
  
  let apiname="addcourse.php";
    let data={"coursename":form.coursename,"duration":form.duration,"seats":form.seats
    ,"entranceexam":form.entranceexam,"mode":form.mode,"eligibility":form.eligibility,
    "minpercentage":form.minpercentage,"fees":form.fees
	};
    //this.api.myapicall(apiname,data);
    this.api.myapicall(apiname,data).subscribe((res: any) => {
      console.log('success=='+ JSON.stringify(res));
      
    }, (error: any) => {
      console.log('error='+error);
    });
    //this.caseno=2;
  
  
    
  
  }



  public async mycamera() {
    // Take a photo
    alert("camera testing");
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    alert("case 2");
  }


  home_page(){

    this.route.navigate(['/home']);
  }
  

}

