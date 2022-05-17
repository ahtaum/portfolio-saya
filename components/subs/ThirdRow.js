import React from 'react'
import Image from 'next/image'

export default function ThirdRow() {
  return (
    <>
    
    <section id="row-3" className="my-5 text-light">
        <h1 className="text-center mb-5">Project</h1>
        
        <div className="row">
            <div className="col-lg">
                <div class="card">
                    <img src="/images/img3.png" className="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-lg">
                <div class="card">
                    <img src="/images/img3.png" className="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <style jsx>{`

        #row-3 .card {
            border: none;
            background-color: red !important;
        }
        #row-3 .card img {
            object-fit: cover;
            {/* filter: brightness(80%); */}
        }
    
    `}</style>
    
    </>
  )
}
