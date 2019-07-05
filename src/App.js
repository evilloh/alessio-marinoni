import './App.css';
import React, { Component } from 'react';



class Home extends Component {
  constructor(props) {
    super(props)

    this.clickL = (current) => {
      this.setState({ active: current })
      this.setState({ transf: -10 })
    }

    this.closeWind = () => {
      this.setState({
        active: "",
        transf: 20,
        A: false,
        L: false,
        E: false,
        S: false,
        SS: false,
        I: false,
        O: false,
      })
    }

    this.state = {

      modal: 0,
      active: "",
      transf: 0,
      A: false,
      L: false,
      E: false,
      S: false,
      SS: false,
      I: false,
      O: false,
    }


  }



  render() {
    const transf = this.state.transf
    return (
      <div className="papa">
        {this.state.modal === 1 && <div onClick={() => this.setState({ modal: 0 })} className="modalbg">
          <div className="modalimg img1"></div>
        </div>}
        {this.state.modal === 2 && <div onClick={() => this.setState({ modal: 0 })} className="modalbg">
          <div className="modalimg img2"></div>
        </div>}
        {this.state.modal === 3 && <div onClick={() => this.setState({ modal: 0 })} className="modalbg">
          <div className="modalimg img3"></div>
        </div>}
        {this.state.modal === 4 && <div onClick={() => this.setState({ modal: 0 })} className="modalbg">
          <div className="modalimg img4"></div>
        </div>}
        {this.state.modal === 5 && <div onClick={() => this.setState({ modal: 0 })} className="modalbg">
          <div className="modalimg img5"></div>
        </div>}
        {this.state.modal === 6 && <div onClick={() => this.setState({ modal: 0 })} className="modalbg">
          <div className="modalimg img6"></div>
        </div>}
        {this.state.modal === 7 && <div onClick={() => this.setState({ modal: 0 })} className="modalbg">
          <div className="modalimg img7"></div>
        </div>}
        {this.state.modal === 8 && <div onClick={() => this.setState({ modal: 0 })} className="modalbg">
          <div className="modalimg img8"></div>
        </div>}
        {this.state.modal === 9 && <div onClick={() => this.setState({ modal: 0 })} className="modalbg">
          <div className="modalimg img9"></div>
        </div>}
        {this.state.modal === 10 && <div onClick={() => this.setState({ modal: 0 })} className="modalbg">
          <div className="modalimg img10"></div>
        </div>}
        {this.state.modal === 11 && <div onClick={() => this.setState({ modal: 0 })} className="modalbg">
          <div className="modalimg img11"></div>
        </div>}
        {this.state.modal === 12 && <div onClick={() => this.setState({ modal: 0 })} className="modalbg">
          <div className="modalimg img12"></div>
        </div>}
        {this.state.modal === 13 && <div onClick={() => this.setState({ modal: 0 })} className="modalbg">
          <div className="modalimg img13"></div>
        </div>}

        <div className="sopra" onMouseOver={() => this.setState({ A: false, L: false, E: false, S: false, SS: false, I: false, O: false })}></div>
        <div className="App" >
          <div onMouseOver={() => this.setState({ A: true, L: false, E: false, S: false, SS: false, I: false, O: false })} style={{ transform: `translate(0rem, ${this.state.active === "A" ? (this.state.transf) : 0}rem)`, transition: "2s" }}><h2> A</h2></div>
          <div onMouseOver={() => this.setState({ A: false, L: true, E: false, S: false, SS: false, I: false, O: false })} style={{ transform: `translate(0rem, ${this.state.active === "L" ? (this.state.transf) : 0}rem)`, transition: "2s" }}><h2> L</h2></div>
          <div onMouseOver={() => this.setState({ A: false, L: false, E: true, S: false, SS: false, I: false, O: false })} style={{ transform: `translate(0rem, ${this.state.active === "E" ? (this.state.transf) : 0}rem)`, transition: "2s" }}><h2> E</h2></div>
          <div onMouseOver={() => this.setState({ A: false, L: false, E: false, S: true, SS: false, I: false, O: false })} style={{ transform: `translate(0rem, ${this.state.active === "S" ? (this.state.transf) : 0}rem)`, transition: "2s" }}><h2> S</h2></div>
          <div onMouseOver={() => this.setState({ A: false, L: false, E: false, S: false, SS: true, I: false, O: false })} style={{ transform: `translate(0rem, ${this.state.active === "SS" ? (this.state.transf) : 0}rem)`, transition: "2s" }}><h2> S</h2></div>
          <div onMouseOver={() => this.setState({ A: false, L: false, E: false, S: false, SS: false, I: true, O: false })} style={{ transform: `translate(0rem, ${this.state.active === "I" ? (this.state.transf) : 0}rem)`, transition: "2s" }}><h2> I</h2></div>
          <div onMouseOver={() => this.setState({ A: false, L: false, E: false, S: false, SS: false, I: false, O: true })} style={{ transform: `translate(0rem, ${this.state.active === "O" ? (this.state.transf) : 0}rem)`, transition: "2s" }}><h2> O</h2></div>
        </div>
        {this.state.A || this.state.active === "A" ?
          (<div className="A" onClick={() => this.clickL("A")}> <div id="A1"> </div> <div id="A2"> </div> <div id="A3"> </div> </div>)
          :
          null
        }
        {this.state.L || this.state.active === "L" ?
          (<div className="L" onClick={() => this.clickL("L")}> <div id="L1"> </div> <div id="L2"> </div> <div id="L3"> </div> </div>)
          : null
        }
        {this.state.E || this.state.active === "E" ?
          (<div className="E" onClick={() => this.clickL("E")}> <div id="E1"> </div> <div id="E2"> </div> <div id="E3"> </div> </div>)
          : null
        }
        {this.state.S || this.state.active === "S" ? (<div className="S" onClick={() => this.clickL("S")}> <div id="S1"> </div> <div id="S2"> </div> <div id="S3"> </div> </div>)
          : null
        }
        {this.state.SS || this.state.active === "SS" ? (<div className="SS" onClick={() => this.clickL("SS")}> <div id="SS1"> </div> <div id="SS2"> </div> <div id="SS3"> </div> </div>)
          : null
        }
        {this.state.I || this.state.active === "I" ? (<div className="I" onClick={() => this.clickL("I")}> <div id="I1"> </div> <div id="I2"> </div> <div id="I3"> </div> </div>)
          : null
        }
        {this.state.O || this.state.active === "O" ? (<div className="O" onClick={() => this.clickL("O")}> <div id="O1"> </div> <div id="O2"> </div> <div id="O3"> </div> </div>)
          : null
        }


        {this.state.active === "" && <div className="sLogos">
          <a href="https://github.com/evilloh" target="blank"><img src="images/githublogo.png" alt="nodejslogo" /></a>
          <a href="https://linkedin.com/in/alessio-marinoni" target="blank"><img src="images/linkedinlogo.png" alt="nodejslogo" /></a>

        </div>}

        {this.state.active === "A" && <article className="sotto sA">
          <div className="closingBtn" onClick={() => this.closeWind()}><p>|</p><p>|</p></div>
          <h1>I'm Alessio Marinoni, current fullstack Junior Web Developer<br></br> coming from the mountains aiming to the world.</h1>
          <p className="casa">I’m the kind of person who’s not satisfied until he completes his challenges, and then starts to look for a new one. </p>
          <p className="casa"> I might say that I live my daily routine like a video game, carrying out challenges with energy and creativity. </p>
          <p className="casa"> I’ve travelled a lot in the past, from my <a href="https://www.accademiasantagiulia.it/" target="blank">Fine Arts studies in Graphic Design in Brescia</a>, my Erasmus experience in Madrid and a year living in Orlando amongst the most important. </p>
          <p className="casa"> This helped me have a huge adaptability and open mind to everything new has to come to my life.</p>

        </article>}
        {this.state.active === "L" && <article className="sotto sL">
          <div className="closingBtn" onClick={() => this.closeWind()}><p>|</p><p>|</p></div>

          <h2>Self-Taught at first and at the end, IronHack student in the middle</h2>
          <p>I started my web developer career with an interest for the topic studying on my own with online courses while working in a bar. </p>
          <p>I picked up some knowledge but wanted to become a professional web developer, thus I enrolled and completed the IronHack Fullstack web developer bootcamp in Madrid.</p>
          <p>Here's some technologies that I'm currently using:</p>
          <div className="logosCont">
            <img src="images/csslogo.png" alt="csslogo" />
            <img src="images/htmllogo.png" alt="htmllogo" />
            <img src="images/jslogo.png" alt="jslogo" />
            <img src="images/logoreact.png" alt="logoreact" />
            <img src="images/nodejslogo.png" alt="nodejslogo" style={{ width: "14rem" }} />
            <img src="images/mongodblogo.png" alt="mongodblogo" />
          </div>


        </article>}
        {this.state.active === "E" && <article className="sotto sE">
          <div className="closingBtn" onClick={() => this.closeWind()}><p>|</p><p>|</p></div>
          <h2>I love playing and "programming" videogames</h2>
          <h3> Heres a couple of fun examples!</h3>
          <div className="gamesCont">
            <a href="https://evilloh.github.io/In-Pug-We-Trust/" target="blank" className="pug"><div style={{ width: "100%", height: "100%" }}></div></a>
            <a href="https://evilloh.github.io/lillac2018/" target="blank" className="cells"><div style={{ width: "100%", height: "100%" }}></div></a>
          </div>

        </article>}
        {this.state.active === "S" && <article className="sotto sS">
          <div className="closingBtn" onClick={() => this.closeWind()}><p>|</p><p>|</p></div>
          <p className="parrWebs">A couple of more projects I made: <span>Women Say</span>, a project in collaboration with <a href="https://www.linkedin.com/in/maria-gabaldon-rico/">Maria</a> during the IronHack Bootcamp about giving women a way to express experiences around the world. </p>
          <p className="parrWebs marBot"><span>Share</span> was my final project for the Bootcamp, finalist in the IronHack show, which is a storytell website about depression.</p>
          <div className="gamesCont">
            <a href="http://women-say.herokuapp.com" target="blank" className="women"><div style={{ width: "100%", height: "100%" }}></div></a>
            <a href="http://share-story.herokuapp.com" target="blank" className="share"><div style={{ width: "100%", height: "100%" }}></div></a>
          </div>
        </article>}
        {this.state.active === "SS" && <article className="sotto sSS">
          <div className="closingBtn" onClick={() => this.closeWind()}><p>|</p><p>|</p></div>

          <h2>A Graphic Designer background</h2>
          <p>My interest for IT technologies and arts began with an early interest for photoshop followed by photography.</p>
          <p>I had the opportunity to study at <a href="https://www.accademiasantagiulia.it/" target="blank">Accademia delle Belle Arti Santa Giulia di Brescia</a> in the graphic design faculty, where I learnt to use many many softwares of the Adobe package and some 3D drawing with Maya and C4D.  </p>
          <div className="logosCont">
            <img src="images/ps.svg" alt="illustratorlogo" />
            <img src="images/indes.svg" alt="indesignlogo" />
            <img src="images/illu.svg" alt="pslogo" />
          </div>
        </article>}
        {this.state.active === "I" && <article className="sotto sI">
          <div className="closingBtn" onClick={() => this.closeWind()}><p>|</p><p>|</p></div>

          <h2>Here some photographs I made.</h2>
          <div className="photoCont">
            <div onClick={() => this.setState({ modal: 1 })} className="photoIn photoIn1" ></div>
            <div onClick={() => this.setState({ modal: 2 })} className="photoIn photoIn2" ></div>
            <div onClick={() => this.setState({ modal: 3 })} className="photoIn photoIn3" ></div>
            <div onClick={() => this.setState({ modal: 4 })} className="photoIn photoIn4" ></div>
            <div onClick={() => this.setState({ modal: 5 })} className="photoIn photoIn5" ></div>
            <div onClick={() => this.setState({ modal: 6 })} className="photoIn photoIn6" ></div>
            <div onClick={() => this.setState({ modal: 7 })} className="photoIn photoIn7" ></div>
          </div>
        </article>}
        {this.state.active === "O" && <article className="sotto sO">
          <div className="closingBtn" onClick={() => this.closeWind()}><p>|</p><p>|</p></div>

          <h2>Some illustrations and drawings, digital, 3D and traditional.</h2>
          <div className="photoCont">
            <div onClick={() => this.setState({ modal: 8 })} className="photoIn illuIn1" ></div>
            <div onClick={() => this.setState({ modal: 9 })} className="photoIn illuIn2" ></div>
            <div onClick={() => this.setState({ modal: 10 })} className="photoIn illuIn3" ></div>
            <div onClick={() => this.setState({ modal: 11 })} className="photoIn illuIn4" ></div>
            <div onClick={() => this.setState({ modal: 12 })} className="photoIn illuIn5" ></div>
            <div onClick={() => this.setState({ modal: 13 })} className="photoIn illuIn6" ></div>
          </div>
        </article>}


      </div >

    )
  }

}

export default Home;
