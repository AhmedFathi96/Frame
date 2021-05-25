import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any;
  token:any;
  invalidLogin:boolean = false;

  constructor(private userService: UserService , private router:Router) { }

  ngOnInit(): void {
  }

  signIn(user:any){
    this.userService.login(user).subscribe((res)=>{
      this.user = res ;
      /// mafesh token in interface user
      this.token =this.user.token
      localStorage.setItem('token',this.token)
      this.router.navigate(['/projectsAdmin'])

    },(httpError)=>{
      console.log(httpError)
      this.invalidLogin = true;
    })
  }
}
