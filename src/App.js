import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
    <div>
      <div>
        <header className='header'> 
          <div>
            <img src="logo.png" alt="logo"/> 
          </div>
        <div className="logo">
          <span>Delicious
            <p className="blog"> BEST FOOD BLOG ON THE WEB</p> 
          </span>
        </div>
        </header>
      </div>

      <div className="buttonList"> 
        <img className="sm-icons" src="fb-icon.png" alt="facebook link"/>
        <img className="sm-icons" src="twit-icon.png" alt="twitter link"/> 
        <img className="sm-icons" src="gp-icon.png" alt="google plus link"/> 
        <img className="sm-icons" src="insta-icon.png" alt="instagram link"/>
        <img className="sm-icons" src="flic-icon.png" alt="flicker link"/> 
        <img className="sm-icons" src="pint-icon.png" alt="pintrest link"/> 
        <img className="sm-icons" src="rss-icon.png" alt="rss link"/> 
        <img className="sm-icons" src="mail-icon.png" alt="email link"/> 
      </div>
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
          <img src="choco-pizza.png" alt="picture of gross" />
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

class IngredientList extends Component {
  render() {
    return (
      <div>
        
        <div className="ingredient-list">
          <ul>
              <li>1 1/2 cups milk</li>
              <li>1/2 cup mascarpone</li>
              <li>1/2 tsp pink salt</li>
              <li>1 lb Black Mission Figs</li>
              <li>1/2 cup brown sugar</li>
              <li>2-4 tbsp water</li>
          </ul>
          <ul>
              <li>1 1/2 cups heavy cream</li>
              <li>1/3 granulated sugar</li>
              <li>2 egg yolks</li>
              <li>1 lemon, juiced</li>
              <li>2 tbsp butter</li>
              <li>1 cup honey roasted pecans, roughly chopped</li>
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
