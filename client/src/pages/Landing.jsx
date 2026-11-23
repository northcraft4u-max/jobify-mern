import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';
import MacCursor from '../components/MacCursor';
import '../assets/css/LandingPage.css';

const Landing = () => {
  return (
    <section className='landing-wrapper'>
      <MacCursor />
      <nav className='landing-nav'>
        <Logo />
        <div className='landing-nav-actions'>
          <Link to='/login' className='nav-login-link'>
            Sign In
          </Link>
          <Link to='/register' className='btn'>
            Get Started
          </Link>
        </div>
      </nav>

      <div className='landing-hero'>
        <div className='hero-info'>
          <span className='hero-badge'>Career Pipeline Workspace</span>
          <h1>
            Modern <span>Job Tracking</span> Built for Momentum
          </h1>
          <p>
            Organize every application, track interview pipelines from pending
            to offer, and visualize your weekly application velocity in one
            clean, distraction-free workspace.
          </p>

          <div className='hero-cta-group'>
            <Link to='/register' className='btn hero-btn-primary'>
              Create Free Account
            </Link>
            <Link to='/login' className='hero-btn-secondary'>
              Login / Demo User
            </Link>
          </div>

          <div className='hero-metrics'>
            <div className='metric-item'>
              <strong>3 Stages</strong>
              <span>Pending, Interview, Declined</span>
            </div>
            <div className='metric-item'>
              <strong>Live Charts</strong>
              <span>6-Month Trend Analytics</span>
            </div>
            <div className='metric-item'>
              <strong>Instant</strong>
              <span>Search, Filter & Sort</span>
            </div>
          </div>
        </div>

        <div className='hero-visual'>
          <div className='hero-card-frame'>
            <img src={main} alt='Jobify application dashboard preview' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;