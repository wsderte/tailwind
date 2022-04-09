import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home-page/home-page'
import { CardPage } from './pages/card-page/card-page'
import { NavBar } from '../src/components/navbar/navbar'
import { Provider } from 'react-redux'
import { store } from './redux/index'
import { SignUp } from './pages/signUp-page/signUp'

import './App.css'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <NavBar />
                <Routes>
                    <Route
                        path="/course/:header"
                        element={<CardPage />}
                    ></Route>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/courses" element={<CardPage />}></Route>
                    <Route path="/sign" element={<SignUp />}></Route>
                </Routes>
            </Router>
        </Provider>
    )
}

export default App
