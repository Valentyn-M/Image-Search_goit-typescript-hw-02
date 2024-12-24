import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import Modal from 'react-modal';

// Установка кореневого елемента для бібліотеки React Modal.
Modal.setAppElement('#root');

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
