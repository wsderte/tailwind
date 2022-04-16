import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home-page/home-page'
import { CardPage } from './pages/card-page/card-page'
import { NavBar } from '../src/components/navbar/navbar'
import { Provider } from 'react-redux'
import { store } from './redux/index'
import { SignUp } from './pages/signUp-page/signUp'
import { CoursePage } from './pages/courses-page/course-page'
import { SignIn } from './pages/signIn-page/signIn'

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
                    <Route path="/courses" element={<CoursePage />}></Route>
                    <Route path="/sign/up" element={<SignUp />}></Route>
                    <Route path="/sign/in" element={<SignIn />}></Route>
                </Routes>
            </Router>
        </Provider>
    )
}

export default App
