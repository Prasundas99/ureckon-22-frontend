import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import './fonts.css'
import './app.css'
import RouteComponent from './Routes'
import bgvideo from './assets/bgVideo.mp4'
import Header from './components/header'
import ToastBar from './components/Toast/ToastBar'

function App () {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* for main container */}
        <video className='videoTag' autoPlay loop muted>
          <source src={bgvideo} type='video/mp4' />
        </video>
        <div
          className='nav1'
          style={{ minHeight: '100vh', height: '100%', opacity: open ? '0.5' : '' }}
        >
          {/* for Navbar */}
          <Header />
          <RouteComponent
            open={open}
            setOpen={setOpen}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
          {/* For the Toast messages that are to be shown */}
          <ToastBar />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
