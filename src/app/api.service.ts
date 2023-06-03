import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend, HttpHeaders, HttpErrorResponse }
 from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

httpOptions = {
    headers: new HttpHeaders({
     //'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  }
  
  myapicall(apiname:any,data:any){
    console.log("myapitesting");
    //apiname="test.php";
  
   //let url="http://testingmobileapp.great-site.net/"+apiname;
    let url="http://localhost/College_api/"+apiname;
    // let url="http://localhost/webScreens/APIs/College_api/api/"+apiname;
  //let url="http://210.212.43.217:8888/sapi/test1/collegelist.php";
    //let url="http://210.212.43.217:8888/sapi/test1.php";
  
    console.log("url="+url);
    console.log("data="+JSON.stringify(data));
 //return    this.http.post(url,data,this.httpOptions);
   return this.http.post(url,data);
  }
  }