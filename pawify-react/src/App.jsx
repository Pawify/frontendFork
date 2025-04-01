import theme from "./constants/themes";
import './App.css'
import catdog404 from '/catdog404.png'

function App() {
  // const { softBeige } = theme.colors;

  return (
      <section className="section-404">
        <div className="container-img-404">
          <img src={catdog404} alt="cat-dog-404" className="img-404" />
        </div>
        <div className="section-div-404">
            <h1 className="h1-404" >404</h1>
            <h2 className="h2-404" >Page not found</h2>
            <p className="p-404" >The page you are looking for no longer exists. Perhaps you can return back to the site's homepage and see if you can find what you are looking for.</p>
            <div className="button-404" >
              <a href="a-404">Back home</a>
            </div>
        </div>
    </section>
  )
}

export default App
