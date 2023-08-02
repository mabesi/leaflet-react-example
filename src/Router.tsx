import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainMap from './MainMap';

function Router() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainMap />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;