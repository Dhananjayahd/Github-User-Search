import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(obj : NgForm){
    const { email, password } =  obj.form.value;
    // do your checking here..
    this.auth.signUp(email,password)
    .then((res)=>{
      this.router.navigateByUrl('/');
      this.toastr.success("SignUp Success");
    })
    .catch((err)=>{
      console.log(err);
      this.toastr.error("SignUp Failed!");
    })
  }

}
