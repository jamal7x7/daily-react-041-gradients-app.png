import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Gradients App</h1>
  </header>
)

const Items = (props) => (
  <div className='items'>

    <div className="gradients-container" >
    
      <svg width="232" height="256" viewBox="0 0 232 256" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient x1="0%" y1="100%" x2="90.866%" y2="9.361%" id="linearGradient-1">
                <stop stopColor="deeppink" offset="0%" />
                <stop stopColor="orangered" offset="100%" />
            </linearGradient>
        </defs>
        <g id="Symbols" fill="none" fillRule="evenodd" opacity="0.27">
            <g id="gradient" transform="translate(3 3)" fillRule="nonzero" stroke="url(#linearGradient-1)"
            strokeWidth="3">
                <g id="Group-6">
                    <rect id="Rectangle-7-Copy-2" x="-1.5" y="-1.5" width="229" height="229"
                    // <rect id="Rectangle-7-Copy-2" x="-1.5" y="-1.5" width="229" height="253"
                    rx="60" />
                </g>
            </g>
        </g>
      {/* <svg width="198" height="222" viewBox="0 0 198 222" xmlns="http://www.w3.org/2000/svg"> */}
          <defs>
              <linearGradient x1="0%" y1="100%" x2="90.866%" y2="9.361%" id="linearGradient-1">
                  <stop stopColor="deeppink" offset="0%" />
                  <stop stopColor="orangered" offset="100%" />
              </linearGradient>
          </defs>
          <g id="Symbols" fill="none" fillRule="evenodd">
              <g id="gr" fill="url(#linearGradient-1)" fillRule="nonzero">
                  <rect id="Rectangle-7-Copy-13"   x='15.5' y='15.5' width="198" height="198" rx="50" />
                  {/* <rect id="Rectangle-7-Copy-13"   x='15.5' y='15.5' width="198" height="222" rx="50" /> */}
              </g>
          </g>
      {/* </svg> */}
      </svg>

      
    </div>


  </div>
)

const ControleBar = () => (
  <div className='controle-bar'>

      Controle bar

  </div>
)

class MelodyMakerApp extends Component {
  
  state = {
    
  }

  handleClick = () => {
     
    

  }

  componentDidMount() {
    
  
  

  }


      render () {
    return (
      <div className='App-container'>

        <ControleBar />
        <Items 
          handleClick={this.handleClick}
        />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <MelodyMakerApp />

  </div>
)

export default App

