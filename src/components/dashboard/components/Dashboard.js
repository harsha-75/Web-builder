import React, { useState } from 'react'
import Menubar from './components/Menubar'
import { Box, Divider } from '@mui/material'

function Dashboard() {

  const [selectedTab,setSelectedTab] = useState("Home");

  return (
    <Box>
        <Box display="flex">
          <Menubar setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
          <Divider orientation='vertical' flexItem/>
          <Box width="100%">
            hi
          </Box>
        </Box>
    </Box>
    
  )
}

export default Dashboard