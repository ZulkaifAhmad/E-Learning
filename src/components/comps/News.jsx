import { assets } from '../../assets/assets'
import "../../App.css"

function News() {
  return (
    <div className='News w-full min-h-100'>
        <h1 className='text-center text-2xl font-light'>Lastest News and Resources</h1>
        <p id='news-des' className='text-center text-base'>See the developments that have occurred to TOTC in the world</p>

        {/* Changed: Added 'flex-col' for mobile and 'md:flex-row' for laptop */}
        <div className="news-updates flex flex-col md:flex-row justify-center gap-10 md:gap-16">
        
        {/* News Left: Full width on mobile via CSS media query */}
        <div className="news-left cursor-pointer flex flex-col gap-2">
          <img src={assets.laptop} alt="" />
          <p id='news-btn'>News</p>
          <strong>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</strong>
          <p id='News-content' className='text-sm'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
          <p className='text-sm underline cursor-pointer active:text-blue-400'>Read more</p>
        </div>

        {/* News Right: Full width on mobile via CSS media query */}
        <div className="news-right flex flex-col gap-6 justify-start items-start">
          
          <div className="news-portion flex items-start cursor-pointer gap-3">
            <img src={assets.Girl_watching} alt="" />
            <div className="span flex flex-col gap-2">
            <strong>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</strong>
            <p className='text-sm'>Class Technologies Inc., the company that created Class,...</p>
            </div>
          </div>

          <div className="news-portion cursor-pointer flex items-start gap-3">
            <img src={assets.Watching_laptop} alt="" />
            <div className="span flex flex-col gap-2">
            <strong>Zoom is earliest investors are betting millions on a better Zoom for schools</strong>
            <p className='text-sm'>Zoom was never created to be a consumer product. Nonetheless, the...</p>
            </div>
          </div>

          <div className="news-portion cursor-pointer flex items-start gap-3">
            <img src={assets.video_call} alt="" />
            <div className="span flex flex-col gap-2">
            <strong>Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</strong>
            <p className='text-sm'>This year, investors have reaped big financial returns from betting on Zoom...</p>
            </div>
          </div>

        </div>

        </div>

    </div>
  )
}

export default News