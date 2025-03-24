import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() loginType: string = 'User';
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Login attempt:', { email: this.email, password: this.password });
    // Add your login logic here
  }
} 