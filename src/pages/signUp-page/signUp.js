import './signUp.css'
import { HeaderText } from './../../components/header-text/header-text'
import { ChallengeButton } from './../../components/challenge-button/challenge-button'
import { EmailButton } from './../../components/email-button/email-button'
import { Input } from '../../components/input/input'
import { useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { setCurrentUser } from '../../redux/user/reducer'
import { useDispatch } from 'react-redux'
import { BsGithub } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'

export const SignUp = () => {
    const [name, setname] = useState(null)
    const [email, setemail] = useState(null)
    const [pass, setpass] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const updateName = useCallback((value) => {
        setname(value)
    }, [])

    const updateEmail = useCallback((value) => {
        setemail(value)
    }, [])

    const updatePass = useCallback((value) => {
        setpass(value)
    }, [])

    const handleClick = () => {
        navigate('/sign/in')
    }

    const createClick = useCallback(() => {
        if (name && email && pass) {
            //  console.log('can create account')
            // TODO Axios fetch
            dispatch(
                setCurrentUser({
                    name,
                    email,
                    pass,
                })
            )
            navigate('/sign/in')
        }
    }, [name, email, pass, dispatch, navigate])

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
        [styles.github, styles.twitter]
    )

    const inputs = useMemo(
        () => [
            { text: 'Name', update: updateName },
            { text: 'Email Address', update: updateEmail },
            { text: 'Password', type: 'password', update: updatePass },
        ],
        [updateName, updateEmail, updatePass]
    )

    return (
        <div className="sign-wrap">
            <div className="sign-content">
                <HeaderText text="Create Account" />

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
                    <EmailButton
                        name={'create account'}
                        onClick={createClick}
                    />
                </div>

                <div className="sign-text-box flex-center">
                    Already have an account?
                    <div className="sign-a" onClick={handleClick}>
                        Sign in
                    </div>
                </div>
            </div>
        </div>
    )
}
