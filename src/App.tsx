import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ContainerResumeCv } from './features/curriculum/containers/ContainerResumeCv';

export const App = () => {

  return (
    <>
      <Header />
      <main>
        <ContainerResumeCv />
      </main>
      <Footer />
    </>
  )
}

export default App
