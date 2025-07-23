import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Mainroute from './Mainroute.jsx'
import Footer from './Component/Global/Footer.jsx'
import Nav from './Component/Global/Nav.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Nav/>
<Mainroute/>
<Footer/>
</BrowserRouter>
)
