import React from 'react';
import { Link } from "react-router-dom";

function Register() {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h2>EMR Register</h2>
              </div>
              <div class="container">
                <form>
                  <div class="form-group">
                    <br></br>
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <Link to="/login"><button class="btn btn-primary">Submit</button></Link>
                  <span> </span>
                  <Link to="/"><button class="btn btn-primary">Cancel</button></Link>
                  <br />
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;