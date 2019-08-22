import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <h2>Login</h2>
            <p>Please fill in your credentials to login.</p>
            <form action="" method="post">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" name="username" class="form-control" value=""/>
                </div>    
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" name="password" class="form-control"/>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Login"/>
                </div>
                <p>Don't have an account. <a href=" ">Sign up now</a>.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
