import { Route, Routes } from 'react-router-dom'

import { Err } from '../pages/Erro'
import { Home } from '../pages/Home'
import { LandingPage } from '../pages/LandingPage'
import { RecoverPassword } from '../pages/RecoverPassword'
import { SettingGoal } from '../pages/SettingGoal'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<Err />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="/setting-goal" element={<SettingGoal />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}
