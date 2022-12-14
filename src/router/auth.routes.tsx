import { Route, Routes } from 'react-router-dom'

import { Err } from '../pages/Erro'
import { Home } from '../pages/Home'
import { LandingPage } from '../pages/LandingPage'
import { RecoverPassword } from '../pages/RecoverPassword'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Err />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}
