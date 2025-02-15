import React from 'react';
import './Skills.css'; // Make sure to include the styles in a separate CSS file

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h2>My Skills (Placeholder page)</h2>

      <div className="skills-list">
        <div className="skill-item">
          <h3>CSS</h3>
          <div className="skill-description">
            <p>
              Expert in writing responsive and modern styles for web interfaces.
            </p>
          </div>

          <div className="skill-level">
            <div className="progress-bar" style={{ width: '90%' }}></div>
            <span>90%</span>
          </div>
        </div>

        <div className="skill-item">
          <h3>CSS Preprocessors</h3>
          <div className="skill-description">
            <p>
              Experienced with SCSS/SASS for scalable and maintainable styles.
            </p>
          </div>

          <div className="skill-level">
            <div className="progress-bar" style={{ width: '80%' }}></div>
            <span>80%</span>
          </div>
        </div>

        <div className="skill-item">
          <h3>CSS Frameworks</h3>
          <div className="skill-description">
            <p>
              Familiar with popular frameworks like Bootstrap and TailwindCSS
              for fast UI development.
            </p>
          </div>

          <div className="skill-level">
            <div className="progress-bar" style={{ width: '75%' }}></div>
            <span>75%</span>
          </div>
        </div>

        <div className="skill-item">
          <h3>CSS Animations</h3>
          <div className="skill-description">
            <p>
              Proficient in creating smooth animations and transitions for
              interactive UI elements.
            </p>
          </div>

          <div className="skill-level">
            <div className="progress-bar" style={{ width: '70%' }}></div>
            <span>70%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
