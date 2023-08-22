import Navbar from 'noautharea/components/Navbar'
import StudentSignup from 'noautharea/components/StudentSignup'
import { Container } from 'noautharea/styles/components/Container'
import React from 'react'
import InstructorSignup from './InstructorSignup'
import { SignupStyle } from 'noautharea/styles/pages/SignupStyle'

const Signup = () => {
    return (
        <SignupStyle>
            <Navbar />
            <Container>
                <div className="signup-content">
                    <div className="row">
                        <InstructorSignup />
                    </div>
                </div>
            </Container>
        </SignupStyle>
    )
}

export default Signup