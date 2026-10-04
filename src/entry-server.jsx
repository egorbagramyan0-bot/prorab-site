import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export { ROUTES, NOT_FOUND } from './routes'
export { renderHead } from './seo'
export { SITE } from './data/site'

export function render(route) {
    return renderToString(
        <StrictMode>
            <App route={route} />
        </StrictMode>
    )
}
