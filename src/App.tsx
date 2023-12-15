import './App.scss'
import './index.scss'
import Logo from '../src/assets/logo.png'

function App() {
  return (
    <>
      <nav>
        <div>
          <img src={Logo} alt="" />
        </div>
        <ul>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Linkedin</a>
          </li>
          <li>
            <a href="/">Telegram</a>
          </li>
        </ul>
      </nav>

      <div className="Home">
        <div className="Profile">
            <img src="" alt="" />
        </div>
        <h1>I'm <span>Junior</span></h1>
        <p>UI/UX Designer and Front-End Developer</p>
      </div>

    </>
  )
}

export default App
