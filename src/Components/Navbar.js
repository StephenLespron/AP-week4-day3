import React, { Component } from 'react'

export default class Header extends Component {
constructor () {
    super()
    this.state = {
        isMenuOpen: false
    }
}

toggleMenu = () => {
    this.setState({
        isMenuOpen: !this.state.isMenuOpen
    })
}

render(){
    return(
        <div>
            <button className="menu-btn button-yellow" onClick={this.toggleMenu}>MENU<svg id="ham" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></button>
        <nav className="nav">
            <img alt="home button" src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" className="home-button"/>
            <ul className={`nav-list ${
                this.state.isMenuOpen ? 'nav-list-opened' : null}`}>
            <li>SERVICES</li>    
            <li>PORTFOLIO</li>    
            <li>ABOUT</li>    
            <li>TEAM</li>    
            <li>CONTACT</li>    
            </ul>
        </nav>
                </div>  
 )
}    

}