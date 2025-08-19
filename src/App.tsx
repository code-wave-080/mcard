import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'

import HomePage from '@pages/Home'
import TestPage from '@pages/Test'
import CardPage from '@pages/Card'
import SigninPage from '@pages/Signin'
import SignupPage from '@pages/Signup'
import ApplyPage from '@pages/Apply'
import ApplyDone from '@pages/ApplyDone'
import MyPage from '@pages/My'
import Layout from '@layout/Layout'

import PrivateRoute from '@components/auth/PrivateRoute'

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />, // ✅ 모든 페이지 공통 레이아웃
            children: [
                { index: true, element: <HomePage /> },
                { path: 'signin', element: <SigninPage /> },
                { path: 'signup', element: <SignupPage /> },
                { path: 'card/:id', element: <CardPage /> },
                {
                    path: 'apply/:id',
                    element: (
                        <PrivateRoute>
                            <Suspense fallback={<></>}>
                                <ApplyPage />
                            </Suspense>
                        </PrivateRoute>
                    ),
                },
                {
                    path: 'apply/done',
                    element: (
                        <PrivateRoute>
                            <ApplyDone />
                        </PrivateRoute>
                    ),
                },
                {
                    path: 'my',
                    element: (
                        <PrivateRoute>
                            <MyPage />
                        </PrivateRoute>
                    ),
                },
                { path: 'test', element: <TestPage /> },
            ],
        },
    ],
    {
        future: {
            v7_relativeSplatPath: true,
            v7_startTransition: true,
        },
    },
)

function App() {
    return <RouterProvider router={router} />
}

export default App
