import React, { useState, useCallback, useMemo } from 'react'
import './signIn.css'

import { ChallengeButton } from '../../components/challenge-button/challenge-button'
import { HeaderText } from '../../components/header-text/header-text'
import { BsGithub } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { Input } from '../../components/input/input'
import { EmailButton } from '../../components/email-button/email-button'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthorizedStatus } from '../../redux/user/reducer'

export const SignIn = () => {
    const [email, setemail] = useState(null)
    const [pass, setpass] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.currentUser)

    const updateEmail = useCallback((value) => {
        setemail(value)
        //   console.log('UPDATE EMA')
    }, [])

    const updatePass = useCallback((value) => {
        setpass(value)
        //   console.log('UPDATE PASS', value)
    }, [])

    const handleClick = () => {
        navigate('/sign/up')
    }

    const signClick = useCallback(() => {
        if (email && pass) {
            //   console.log(email, pass)
            //console.log(user)
            //  dispatch(setAuthorizedStatus(true))
            // console.log(authorizedStatus)
            if (email === user.email && pass === user.pass) {
                dispatch(setAuthorizedStatus(true))
                //console.log(authorizedStatus)
                navigate('/')
            }
        }
    }, [email, pass, dispatch, navigate, user.email, user.pass])

    const styles = useMemo(
        () => ({
            github: { background: 'black' },
            twitter: {
                background: 'white',
                color: '#1DA1F2',
                fontWeight: 'bold',
            },
            create: { background: 'white', color: 'blue' },
        }),
        []
    )

    const loginButtons = useMemo(
        () => [
            {
                text: 'Sign in with github',
                icon: <BsGithub size={15} />,
                styled: styles.github,
            },
            {
                text: 'Sign in with twitter',
                icon: <FiTwitter size={15} />,
                styled: styles.twitter,
            },
        ],
        [styles.twitter, styles.github]
    )

    const inputs = useMemo(
        () => [
            { text: 'Email Address', update: updateEmail },
            { text: 'Password', type: 'password', update: updatePass },
        ],
        [updateEmail, updatePass]
    )

    return (
        <div className="signin-wrap">
            <div className="signin-content">
                <HeaderText text="Sign in" />

                <div className=" flex-center">
                    {loginButtons.map((val) => (
                        <ChallengeButton
                            text={val.text}
                            icon={val.icon}
                            backgroundChange={val?.backgroundChange}
                            styled={val.styled}
                            key={val.text + val.icon}
                        />
                    ))}
                </div>

                <HeaderText text="- OR -" />

                <div className="sign-inputs  flex-center">
                    {inputs.map((val) => (
                        <Input
                            placeholder={val.text}
                            type={val.type}
                            update={val.update}
                            key={val.text + val.type}
                        />
                    ))}
                </div>

                <div className="flex-center ">
                    <EmailButton name={'Sign in'} onClick={signClick} />
                </div>

                <div className="sign-text-box flex-center">
                    <div className="sign-a" onClick={handleClick}>
                        Create account
                    </div>
                </div>
            </div>
        </div>
    )
}
