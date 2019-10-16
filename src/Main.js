import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Frontpage from './components/Frontpage';
import Type from './components/questions/Type';
function Main() {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Frontpage} />
                <Route exact path='/questions/type' component={Type} />
             </div>
        </Router>
    )
}
export default Main;
