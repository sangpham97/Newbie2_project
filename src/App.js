import './styles.css'
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Services from '../src/pages/Services'
import Gallery from '../src/pages/Gallery'
import Error from '../src/pages/Error'
import Feature from '../src/pages/Featured'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' to component={Home} exact />
        <Route path='/About' to component={About} exact />
        <Route path='/Gallery' to component={Gallery} exact />
        <Route path='/Feature/:user' to component={Feature} exact />
        <Route path='/Services' to component={Services} exact />
        <Route to component={Error} />
      </Switch>
      <Login />
      <Register />
      <Footer />
    </>
  )
}
