
import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

function App() {

  return (
    <section className='App'>
      {/* <span>Who to follow</span> */}
      <TwitterFollowCard
        
        userName="midudev"
        name="Miguel Angel Durán"
      />
      <TwitterFollowCard
        
        userName="pheralb"
        name="Pablo Hernández"
      />
      <TwitterFollowCard
        
        userName="elonmusk"
        name="Elon Musk"
      />
      <TwitterFollowCard
        
        userName="vxndez"
        name="Vanderhart"
      />
    </section>
  )
}

export default App
