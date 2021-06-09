import './App.css';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
    <div>
      <section class = "logo-place">
        <div>
          <header className='header'> 
            <div class = "head-container">
              <img src="logo.png" alt="logo" width="35px" height="35px" /> 
            </div>
          <div className="logo-container">
            <h1>Delicious</h1>
            <h3 className="blog">BEST FOOD BLOG ON THE WEB</h3> 
          </div>
          </header>
        </div>

        <div className="sm-logos">
          <span class = "sm-logos-1">
            <img className="sm-icons" src="fb-icon.png" alt="facebook link"/>
            <img className="sm-icons" src="twit-icon.png" alt="twitter link"/> 
            <img className="sm-icons" src="gp-icon.png" alt="google plus link"/> 
            <img className="sm-icons" src="insta-icon.png" alt="instagram link"/>
            <img className="sm-icons" src="flic-icon.png" alt="flicker link"/> 
            <img className="sm-icons" src="pint-icon.png" alt="pintrest link"/> 
            <img className="sm-icons" src="rss-icon.png" alt="rss link"/> 
            <img className="sm-icons" src="mail-icon.png" alt="email link"/> 
          </span>
        </div>
      </section>
    </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
    <div>  
      
      <div class="title">
        <h2>Chocolate Pizza</h2>
        <h6>
            <span>Posted on 15 Dec 2013 / Desserts</span>
            <span><img src="print-icon.png" alt="print page" /> Print</span>
        </h6>
      </div>

      <div>
          <img src="choco-pizza.png" alt="gross pizza" />
      </div>
    
      <article class="content">
          <p>
              For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. 
              Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. 
              Add salt with one or two stirs, set aside and let cool completely.
          </p>
          <p>
              Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm.
              Whisk in the egg yolks. Set mixture in the fridge and wait until the fig micture is cooled.
          </p>
          <p>
              Using an ice cream machine, pour liquids into the frozen basin and process according to the manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding masacarpone, fig jam mixture, and the nuts
              Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.
          </p>
      </article>  
    </div>
    )
  }
}

class ImageSection extends Component {
  render() {
    return (
      <div>
        <p>Image Section</p>
      </div>
    )
  }
}

class IngredientItem extends Component {
  render() {
    return (
      <li>
        <input type="checkbox"/> {this.props.ammount} {this.props.name}
      </li>
    )
  }
}


class IngredientList extends Component {
  render() {
    return (
      <div>
        
        <div className="ingredient-list">
          <ul>
              <IngredientItem amount ="1 1/2 Cups" name = "Milk" />
              <IngredientItem amount = "1/2 Cup" name = "Mascarpone" />
              <IngredientItem amount = "1/2 tsp" name = "Pink Salt" />
              <IngredientItem amount = "1 lb" name = "Black Mission Figs" />
              <IngredientItem amount = "1/2 cup" name = "Brown Sugar" />
              <IngredientItem amount = "2-4 tbsp" name = "water" />
          </ul>
          <ul>
              <IngredientItem amount = "1 1/2 cups" name = "heavy cream" />
              <IngredientItem amount = "1/3 cups" name = "granulated sugar" />
              <IngredientItem amount = "2" name = "egg yolks" />
              <IngredientItem amount = "1" name = "lemon, juiced" />
              <IngredientItem amount = "2 tbsp" name = "butter" />
              <IngredientItem amount = "1 cup" name =  "honey roasted pecans, roughly chopped" />
          </ul>
      </div>
    
      <div class="author">
        <img src="van-pic.png" alt="author" />
            <section>
                <h5>Vanessa Stevenson</h5>
                <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
        </section>
        <button type="button">Share Recipe</button>
      </div>
    </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        <section className="footer-logo">
            <span className="footer-line"></span>
            <img src="small-logo.png" alt="logo" />
            <span class="footer-line"></span>
        </section>
        <p>Delicious © 2013 • All Rights Reserved.</p>
        <p>Proudly published with Ghost.</p>
      </div>
    )
  }
}





function App() {
  return (
    <div>
      <Header />
      <Main />
      <ImageSection />
      <IngredientList />
      <Footer />
    </div>
  );
}

export default App;
