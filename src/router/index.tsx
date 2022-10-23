import { Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
