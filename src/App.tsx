import Footer from './layout/Footer'
import Header from './layout/Header/Header'
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './routes'
import Home from './modules/Home/Home'
import Blogs from './modules/Blogs/Blogs'
import Payments from './modules/Payments/Payments'
import Error from './components/lib/Error'
import PaymentController from './modules/Payments/PaymentController'
import PaymentFormController from './modules/Payments/PaymentFormController'
import CardForm from './components/CardForm'
import PaymentResult from './components/Payment/PaymentResult'

function App() {
    return (
        <>
            <Header />
            <Routes>
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

                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
