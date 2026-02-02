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
          TOTC is school management software helps traditional and online schools
          manage scheduling, attendance, payments and virtual classrooms all in
          one secure cloud-based system.
        </p>
        
        <p className="totc-link underline text-sm">
          Learn more
        </p>
        
        <div className="floating-dot"></div>
      </div>

      <div className="totc-media">
        <div className="image-wrapper">
          <div className="shape-blue-top"></div>
          <div className="shape-green-bottom"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Classroom setting with students" 
            className="main-image" 
          />
          
          <button className="play-button" aria-label="Play video">
            <div className="play-icon"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sections;