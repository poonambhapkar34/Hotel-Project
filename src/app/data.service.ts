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
  hotelDetailsurl= 'http://localhost:3000/hotelDetails';
  bookingUrl= 'http://localhost:3000/hotelbooking';
 

  HotelByIdApiData: any;
  editId: any;
  dataId: any;
  postData: any = [];
  postDataObj: any;
  newRegistration: boolean = false;
  ownerName: any;
  hotelListByOwner: any;
  hotelDetailId: any;
  hotelJourney!: string;

  constructor(public http: HttpClient) { }

  //getAdminCall
  getAdminDataApiCall(){
    return this.http.get(this.adminurl);
  }
  //postAdmincall
  adminPostApiCall(data:any){
    return this.http.post(this.adminurl, data)
  }
 //getUserCall
  getUserApiCall(){
    return this.http.get(this.userurl)
  }
  //postUserCall
  postUserApiCall(data:any){
    return this.http.post(this.userurl, data)
  }
  //  getOwnerCall
  getOwnerApiCall(){
    return this.http.get(this.ownerurl)
  }
  //postOwnercall
  postOwnerCall(data:any){
    return this.http.post(this.ownerurl,data)
  }
  //getHotelCall
  getHotelDetailsApiCall(){
    return this.http.get(this.hotelDetailsurl)
  }

  //postHotelCall
  postHotelDetailsApiCall(data:any){
    return this.http.post(this.hotelDetailsurl,data)
  }
 //deletOwnerCall
  deletHotelById(id:any){
    return this.http.delete(this.hotelDetailsurl + "/" + id)
  }
  //patch hotel details
  patchHotelDetailsApiCall(hotelDetails: any):any {
   return this.http.patch(this.hotelDetailsurl + "/" + this.hotelDetailId , hotelDetails )
  }

 //postHotelBookingCall
 postHotelBookingCall(data:any){
  return this.http.post(this.bookingUrl ,data)
 }

 getHotelDetailById(id:number){
  return this.http.get(this.hotelDetailsurl +'/' +id)
 }

}
