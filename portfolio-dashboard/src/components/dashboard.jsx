import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalContacts: 0,
    newMessages: 0,
    resumeViews: 0,
    portfolioVisits: 0
  });

  const [recentContacts, setRecentContacts] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setStats({
        totalContacts: 24,
        newMessages: 5,
        resumeViews: 142,
        portfolioVisits: 1205
      });
      
      setRecentContacts([
        { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Interested in collaboration', time: '2 hours ago' },
        { id: 2, name: 'Sarah Johnson', email: 'sarah@company.com', message: 'Job opportunity discussion', time: '4 hours ago' },
        { id: 3, name: 'Mike Chen', email: 'mike@startup.io', message: 'Project proposal', time: '1 day ago' },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back, Ayush! Here's what's happening with your portfolio.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
          <div className="stat-icon">📬</div>
          <div className="stat-content">
            <h3>{stats.totalContacts}</h3>
            <p>Total Contacts</p>
          </div>
          <div className="stat-trend positive">+12%</div>
        </div>

        <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
          <div className="stat-icon">💌</div>
          <div className="stat-content">
            <h3>{stats.newMessages}</h3>
            <p>New Messages</p>
          </div>
          <div className="stat-trend positive">+{stats.newMessages}</div>
        </div>

        <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
          <div className="stat-icon">📄</div>
          <div className="stat-content">
            <h3>{stats.resumeViews}</h3>
            <p>Resume Views</p>
          </div>
          <div className="stat-trend positive">+8%</div>
        </div>

        <div className="stat-card" data-aos="fade-up" data-aos-delay="400">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>{stats.portfolioVisits}</h3>
            <p>Portfolio Visits</p>
          </div>
          <div className="stat-trend positive">+15%</div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="recent-contacts-section" data-aos="fade-up" data-aos-delay="500">
          <div className="section-header">
            <h2>Recent Contacts</h2>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="contacts-list">
            {recentContacts.map((contact) => (
              <div key={contact.id} className="contact-item">
                <div className="contact-avatar">
                  {contact.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="contact-info">
                  <h4>{contact.name}</h4>
                  <p className="contact-email">{contact.email}</p>
                  <p className="contact-message">{contact.message}</p>
                </div>
                <div className="contact-time">{contact.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="quick-actions-section" data-aos="fade-up" data-aos-delay="600">
          <h2>Quick Actions</h2>
          <div className="quick-actions-grid">
            <button className="action-btn">
              <span className="action-icon">📝</span>
              <span>Update Resume</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">📊</span>
              <span>View Analytics</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">💌</span>
              <span>Reply to Messages</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">⚙️</span>
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;