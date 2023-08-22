import React from 'react'
import StudentSignup from 'noautharea/components/StudentSignup'
import Navbar from 'noautharea/components/Navbar'
import { Container } from '@material-ui/core'
import { SignupStyle } from 'noautharea/styles/pages/SignupStyle'

const Student = () => {
    return (
        <div className="signup-content">
            <Navbar />
            <SignupStyle>
                <Container>
                    <div className="signup-content">
                        <StudentSignup />
                    </div>
                </Container>
            </SignupStyle>
        </div>
    )
}

export default Student