import { Route, Routes } from 'react-router-dom'
import { DefaultLayouts } from '../layouts/DefaultLayouts'
import { CreateClinic } from '../pages/CreateClinic'
import { Err } from '../pages/Erro'

import { Home } from '../pages/Home'
import { ListClinic } from '../pages/ListClinic'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="*" element={<Err />} />
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/create-clinic" element={<CreateClinic />} />
      <Route path="/list-clinic" element={<ListClinic />} />
    </Routes>
  )
}
