import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Certifique-se de importar seus estilos personalizados

function App() {
  return (
    <div>
      <nav className="row col-md-10 mx-auto navbar navbar-expand-lg container pt-4 border-bottom">
        <div className="container-fluid col-md-10 mx-auto">
          <a className="navbar-brand" href="#">
            <img src="./midias/image-removebg-preview (1).png" alt="" width="120" height="40" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Destaques">Destaques</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Posts">Posts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Contato">Contato</a>
              </li>
            </ul>
            <form className="d-flex align-items-center">
              <div className="input-group">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" style={{ backgroundColor: '#F4F4F5', border: 'none' }} />
                <span className="input-group-text" style={{ border: 'none', backgroundColor: '#F4F4F5' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
              </div>
            </form>
          </div>
        </div>
      </nav>
      
      <main className="container">
      <section className="p-4 col-md-10 mx-auto sdestaques" id="Destaques">
      <div className="card text-bg-dark rounded-4">
        <div className="position-relative">
          <img src="./midias/RTX-4090-Ti.jpg" className="card-img rounded-4" alt="..." />
          <div className="carddestaque card-img-overlay d-flex flex-column justify-content-end">
            <div className="text-center" style={{ backgroundColor: '#4B6BFB', borderRadius: '6px', width: '8vh' }}>
              <p className="card-title d-flex justify-content-center" style={{ fontSize: '10px' }}>Technology</p>
            </div>
            <p className="card-text">Rumor de RTX 5000 ganha forças; se...</p>
            <p className="card-text"><small>August 09, 2023</small></p>
          </div>
        </div>
      </div>
      </section>


        <section className="row p-4 d-flex justify-content-center" id="Posts">
        <div className="col-md-5">
          <div className="card mb-4" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="./midias/homi.webp" className="img-fluid rounded-start-2" style={{ height: '100%' }} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card mb-4" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="./midias/homi.webp" className="img-fluid rounded-start-2" style={{ height: '100%' }} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card mb-4" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="./midias/homi.webp" className="img-fluid rounded-start-2" style={{ height: '100%' }} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card mb-4" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="./midias/homi.webp" className="img-fluid rounded-start-2" style={{ height: '100%' }} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <div className="row py-5">
          <div className="text-center">
            <button className="btn btn-danger w-25 h-100">Ver mais</button>
          </div>
        </div>
      </main>

      <footer>
        <section className="container border-top col-md-10 mx-auto" style={{ paddingBottom: '20vh', padding: '5vh' }}>
        <div className="row justify-content-center">
          <div className="col-md-3 text-center">
            <div>
              <p style={{ fontWeight: 'bold' }}>Sobre</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div>
              <p style={{ fontWeight: 'bold' }}>Categorias</p>
            </div>
            <div>
              <p>Lifestyle</p>
              <p>Technology</p>
              <p>Travel</p>
              <p>Business</p>
              <p>Economy</p>
              <p>Sports</p>
            </div>
          </div>
          <div className="col-md-3 text-center" id="Contato">
            <div>
              <p style={{ fontWeight: 'bold' }}>Contato</p>
            </div>
            <div>
              <p><a style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }} href="mailto:felipedonato280@gmail.com">Email:</a> felipedonato280@gmail.com</p>
              <p><a style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }} href="tel:5511998661432">Telefone:</a> 55 51 998661432</p>
              <p><a style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }} href="">Instagram:</a> @felipe.dsilveira</p>
              <p><a style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }} href="">LinkedIn:</a> Felipe Donato Silveira</p>
              <p><a style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }} href="">Git Hub:</a> @felipedonato280</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <img src="./midias/image-removebg-preview (1).png" style={{ width: '20vh' }} alt="" />
        </div>

        </section>
      </footer>
    </div>
  );
}

export default App;

