import Footer from './layout/Footer'
import Header from './layout/Header/Header'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from './routes'
import Home from './modules/Home/Home'
import Blogs from './modules/Blogs/Blogs'
import Payments from './modules/Payments/Payments'
import Error from './components/lib/Error'
import PaymentController from './modules/Payments/PaymentController'
import PaymentFormController from './modules/Payments/PaymentFormController'
import CardForm from './components/CardForm'
import PaymentResult from './components/Payment/PaymentResult'
import { Api } from './components/Api'
import { useUser } from './components/UserProvider'
import About from './components/About'
import { useUserRole } from './hooks'

interface IProps {
    children: React.ReactElement
    redirect: string
    isShow?: boolean
}
const PrivateRoute: React.FC<IProps> = ({
    redirect,
    isShow = true,
    children,
}) => {
    const { user } = useUser()

    return user && isShow ? children : <Navigate to={redirect} />
}

function App() {
    const { isLegal } = useUserRole()
    return (
        <>
            <Header />
            <Routes>
                <Route path="" element={<Navigate to={ROUTES.HOME} />} />
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.BLOGS} element={<Blogs />} />
                <Route path={ROUTES.PAYMENTS} element={<Payments />} />
                <Route
                    path={ROUTES.PAYMENT_ITEM}
                    element={<PaymentController />}
                />
                <Route
                    path={ROUTES.PAYMENT_FORM}
                    element={<PaymentFormController />}
                />
                <Route path={ROUTES.PAYMENT_CARD_FORM} element={<CardForm />} />
                <Route
                    path={ROUTES.PAYMENT_RESULT}
                    element={<PaymentResult />}
                />

                <Route>
                    <Route
                        path={ROUTES.API}
                        element={
                            <PrivateRoute
                                redirect={ROUTES.LOGIN}
                                isShow={isLegal}
                            >
                                <Api />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path={ROUTES.ABOUT}
                        element={
                            <PrivateRoute redirect={ROUTES.HOME}>
                                <About />
                            </PrivateRoute>
                        }
                    />
                </Route>

                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
