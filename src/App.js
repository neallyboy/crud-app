import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <div class="container">
            <h2>Login</h2>
            <p>Please fill in your credentials to login.</p>
            <form action="" method="post">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" name="username" class="form-control" value=""></input>
                </div>    
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" name="password" class="form-control"></input>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Login"></input>
                </div>
                <p>Don't have an account. <a href=" ">Sign up now</a>.</p>
            </form>
        </div>
    </div>
  );
}

export default App;
