import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import UserLayout from './theme/User/User';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <UserLayout>
                                    <Page />
                                </UserLayout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
