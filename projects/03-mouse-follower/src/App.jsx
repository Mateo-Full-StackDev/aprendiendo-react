import { useEffect, useState } from 'react'
const FollowMouse = () => {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', clientX, clientY);
      console.log(event);
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {

      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }


  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: '-25px',
        top: '-25px',
        width: '50px',
        height: '50px',
        transform: `translate(${position.x}px, ${position.y}px)`

      }}
      />
      <h1>Mouse Follower</h1>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}
function App() {

  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
