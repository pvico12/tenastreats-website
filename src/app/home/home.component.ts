import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string = "";
  email: string = "";
  number: string = "";
  message: string = "";

  getEmail(): string {
    return "mailto:tenastreats@gmail.com?" +
      "subject=Cake Order Request" +
      "&body=" +
      "Name: " + encodeURIComponent(this.name) + "%0A" +
      "Email: " + encodeURIComponent(this.email) + "%0A" +
      "Phone Number: " + encodeURIComponent(this.number) + "%0A" +
      "Message: %0A" + encodeURIComponent(this.message) + "%0A%0A%0A" +
      "PLEASE UPLOAD 3-4 MOTIVATIONAL IMAGES OF YOUR CUSTOM CAKE";
  }
}
