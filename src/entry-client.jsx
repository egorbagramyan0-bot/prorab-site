import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import { resolveRoute } from './routes'
import './fonts.css'
import './index.css'

// Старые ссылки на политику в формате hash-роутинга
const LEGACY_PRIVACY = ['#/privacy', '#/privacy-policy', '#privacy', '#privacy-policy']

if (LEGACY_PRIVACY.includes(window.location.hash)) {
    window.location.replace('/privacy-policy/')
} else {
    const route = resolveRoute(window.location.pathname)
    const container = document.getElementById('root')
    const app = (
        <StrictMode>
            <App route={route} />
        </StrictMode>
    )

    if (container.hasChildNodes()) {
        // Продакшен: HTML уже отрендерен при сборке
        hydrateRoot(container, app)
    } else {
        // Dev-сервер
        document.title = route.title
        createRoot(container).render(app)
    }
}
