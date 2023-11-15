import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  name: string="";
  email: string="";
  number: string="";
  message: string="";

  constructor() {
  }

  ngOnInit() {

  }

  getEmail() {
    console.log(name)
    return "mailto:tenastreats@gmail.com" + 
    "subject=Cake Order" +
    "&body=" + 
    "Name: " + encodeURIComponent(this.name) + "%0A" +
    "Email: " + encodeURIComponent(this.email) + "%0A" +
    "Phone Number: " + encodeURIComponent(this.number) + "%0A" +
    "Message: %0A" + encodeURIComponent(this.message) + "%0A%0A%0A" +
    "PLEASE UPLOAD 3-4 MOTIVATIONAL IMAGES OF YOUR CUSTOM CAKE"
  }
}
