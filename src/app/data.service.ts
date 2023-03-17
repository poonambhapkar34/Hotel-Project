import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // url='http://localhost:3000'
  userJourney:any
  adminurl= 'http://localhost:3000/admin';
  userurl= 'http://localhost:3000/user';
  ownerurl= 'http://localhost:3000/owner';
  hotelurl= 'http://localhost:3000/hotelDetails';
  getHotelListByOwnerURL= 'http://localhost:3000/OwnerHotelDetails';
  bookingUrl= 'http://localhost:3000/hotelbooking';
 

  getApiData: any;
  editId: any;
  dataId: any;
  postData: any = [];
  postDataObj: any;
  newRegistration: boolean = false;
  ownerName: any;
  hotelListByOwner: any;

  constructor(public http: HttpClient) { }

  //getAdminCall
  getAdminCall(){
    return this.http.get(this.adminurl);
  }
  //postAdmincall
  postAdminCall(data:any){
    return this.http.post(this.adminurl, data)
  }
 //getUserCall
  getUserCall(){
    return this.http.get(this.userurl)
  }
  //postUserCall
  postUserCall(data:any){
    return this.http.post(this.userurl, data)
  }
  //  getOwnerCall
  getOwnerCall(){
    return this.http.get(this.ownerurl)
  }
  //postOwnercall
  postOwnerCall(data:any){
    return this.http.post(this.ownerurl,data)
  }
  //getHotelCall
  getHotelCall(){
    return this.http.get(this.hotelurl)
  }
  //gwtHoteCallById
  getHotelCallById(id:any){
    return this.http.delete(this.hotelurl + "/" + id)

  }
  //postHotelCall
  postHotelCall(data:any){
    return this.http.post(this.hotelurl,data)
  }
 //deletOwnerCall
  deletHotelCall(id:any){
    return this.http.delete(this.hotelurl + "/" + id)
  }
  //putOwnerCall
  putHotelCall(id:any,body:any){
    return this.http.put(this.hotelurl + "/" + id, body)
  }
 //postHotelBookingCall
 postHotelBookingCall(data:any){
  return this.http.post(this.bookingUrl ,data)
 }

 getHotelDetailById(id:number){
  return this.http.get(this.hotelurl +'/' +id)
 }
getHotelListByOwner(){
  return  this.http.get(this.getHotelListByOwnerURL)
}

// postApiCall(data:any){
//  return this.http.post(this.url,data)
// }
// getApiCall(){
//   return this.http.get(this.url + "/" + this.userJourney)
// }
}
