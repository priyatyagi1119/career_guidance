import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})

export class UserPage implements OnInit {

 userform:any; 
 course:any;
 city:any;
 facilities:any; 
 fees:any; 
 add:any; 
 mode:any; 
 category:any; 
 course_list:any;  
 city_list:any; 
 facility_list:any; 
 mode_l:any; 
 fees_l:any; 
 category_list:any;
 
 formdata:any;
search:any;
courses:any;//for seacrh box
 
caseno:any;
caseno2:any;
  constructor(private api:ApiService,private route:Router,private route1:ActivatedRoute) {
    console.log("user page<br/>");
    this.caseno2=this.route1.snapshot.params['data'];
    console.log('caseno is'+this.caseno2);
    this.caseno=this.caseno2;
   
   
   
    this.userform=new FormGroup({
   
      course:new FormControl(),
      city:new FormControl(),
      mode:new FormControl(),
      category:new FormControl(),
      fees:new FormControl(),
      facilities:new FormControl(),
      add:new FormControl()
            });
			
			
			//for search 
			
			this.formdata= new  FormGroup({
      search:new FormControl(''),
    });
	console.log("get courses list");
let data11={};
    this.api.myapicall("search.php",data11).subscribe((res: any) => {
      //console.log("stu list-->"+res);
//       this.studata=res;  
this.courses=res;     
console.log('success=='+res);
      //console.log('success=='+res[0]['name']);
        ///    this.studata= res;
          }, (error: any) => {
            console.log('error='+ JSON.stringify(error));
          });
	
	

            
            console.log("get course list");
    let data={};
    this.api.myapicall("course_p.php",data).subscribe((res: any) => {
    this.course_list=res;  
console.log('success=='+JSON.stringify(res));
          }, (error: any) => {
            console.log('error='+ JSON.stringify(error));
          });

          console.log("get city list");
          let data2={};
              this.api.myapicall("city.php",data2).subscribe((res: any) => {
                this.city_list=res;  
          console.log('success=='+JSON.stringify(res));
                    }, (error: any) => {
                      console.log('error='+ JSON.stringify(error));
                    });

                    console.log("get facility list");
                    let data3={};
                        this.api.myapicall("facilities.php",data3).subscribe((res: any) => {
                          this.facility_list=res;  
                    console.log('success=='+JSON.stringify(res));
                              }, (error: any) => {
                                console.log('error='+ JSON.stringify(error));
                              });

                              console.log("mode");
                              let data4={};
                                  this.api.myapicall("mode.php",data4).subscribe((res: any) => {
                                    this.mode_l=res;  
                              console.log('success=='+JSON.stringify(res));
                                        }, (error: any) => {
                                          console.log('error='+ JSON.stringify(error));
                                        });

                                        console.log("Fees");
                                        let data5={};
                                            this.api.myapicall("fees.php",data5).subscribe((res: any) => {
                                              this.fees_l=res;  
                                        console.log('success=='+JSON.stringify(res));
                                                  }, (error: any) => {
                                                    console.log('error='+ JSON.stringify(error));
                                                  });

                                                  console.log("Category list");
                                        let data6={};
                                            this.api.myapicall("category1.php",data6).subscribe((res: any) => {
                                              this.category_list=res;  
                                        console.log('success=='+JSON.stringify(res));
                                                  }, (error: any) => {
                                                    console.log('error='+ JSON.stringify(error));
                                                  });

    
  }
 
 
  
  ngOnInit() {
    }
 
 que(data1:any){ 

let dataa={"Course":data1.course,"City":data1.city,"Facilities":data1.facilities,
"Fees":data1.fees,"Mode":data1.mode,"Category":data1.category,"Others":data1.add};   
this.api.myapicall("insert_p.php", dataa).subscribe((res: any) => {
  console.log('success=='+ JSON.stringify(res));
}, (error: any) => {
  console.log('error='+ JSON.stringify(error));
});

 }
  
}
