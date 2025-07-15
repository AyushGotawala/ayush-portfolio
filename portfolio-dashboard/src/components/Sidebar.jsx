import React from 'react';

const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen, isMobile, className }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'contacts', label: 'Contacts', icon: '📬' },
    { id: 'resume', label: 'Resume', icon: '📄' },
  ];

  const handleMenuClick = (itemId) => {
    setActiveTab(itemId);
    // Close sidebar on mobile after selection
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <aside className={`sidebar ${className || (sidebarOpen ? 'open' : 'closed')}`}>
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">🚀</span>
          {(sidebarOpen || isMobile) && <span className="logo-text">Portfolio Admin</span>}
        </div>
        {isMobile && (
          <button 
            className="mobile-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            ✕
          </button>
        )}
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => handleMenuClick(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            {(sidebarOpen || isMobile) && <span className="nav-label">{item.label}</span>}
          </button>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        {(sidebarOpen || isMobile) && (
          <div className="user-info">
            <div className="user-avatar">AG</div>
            <div className="user-details">
              <span className="user-name">Ayush Gotawala</span>
              <span className="user-role">Developer</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
