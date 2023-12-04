import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='w-full h-screen flex bg-slate-900'>
      <Outlet />
    </div>
  )
}

export default App
