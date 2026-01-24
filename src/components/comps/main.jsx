import "../../App.css"
import {assets} from "../../assets/assets.js"
import Button from "../comps/button.jsx"
import { Calendar, MessageCircle , Check } from "lucide-react"

function Main() {
  return (
    <div className="main">
          <div className="parts text-part">
            <h1 className="text-5xl"><span>Studing</span> Online is now</h1>
            <h1 className="text-5xl">much easier</h1>
            <p className="text-base w-3/4 tracking-wide">TOTC is an interesting platform that will teach you in more an interactive way</p>
            <Button text="Join for free"/>
          </div>

          <div className="parts picture-part">
            <img src={assets.Girl_Standing} alt="girl picture" />

            <div className="notify notification">
              <div className="icon">
              <Calendar size={20} color="white"/>
              </div>
              <div id="div">
                <strong>250k</strong>
                <p>Assisted Student</p>
              </div>
            </div>

            <div className="email notification">
              <div className="icon">
              <MessageCircle size={20} color="white"/>
              </div>
              <div id="div">
                <strong>Congratulations</strong>
                <p>Your admission completed</p>
              </div>
            </div>

            <div className="check notification">
              <div className="icon">
              <Check size={20} color="white"/>
              </div>
              <div id="div">
                <strong>200K Endours</strong>
                <p>A Verified Plateform</p>
              </div>
            </div>

          </div>
        </div>
  )
}

export default Main