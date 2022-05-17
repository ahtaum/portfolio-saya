import React from 'react'
import Link from 'next/link'

export default function ThirdRow() {
  return (
    <>
    
    <section id="row-3" className="my-5 text-light">

        <h1 className="text-center mb-5">Project</h1>
        
        <div className="row">
            <div className="col-lg col-md">
                <div className="card mb-3 mb-lg-0">
                    <img src="/images/img3.png" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder mb-3">Template Siakad</h5>
                        <p className="card-text mb-3">Template Siakad STMIK Akakom Yogyakarta menggunakan Framework Css Bootstrap 4</p>

                        <div className="tech mb-3">
                            <span className="badge bg-light text-dark mx-1">HTML</span>
                            <span className="badge bg-light text-dark mx-1">CSS</span>
                            <span className="badge bg-light text-dark mx-1">Bootstrap 4</span>
                        </div>

                        <Link href="https://ahtaum.github.io/template-siakadAkakom.github.io/">
                            <a className="btn btn-outline-light">GO</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg col-md">
                <div className="card mb-3 mb-lg-0">
                    <img src="/images/img4.png" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder mb-3">Aplikasi Manajemen Skripsi</h5>
                        <p className="card-text mb-3">Aplikasi Manajemen Skripsi Untuk Jurusan Informatika menggunakan Codeigniter 4 di STMIK AKAKOM Yogyakarta.</p>

                        <div className="tech mb-3">
                            <span className="badge bg-light text-dark mx-1">HTML</span>
                            <span className="badge bg-light text-dark mx-1">CSS</span>
                            <span className="badge bg-light text-dark mx-1">Bootstrap 4</span>
                            <span className="badge bg-light text-dark mx-1">PHP</span>
                            <span className="badge bg-light text-dark mx-1">Codeigniter 4</span>
                        </div>
                        
                        <button className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#modal1">Go</button>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Modal */}
        <div className="modal fade" id="modal1" tabindex="-1" aria-labelledby="modal1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content text-dark">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Aplikasi Manajemen Skripsi</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        
                        <p>Username: Admin</p>
                        <p>Password: 123456789</p>

                    </div>
                    <div className="modal-footer">
                        <Link href="https://manajemenskripsiinformatika.000webhostapp.com/">
                            <button type="button" className="btn btn-primary">Kunjungi</button>
                        </Link>

                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Tutup</button>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <style jsx>{`

        #row-3 .card {
            border: none;
            background-color: #2e2d2d;
        }
        #row-3 .card p {
            text-align: justify;
        }
        #row-3 .card img {
            object-fit: cover;
        }
        #row-3 .card .tech {
            padding-right:50px;
        }
    
    `}</style>
    
    </>
  )
}
