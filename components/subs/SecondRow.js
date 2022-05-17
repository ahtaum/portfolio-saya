import React from 'react'

export default function SecondRow() {
  return (
    <>
    
    <section id="row-2" className="text-light" style={{ marginTop: '100px' }}>
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <h3 className="mb-3"><i className="bi bi-moon-stars"></i> Tentang Saya</h3>
                <p className="fs-5" style={{ textAlign: 'justify' }}>" hai nama saya Judith Herlambang, saya sangat menyukai dunia programming dan sangat antusias mempelajari teknologi baru. "</p>
            </div>
            <div className="col-lg-4 offset-lg-2 col-md-4 offset-md-2">
                <div className="list-pendidikan mb-5">
                    <h3 className="mb-lg-5 mt-lg-0 mt-5"><i className="bi bi-moon-stars"></i> Pendidikan</h3>

                    <div className="mb-3">
                        <p>2014 - 2017</p>
                        <h5 className="mb-1">SMK Islamic Center Cirebon</h5>
                        <hr></hr>
                    </div>
                    <div>
                        <p>2017 – 2021</p>
                        <h5 className="mb-1">STMIK AKAKOM Yogyakarta</h5>
                        <hr></hr>
                    </div>
                </div>

                <div className="list-pengalaman">
                    <h3 className="mb-5"><i className="bi bi-moon-stars"></i> Pengalaman</h3>
                    <div className="mb-3">
                        <p>2022 ( 2 bulan )</p>
                        <h5 className="mb-1">PT. Visi Teguh Kreatif</h5>
                        <p>mengerjakan bagian frontend pada sebuah website</p>
                        <hr></hr>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
    </>
  )
}
