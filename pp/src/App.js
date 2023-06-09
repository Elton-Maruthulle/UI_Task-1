
import './App.css';

function App() {
  return (
    <div class="App"> 
    <containers>
    
    <body>
    <div class="container1">

      {/*Left_side*/}
      <div class="left-side">
      
      <div>
      <img src={ require('./images/companyLogo.png')} class='companyLogo'/>  
      </div>
      <div class = 'leftsidetext'>
        <p>Find 3D Objects Mockups <br></br>and Illustrations here.</p>
      </div>
      
      <img src={ require('./images/background.png')} class='social_logo1'/>  
      

      </div>

      <div class="right-side">
        <div class='right-side-content'>
          <div class="language-dropdown">
            <button class="dropdown-button">English</button>
          </div>
          <div class="additional-content">
            <h1 class='Create_Account'>Create account</h1>
            <div class="button-container">
              <button><a href='#' ><p class='socialboder'><img src={ require('./images/googlelogo (2).png')} id='social_logo'/> Signup with Google</p></a></button>
              <button><a href='#'><p  class='socialboder'><img src={ require('./images/facebooklogo (2).png')} id='social_logo'/> Signup with Facebook</p></a></button>
            </div>

            <div class='OR'>
            <p>- OR -</p>
            </div>

              {/*the form starts here*/}

              <div >

              <form class='foarm'>
              <label>
                <input type="text" placeholder='Full Name'  class="form-input"/>
              </label>
              <label>
                <input type="email" placeholder='Email Address'  class="form-input"/>
              </label>
              <label>
                <input type="password" placeholder='Password'  class="form-input"/>
              </label>
            </form>
              
              </div>
              {/*the form ends here*/}

          </div>

              {/*Create an account button*/}
              <div class='button-container1' >
              
              <form >
              <label>
              <input type="submit" value='Create Account' class='button'/>
              </label>

              </form>
              </div>


                {/*Login Link*/}
              <div class='login'>
                <p >Already have an account? <a href='#'>Login</a></p>
              </div>


    </div>
      </div>
    </div>
  </body>
  </containers>

    </div>
  );
}

export default App;
