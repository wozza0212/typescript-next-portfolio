import { FunctionComponent } from "react"
import Link from "next/link"

const Hero: FunctionComponent = () => {
    return (
        <div>
        <h2>Combining Design with Application</h2>
        <p>I'm A</p>
        <h2>Full Stack Software Engineer</h2>
        <div>
            <p>
                This website is being created with the sole purpose to help <Link href='/about'>me</Link> develop my skills as a softare engineer, play with some design features
                that I dont always get to do at work, and hopefully to help teach and inspire others to begin or develop their software engineer career
            </p>
        </div>
        </div>
    )
}
export default Hero