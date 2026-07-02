import { useTranslation } from 'react-i18next'
import './App.css'

function App() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <h1>{t('logo')}</h1>
      <nav>
        <a href="#">{t('home')}</a> |
        <a href="#">{t('about')}</a> |
        <a href="#">{t('contact')}</a> |
        <button>{t('login')}</button>
      </nav>
    </div>
  )
}

export default App
