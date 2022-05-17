import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function FirstRow() {
  return (
    <>
    
    <section id="row-1" className="text-center my-5 text-light">
        <div className="fotoku">
            <Image width={230} height={170} src="/images/img1.jpg" alt="img1.jpg" className="shadow img-fluid" objectFit="cover" style={{ borderRadius: '100%' }} />
        </div>

        <div className="mt-3">
          <h1 className="display-5">Judith Caesarino Herlambang</h1>
          <p className="lead">Junior Web Programmer</p>

          <div className="list-social-icon">
            <Link href="https://www.linkedin.com/in/judith-herlambang-218b89204/"><i className="px-lg-3 px-4 bi bi-linkedin"></i></Link>
            <Link href="https://github.com/ahtaum"><i className="px-lg-3 px-4 bi bi-github"></i></Link>
          </div>
        </div>
    </section>

    <style jsx>{`
    
      #row-1 .list-social-icon i {
        font-size: 30px;
      }
    
    `}</style>
    
    </>
  )
}
