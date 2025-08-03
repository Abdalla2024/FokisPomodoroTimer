const Screenshots = () => {
  const screenshots = [
    {
      title: "Dashboard Overview",
      description: "Get a quick overview of your productivity at a glance",
      content: "dashboard"
    },
    {
      title: "Easy Task Entry", 
      description: "Add and organize your tasks quickly with our streamlined interface",
      content: "tasks"
    },
    {
      title: "Detailed Analytics",
      description: "Understand your focus patterns with detailed charts and insights",
      content: "analytics"
    }
  ]

  const renderMockContent = (content) => {
    switch(content) {
      case 'dashboard':
        return (
          <div style={{ padding: '15px', backgroundColor: '#f8f9fa', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>Today's Focus</h3>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4F9CF9' }}>2h 30m</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ backgroundColor: '#e5e7eb', borderRadius: '6px', padding: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', fontWeight: '500' }}>Work Tasks</span>
                  <span style={{ fontSize: '10px', color: '#6b7280' }}>4/6 completed</span>
                </div>
              </div>
              <div style={{ backgroundColor: '#e5e7eb', borderRadius: '6px', padding: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', fontWeight: '500' }}>Learning</span>
                  <span style={{ fontSize: '10px', color: '#6b7280' }}>2/3 completed</span>
                </div>
              </div>
            </div>
          </div>
        )
      case 'tasks':
        return (
          <div style={{ padding: '15px', backgroundColor: '#f8f9fa', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937' }}>Tasks</h3>
              <button style={{ color: '#4F9CF9', fontSize: '12px', background: 'none', border: 'none' }}>+ Add</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
                <div style={{ width: '12px', height: '12px', border: '2px solid #4F9CF9', borderRadius: '3px' }}></div>
                <span style={{ fontSize: '12px' }}>Review project proposal</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: '#4F9CF9', borderRadius: '3px' }}></div>
                <span style={{ fontSize: '12px', textDecoration: 'line-through', color: '#6b7280' }}>Answer emails</span>
              </div>
            </div>
          </div>
        )
      case 'analytics':
        return (
          <div style={{ padding: '15px', backgroundColor: '#f8f9fa', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937', marginBottom: '12px' }}>This Week</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#4F9CF9' }}>14</div>
                <div style={{ fontSize: '10px', color: '#6b7280' }}>Sessions</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#00B884' }}>5h 50m</div>
                <div style={{ fontSize: '10px', color: '#6b7280' }}>Focus Time</div>
              </div>
            </div>
            <div style={{ backgroundColor: '#e5e7eb', borderRadius: '6px', padding: '8px' }}>
              <div style={{ height: '50px', display: 'flex', alignItems: 'end', gap: '3px' }}>
                {[40, 60, 30, 80, 45, 70, 55].map((height, i) => (
                  <div key={i} style={{ backgroundColor: '#4F9CF9', borderRadius: '2px 2px 0 0', flex: 1, height: `${height}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        )
      default:
        return <div style={{ padding: '15px' }}>Content</div>
    }
  }

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
                <div style={{ width: '100%', height: '100%', backgroundColor: '#f8f9fa', borderRadius: '20px', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: '#1f2937', color: 'white', fontSize: '10px', padding: '4px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>9:41</span>
                    <span>📶 🔋</span>
                  </div>
                  {renderMockContent(screenshot.content)}
                </div>
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