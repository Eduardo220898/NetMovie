import {Route, Routes} from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'

function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Series" element={<Series />} />
        </Routes>
    )
}

export default Router 