import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={<h1>Загрузка...</h1>}>
                <App />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
)
