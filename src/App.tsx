import { useEffect } from "react"

import './styles.css';

const App = () => {

  useEffect(() => {
    window.location.href = 'http://www.fastecnologia.com.br';
  }, [])

  return (
    <div>
      <h1>Redirecionando...</h1>
    </div>
  )
}

export { App }
