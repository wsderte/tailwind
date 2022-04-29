import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'
import { NavBar } from '../src/components/navbar/navbar'
import { Provider } from 'react-redux'
import { store } from './redux/index'
import { AnimatedNav } from './components/animated-navigation/animated-nav'

function App() {
    //<AnimatedNav />
    return (
        <Provider store={store}>
            <Router>
                <NavBar />
                <AnimatedNav />
            </Router>
        </Provider>
    )
}

export default App

/*
 
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

*/
