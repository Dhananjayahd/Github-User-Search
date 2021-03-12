import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(obj : NgForm){
    const { email, password } =  obj.form.value;
    // do your checking here..
    this.auth.signIn(email,password)
    .then((res)=>{
      this.router.navigateByUrl('/');
      this.toastr.success("SignIn Success");
    })
    .catch((err)=>{
      console.log(err);
      this.toastr.error("SignIn Failed!");
    })
  }

}
