import React, { Component } from 'react';
import './Assets/css/default.min.css';
import './Assets/css/typography/fonts.css';


class App extends Component {
  render() {
    return (

    <body>

      <div className="row header p-xl-5">
    <div>
      <h1 id="heading-name">Kiandra Plummer</h1>
      <h3 id="heading-subname">Design Professional</h3>
    </div>
  </div>

      <div className="sidenav row">

        <div id="social-media" className="row flex-column">
            <a href="https://twitter.com/kspmultimedia" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2x"></i></a>
            <a href="https://codepen.io/kspmultimedia/" target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/kiandraplummer/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x"></i></a>
          </div>


        {/*BEGINNING of scrollspy */}

              <div className="col-sm-3 row" id="spy">
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item"><a className="nav-link active" href="#scroll1">ABOUT</a></li>
                  <li className="nav-item"><a className="nav-link" href="#scroll2">WORK</a></li>
                    <li className="nav-item"><a className="nav-link" href="#scroll4">INTERESTS</a></li>
                </ul>
              </div>

              <div id="message" className="row">
        <a href="https://kiandra-plummer.myportfolio.com/contact" target="_blank" rel="noopener noreferrer"  className="message"><i className="fa fa-paper-plane fa-1x"><span className="message"> MESSAGE ME</span></i></a>
                </div>


  </div> {/* end of SIDENAV */}

  <div className="main">

    <div className="col-sm-9 scrollspy-example" data-spy="scroll" data-target="#spy">
      <div id="scroll1">
          <div className="about container">
            <div className="row">

                <div id="about_icon_cont" className="col-md-3">
                  <h4 id="abt_icon_pic">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/435043/nerd_icon_orange.png" alt="test" id="abt_icon_pic" className="img-responsive" width="400" />
                  about</h4>
          <div>

          </div>

                 </div>
                      <div className="col-md-9">

                        <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">Fluid jumbotron</h1>
        <p className="lead">This is a modified jumbotron that occupies
                        the entire horizontal space of its parent.</p>
                        <ul>
                          <li>This is the first bullent point.</li>
                          <li>This is the first bullent point.</li>
                          <li>This is the first bullent point.</li>
                          </ul>
                          <hr />
                          <a class="btn btn-primary btn-lg" href="https://kiandra-plummer.myportfolio.com/contact" target="_blank" rel="noopener noreferrer" role="button">Drop me a line!</a>
      </div>
    </div>

                 </div>


         </div>


        </div>





</div>

      <div id="scroll3">
          <h2>Second Section</h2>
          <p>
            During Compile time, the compiler converts the source code into Microsoft Intermediate Language (MSIL). Microsoft Intermediate Language (MSIL) are CPU-Independent set of instructions that can be effectively converted to the native code. Now with the help
            of JIT compiler, IL code can be executed on any computer architecture supported by the JIT compiler.
          </p>
        </div>

        <div id="scroll4">
            <h2>Third Section</h2>
            <p>
              During Compile time, the compiler converts the source code into Microsoft Intermediate Language (MSIL). Microsoft Intermediate Language (MSIL) are CPU-Independent set of instructions that can be effectively converted to the native code. Now with the help
              of JIT compiler, IL code can be executed on any computer architecture supported by the JIT compiler.
            </p>
          </div>

{/* end of body content */}</div>
{/* end of MAIN */} </div>






</body>

    );
  }
}

export default App;
