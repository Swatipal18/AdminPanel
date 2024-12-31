import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        Swati

        <span className="ms-1">&copy; 2024 creativeLabs.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">tasks@  All rights reserved.</span><br />
        Developed By Swati
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
