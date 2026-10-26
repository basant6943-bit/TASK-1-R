import './Hero.css';
import servers from"../assets/servers.png"
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <div className="badge">
         🔥 Don't miss limited-time savings: <span>Savings 20%</span>
        </div>

        <h1>
          Web Hosting <br /> for Everyone
        </h1>


        <div className="cta-container">
          <button className="btn">Get Started</button>
          <div className="price-box">
            <span>Starting at only</span>
            <strong>$4.75/mo*</strong>
          </div>
        </div>
      </div>

      <div className="hero-img">
        <img src={servers} alt="servers" />
      </div>
    </section>
  );
}
  

