import '../../App.css';

const Sections = () => {
  return (
    <div className="totc-container">
      <div className="totc-content">
        <h1 className="totc-title">
          <span className="circle-highlight">Everything</span> you can do in a physical
          classroom, <span className="text-teal">you can do with TOTC</span>
        </h1>
        
        <p className="totc-description">
          TOTC’s school management software helps traditional and online schools
          manage scheduling, attendance, payments and virtual classrooms all in
          one secure cloud-based system.
        </p>
        
        <a href="#learn-more" className="totc-link">
          Learn more
        </a>
        
        {/* The small floating green dot */}
        <div className="floating-dot"></div>
      </div>

      {/* Right Image Content */}
      <div className="totc-media">
        <div className="image-wrapper">
          {/* Decorative Background Shapes */}
          <div className="shape-blue-top"></div>
          <div className="shape-green-bottom"></div>
          
          {/* Main Image - Replace the src with your actual image path */}
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Classroom setting with students" 
            className="main-image" 
          />
          
          {/* Play Button Overlay */}
          <button className="play-button" aria-label="Play video">
            <div className="play-icon"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sections;