
import './HeroSection.css'; // Importa el archivo CSS asociado a este componente

function HeroSection() {
  return (
    // La imagen de fondo y los colores de la sección se definirán en HeroSection.css
    <section className="hero-section">
      <div className="hero-inner-container"> {/* abrimos hero-inner-container */}
        <img src="/hero-coffee-image.png" alt="Taza de café y granos" className="hero-coffee-image" />
        <div className="hero-content">
          <h1>BIENVENIDO A</h1>
          <h2>CAFE EL MEJOR</h2>
          <h3>Cafe y postres</h3>
          <button className="hero-button">Start Your Slide</button>
        </div> {}
      </div> {}
    </section>
  );
}

export default HeroSection;