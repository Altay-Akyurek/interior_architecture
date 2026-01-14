'use client'
import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sections } from '@/app/api/data'
import { usePathname } from 'next/navigation'

const footerTitles = {
  features: 'Hizmetlerimiz',
  resources: 'Sayfalar',
  platform: 'Yasal',
}

const Footer: FC = () => {
  const pathname = usePathname()

  return (
    <footer
      className={`relative bg-[url('/images/footer/ftr-bg.png')] dark:bg-darkmode bg-cover bg-no-repeat w-full h-full ${
        pathname === '/' ? 'pt-72 z-3' : 'pt-32'
      }`}>
      <div className='bg-secondary md:pb-20 pb-8'>
        <div className='container'>
          <div className='flex items-center justify-between pb-16 border-b border-dark_border border-solid'>
            <Link href='/'>
              <Image
                src='/assets/logo-text.png'
                alt='PUAR İç Mimarlık Logo'
                width={160}
                height={50}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
              />
            </Link>
            <div>
              <ul className='flex items-center gap-5'>
                <li>
                  <Link href='/' aria-label='Facebook'>
                    <svg
                      width='26'
                      height='27'
                      fill='white'
                      viewBox='0 0 26 27'
                      className='group-hover:fill-LightApricot'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M13 0C5.82 0 0 5.82 0 13c0 6.5 4.75 11.88 10.96 12.85v-9.09H7.67v-3.76h3.29V10.1c0-3.25 1.94-5.04 4.9-5.04 1.42 0 2.9.25 2.9.25v3.19h-1.63c-1.61 0-2.11 1-2.11 2.02v2.43h3.59l-.57 3.76h-3.02v9.09C21.25 24.88 26 19.5 26 13c0-7.18-5.82-13-13-13z' />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href='/' aria-label='Twitter'>
                    <svg
                      width='26'
                      height='27'
                      viewBox='0 0 26 27'
                      fill='#fff'
                      className='group-hover:fill-LightApricot'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M23.25 6.75c-.85.38-1.75.63-2.7.75.98-.59 1.73-1.52 2.08-2.63-.92.54-1.94.94-3.02 1.15-.87-.92-2.11-1.5-3.48-1.5-2.63 0-4.76 2.13-4.76 4.76 0 .37.04.74.12 1.09-3.96-.2-7.47-2.1-9.82-4.99-.41.71-.65 1.54-.65 2.42 0 1.65.84 3.11 2.12 3.96-.78-.02-1.52-.24-2.16-.6v.06c0 2.31 1.64 4.23 3.82 4.67-.4.11-.82.17-1.25.17-.3 0-.6-.03-.89-.08.6 1.87 2.34 3.23 4.4 3.27-1.61 1.26-3.64 2.01-5.85 2.01-.38 0-.76-.02-1.13-.07 2.11 1.35 4.62 2.14 7.32 2.14 8.78 0 13.58-7.27 13.58-13.58 0-.21 0-.41-.01-.61.93-.67 1.74-1.51 2.38-2.47z' />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href='/' aria-label='LinkedIn'>
                    <svg
                      width='26'
                      height='28'
                      viewBox='0 0 26 28'
                      fill='#fff'
                      className='group-hover:fill-LightApricot'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M5.37 28H.46V9.3h4.91V28zM2.92 7.16C1.31 7.16 0 5.82 0 4.16S1.31 1.16 2.92 1.16c1.61 0 2.92 1.34 2.92 3s-1.31 3-2.92 3zM26 28h-4.91v-9.1c0-2.08-.04-4.75-2.9-4.75-2.9 0-3.35 2.27-3.35 4.6V28H9.93V9.3h4.71v2.46h.07c.7-1.33 2.41-2.74 4.96-2.74 5.31 0 6.29 3.5 6.29 8.05V28H26z' />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='grid grid-cols-12 pt-10'>
            {Object.entries(sections).map(([sectionKey, items], index) => {
              let colSpan = 'col-span-3'

              return (
                <div key={sectionKey} className={`${colSpan}`}>
                  <p className='text-lg font-medium text-white pb-4'>
                    {footerTitles[sectionKey as keyof typeof footerTitles]}
                  </p>
                  <ul>
                    {items.map((item) => (
                      <li
                        key={item.name}
                        className='text-base font-normal text-SlateBlue leading-8 hover:text-white'>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
            <div className='col-span-3'>
              <p className='text-lg font-medium text-white pb-4'>
                Bültenimize Abone Olun
              </p>
              <div className='relative flex'>
                <input
                  type='email'
                  name='email'
                  placeholder='E-posta adresiniz*'
                  className='bg-transparent border border-dark_border border-solid py-3 pl-6 pr-14 rounded-lg focus:outline-0 text-SlateBlue w-full focus:border-primary'
                  aria-label='E-posta adresi'
                />
                <button
                  className='absolute bg-transparent right-0 p-4'
                  aria-label='Gönder'>
                  <i className="bg-[url('/images/footer/msg-enter.svg')] bg-contain w-5 h-5 inline-block"></i>
                </button>
              </div>
              <p className='text-base font-normal text-SlateBlue max-w-310 pt-3'>
                © 2025 Tüm hakları saklıdır.{' '}
                <Link
                  href={'/'}
                  className='hover:text-primary'>
                  PUAR İç Mimarlık
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

