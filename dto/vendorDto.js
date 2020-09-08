"use strict";

class VendorDto {
  
  constructor(vendor){
    
    this.name = vendor.name;
    this.id = vendor.id;
    this.url = vendor.url;
    this.service_email = vendor.service_email;
    this.service_phone = vendor.service_phone;
    this.image = vendor.image;
    this.terms = vendor.terms;
    this.bill_country = vendor.bill_country;
    this.country_of_residence = vendor.country_of_residence;
    this.activation_date = new Date(vendor.activation_date);
  }

}

module.exports = VendorDto;
