import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <section className="relative overflow-x-clip top-0 bg-primary circalanimat before:content-[''] before:absolute before:bg-[url('/images/work-grow/work-line.png')] before:bg-no-repeat before:bg-contain before:w-44 before:h-20 before:bottom-40 lg:before:inline-block before:hidden">
        <div className='banner-shap it-wrapper'>
          <div className='container py-20'>
            <div className='flex flex-wrap'>
              <div
                className='pb-3 sm:pb-0 md:w-2/3 w-full relative z-1'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1000'>
                <h1 className='text-white relative max-w-473'>
                  Fonksiyonel & Estetik İç Mekânlar Yaratıyoruz
                </h1>
                <Link href='/portfolio' className='bg-white text-base font-normal text-primary py-3 px-12 rounded-lg mb-16 mt-8 transition-all duration-0.4s hover:bg-secondary hover:text-white inline-block'>
                  Projelerimizi İnceleyin
                </Link>
                <p className='text-base font-normal text-white leading-7 pb-8 max-w-408'>
                  Konut, ofis ve ticari mekânlar için özel tasarımlar. 
                  Her projede fonksiyonellik ve estetiği bir araya getiriyoruz.
                </p>
                <div className='flex items-center gap-2 mb-8'>
                  <span className='text-white text-sm font-normal'>Müşteri Memnuniyeti:</span>
                  <div className='flex items-center'>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className='w-4 h-4 text-LightApricot'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'>
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                    ))}
                    <span className='text-white text-sm font-normal ms-2'>4.9/5</span>
                  </div>
                </div>
              </div>
              <div
                className="md:w-1/4 w-full md:-ml-16 -ml-0 relative z-1 before:absolute before:content-[''] before:bg-[url('/images/hero/grid-line.png')] before:bg-no-repeat before:w-24 before:h-24 before:-top-32 before:-right-16 lg:before:inline-block before:hidden after:content-[''] after:absolute after:bg-[url('/images/hero/circal.png')] after:bg-no-repeat after:w-[2.625rem] after:h-[2.625rem] after:top-10 after:-left-[8.25rem] xl:after:inline-block after:hidden"
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1000'>
                <form>
                  <div className='flex items-center gap-3 mb-5 pb-5'>
                    <div className='relative w-[50px] h-[50px] flex-shrink-0 overflow-hidden rounded-full'>
                      <Image
                        src='/assets/logo-icon.jpg'
                        alt='PUAR Logo'
                        fill
                        style={{ objectFit: 'cover' }}
                        quality={100}
                        unoptimized
                        sizes='50px'
                      />
                    </div>
                    <h6 className='text-white sm:text-[26px] leading-[2.11rem] text-xl font-bold'>
                      Teklif Formu
                    </h6>
                  </div>
                  <div className='grid md:grid-cols-2 grid-cols-1 gap-4 items-center mb-6'>
                    <div className='col-span-1'>
                      <input
                        type='text'
                        id='firstName'
                        className='bg-white text-secondary text-base rounded-lg block w-full p-2.5 dark:bg-darklight dark:text-white dark:placeholder-gray-400 focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='Adınız'
                        required
                      />
                    </div>
                    <div className='col-span-1'>
                      <input
                        type='text'
                        id='lastName'
                        className='bg-white text-darkmode text-base rounded-lg dark:bg-darkmode block w-full p-2.5 dark:placeholder:gray-400 dark:text-white focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='Soyadınız'
                        required
                      />
                    </div>
                    <div className='md:col-span-2 col-span-1'>
                      <input
                        type='email'
                        id='company'
                        className='bg-white text-secondary text-base rounded-lg block w-full p-2.5 dark:bg-darklight dark:text-white dark:placeholder-gray-400 focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='E-posta adresiniz'
                        required
                      />
                    </div>
                    <div className='md:col-span-2 col-span-1'>
                      <input
                        type='text'
                        id='country'
                        className='bg-white text-secondary text-base rounded-lg block w-full p-2.5 dark:bg-darklight dark:text-white dark:placeholder-gray-400 focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='Şehir'
                        required
                      />
                    </div>
                    <div className='md:col-span-2 col-span-1'>
                      <textarea
                        id='message'
                        rows={4}
                        className='bg-white block p-2.5 w-full text-base text-secondary rounded-lg dark:bg-darklight dark:text-white dark:placeholder-gray-400 focus:outline-0 focus:ring-1 focus:ring-secondary dark:focus:ring-white'
                        placeholder='Projeniz hakkında bilgi verin...'></textarea>
                    </div>
                  </div>
                  <div className='flex items-start mb-6'>
                    <div className='flex items-center h-5'>
                      <input
                        id='remember'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 border border-gray-300 rounded-sm checked:accent-LightApricot bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:outline-0'
                        required
                      />
                    </div>
                    <label className='ms-2 text-base font-normal text-white dark:text-gray-300'>
                      <a
                        href='#'
                        className='text-white underline dark:text-white'>
                        Gizlilik Politikası
                      </a>
                      'nı okudum ve kabul ediyorum.
                    </label>
                  </div>
                  <button
                    type='submit'
                    className='text-secondary bg-LightApricot hover:bg-secondary focus:ring-4 hover:text-white focus:outline-hidden focus:ring-blue-300 font-normal rounded-lg text-base w-full px-5 py-2.5 text-center  transition-all duration-0.4s'>
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

