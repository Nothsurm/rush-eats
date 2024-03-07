import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/layout';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout>HOME PAGE</Layout>} />
            <Route path='/user-profile' element={<span>USER PROFILE PAGE</span>} />
            <Route path='*' element={<Navigate to='/'/>} /> {/* USER TYPES URL THAT DOESN'T EXIST */}
        </Routes>
    )
}

export default AppRoutes;