import {Book, Footer, Logos} from './components'
import {Testimonials, TopDestinations, Services, Header} from './pages'

const App = () => {
  return (
    <div className='font-primary'>
      <Header />
      <Services />
      <TopDestinations />
      <Book />
      <Logos />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App