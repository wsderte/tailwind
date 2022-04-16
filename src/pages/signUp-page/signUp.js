import './signUp.css'
import { HeaderText } from './../../components/header-text/header-text'
import { BsGithub } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { ChallengeButton } from './../../components/challenge-button/challenge-button'
import { EmailButton } from './../../components/email-button/email-button'
import { Input } from '../../components/input/input'
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/sign/in')
    }

    const inputs = ['Name', 'Email Address', 'Password']

    const styles = {
        github: { background: 'black' },
        twitter: {
            background: 'white',
            color: '#1DA1F2',
            'font-weight': 'bold',
        },
        create: { background: 'white', color: 'blue' },
    }

    const loginButtons = [
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
    ]

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
                        />
                    ))}
                </div>

                <HeaderText text="- OR -" />

                <div className="sign-inputs  flex-center">
                    {inputs.map((val) => (
                        <Input placeholder={val} />
                    ))}
                </div>

                <div className="flex-center ">
                    <EmailButton name={'create account'} />
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
