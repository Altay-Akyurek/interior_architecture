import React from 'react'
import Image from 'next/image'

const AboutHero = () => {
  return (
    <section className='bg-white dark:bg-darkmode py-20'>
      <div className='container'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 items-start lg:items-center'>
          <div
            className='col-span-1'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='relative w-full h-[500px] rounded-14 overflow-hidden bg-AliceBlue dark:bg-transparent'>
              <Image
                src='/images/work-grow/frontend-development.jpg'
                alt='PUAR İç Mimarlık'
                fill
                className='object-cover'
                quality={100}
                unoptimized
              />
            </div>
          </div>
          <div
            className='col-span-1'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <h2 className='text-secondary dark:text-white max-w-420 pb-6'>
              İç Mekânlara Ruh Kazandırıyoruz
            </h2>
            <p className='text-base font-normal text-SlateBlue dark:text-darktext max-w-408 pb-6'>
              PUAR İç Mimarlık olarak, her projede fonksiyonellik ve estetiği bir araya getirerek, 
              yaşam alanlarınızı dönüştürüyoruz. İç mimarlığı sadece bir meslek olarak değil, 
              mekanlara ruh kazandıran bir sanat olarak görüyoruz.
            </p>
            <p className='text-base font-normal text-SlateBlue dark:text-darktext max-w-408 pb-6'>
              10 yılı aşkın deneyimimizle, konut, ofis ve ticari mekânlar için özel tasarımlar 
              gerçekleştiriyoruz. Her projede müşterilerimizin hayallerini gerçeğe dönüştürmek 
              için çalışıyoruz.
            </p>
            <div className='flex flex-col gap-4 pt-4'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='#F3FAFF'
                    className='dark:fill-primary/20 fill-primary/20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='12.5' cy='12.5' r='12.5' />
                    <g clipPath='url(#clip0_7_836)'>
                      <path
                        d='M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z'
                        fill='#2F73F2'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_7_836'>
                        <rect
                          width='11'
                          height='11'
                          fill='white'
                          transform='translate(7 7)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h4 className='text-lg font-bold text-secondary dark:text-white'>150+ Proje</h4>
                  <p className='text-sm text-SlateBlue dark:text-darktext'>Tamamlanan başarılı proje</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='#F3FAFF'
                    className='dark:fill-primary/20 fill-primary/20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='12.5' cy='12.5' r='12.5' />
                    <g clipPath='url(#clip0_7_836)'>
                      <path
                        d='M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z'
                        fill='#2F73F2'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_7_836'>
                        <rect
                          width='11'
                          height='11'
                          fill='white'
                          transform='translate(7 7)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h4 className='text-lg font-bold text-secondary dark:text-white'>98% Memnuniyet</h4>
                  <p className='text-sm text-SlateBlue dark:text-darktext'>Müşteri memnuniyeti oranı</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='#F3FAFF'
                    className='dark:fill-primary/20 fill-primary/20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='12.5' cy='12.5' r='12.5' />
                    <g clipPath='url(#clip0_7_836)'>
                      <path
                        d='M17.7444 8.79787C17.4041 8.45708 16.8514 8.45729 16.5106 8.79787L10.9577 14.351L8.48961 11.883C8.14881 11.5422 7.59639 11.5422 7.2556 11.883C6.9148 12.2238 6.9148 12.7762 7.2556 13.117L10.3405 16.202C10.5108 16.3722 10.7341 16.4576 10.9574 16.4576C11.1807 16.4576 11.4042 16.3725 11.5745 16.202L17.7444 10.0319C18.0852 9.69131 18.0852 9.13865 17.7444 8.79787Z'
                        fill='#2F73F2'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_7_836'>
                        <rect
                          width='11'
                          height='11'
                          fill='white'
                          transform='translate(7 7)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h4 className='text-lg font-bold text-secondary dark:text-white'>10+ Yıl</h4>
                  <p className='text-sm text-SlateBlue dark:text-darktext'>Sektör deneyimi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero

