import "../../App.css"
import Success_Count from './success_count'

function Success() {
  return (
    <div className='success-story'>
        <h1 className="heading text-center text-4xl">Our Success</h1>
        <div className="w-full flex justify-center items-center">
        <p className="text-center text-base w-1/2">Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
        </div>
        <div className="rappe_success_count flex justify-evenly items-center gap-5">
            <Success_Count per="50+" text="Students" />
            <Success_Count per="75%" text="Total Success" />
            <Success_Count per="35" text="Main Questions" />
            <Success_Count per="25" text="Cheif expert" />
            <Success_Count per="16" text="Years of Experience" />
        </div>
    </div>
  )
}

export default Success