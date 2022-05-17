import React from 'react'
import Link from 'next/link'

export default function notFound() {
  return (
    <>
    
    <div className="container">
        <div className="alert alert-danger text-center" role="alert" id="notFound">
            <h1 className="fw-bolder alert-heading mb-3 display-5">404</h1>
            <p className="display-5 mb-3">Halaman tidak ditemukan</p>
            <p className="mb-0">Halaman yang anda cari tidak ditemukan, silahkan kembali ke <Link href="/"><a className="alert-link">Beranda</a></Link></p>
        </div>
    </div>

    <style jsx>{`
    
        #notFound {
            margin-top: 5rem;
        }

    `}</style>
    
    </>
  )
}
