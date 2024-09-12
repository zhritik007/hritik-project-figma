import { useState } from 'react';
import './Tabs.css'; 

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div className="tabs-container">
            <div className="tabs">
                <button onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'active' : ''}>About Me</button>
                <button onClick={() => setActiveTab('experiences')} className={activeTab === 'experiences' ? 'active' : ''}>Experiences</button>
                <button onClick={() => setActiveTab('recommended')} className={activeTab === 'recommended' ? 'active' : ''}>Recommended</button>
            </div>
            <div className="tab-content">
                {activeTab === 'about' && <p>Hello! I'm Dave, your sales rep here from Salesforce...</p>}
                {activeTab === 'experiences' && <p>Experiences Content...</p>}
                {activeTab === 'recommended' && <p>Recommended Content...</p>}
            </div>
        </div>
    );
};

export default Tabs;
