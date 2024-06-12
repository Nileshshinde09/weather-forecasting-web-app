import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, AppLayout } from '@/pages'
import App from '@/Initializer/App.jsx'
import { PageNotFound } from '@/components'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route
                path='/'
                element={
                        <AppLayout>
                            <Home />
                        </AppLayout>
                } />
            <Route path='*' element={<PageNotFound />} />
        </Route>
    )
)

export {
    router,
    RouterProvider
}