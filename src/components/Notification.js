import React from 'react'
import { Alert, Box } from '@mui/material'

const Notification = ({ info }) => {
  if (!info.message) {
    return null
  }

  const notificationStyle = {
    position: 'fixed',
    top: '1rem',
    left: 0,
    right: 0,
    zIndex: 9999,
    margin: '3rem',
  }

  if (info.type === 'error') {
    return (
      <Box sx={notificationStyle}>
        <Alert severity="error">{info.message}</Alert>
      </Box>
    )
  }

  return (
    <Box sx={notificationStyle}>
      <Alert severity="success">{info.message}</Alert>
    </Box>
  )
}

export default Notification
