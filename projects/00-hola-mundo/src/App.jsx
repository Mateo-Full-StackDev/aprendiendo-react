
import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

function App() {

  return (
    <section className='App'>
      <TwitterFollowCard
        isFollowing
        userName="midudev"
        name="Miguel Angel Durán"
      />
      <TwitterFollowCard
        isFollowing
        userName="pheralb"
        name="Pablo Hernández"
      />
      <TwitterFollowCard
        isFollowing
        userName="elonmusk"
        name="Elon Musk"
      />
      <TwitterFollowCard
        isFollowing
        userName="vxndez"
        name="Vanderhart"
      />
    </section>
  )
}

export default App
