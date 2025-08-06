import tasksImage from '/images/tasks.PNG?url'
import addImage from '/images/add.PNG?url'
import analyticsImage from '/images/analytics.PNG?url'

const Screenshots = () => {
  const screenshots = [
    {
      title: "Task Management", 
      description: "Organize and track your tasks with our intuitive task manager",
      image: tasksImage
    },
    {
      title: "Add New Tasks",
      description: "Quickly add new tasks with our streamlined input interface",
      image: addImage
    },
    {
      title: "Analytics Dashboard",
      description: "Track your productivity with detailed analytics and insights",
      image: analyticsImage
    }
  ]

  return (
    <section id="screenshots" className="screenshots">
      <div className="container">
        <div className="section-header">
          <h2 style={{ color: 'white' }}>See PomodoroBird in Action</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Beautiful, intuitive design that makes managing your productivity a pleasure
          </p>
        </div>
        <div className="screenshots-grid">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="screenshot-card">
              <div className="screenshot-phone">
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: '20px'
                  }}
                />
              </div>
              <h3>{screenshot.title}</h3>
              <p>{screenshot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Screenshots