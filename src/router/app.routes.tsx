import { Route, Routes } from 'react-router-dom'
import { DefaultLayouts } from '../layouts/DefaultLayouts'
import { Err } from '../pages/Erro'

import { Home } from '../pages/Home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="*" element={<Err />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  )
}
