import React from 'react'

const processSteps = [
  {
    number: '01',
    title: 'İlk Görüşme & Analiz',
    description: 'Sizi dinliyor, ihtiyaçlarınızı ve hayallerinizi analiz ediyoruz. Mekanınızı inceliyor, bütçe ve zaman planlaması yapıyoruz.',
  },
  {
    number: '02',
    title: 'Konsept Tasarım',
    description: 'Size özel konsept tasarım hazırlıyoruz. 3D görselleştirmelerle projenizi hayata geçirmeden önce görme fırsatı sunuyoruz.',
  },
  {
    number: '03',
    title: 'Detaylı Planlama',
    description: 'Malzeme seçiminden aydınlatmaya, mobilyadan dekorasyona kadar her detayı planlıyoruz. Teknik çizimler ve spesifikasyonlar hazırlıyoruz.',
  },
  {
    number: '04',
    title: 'Uygulama & Takip',
    description: 'Tasarımın hayata geçirilmesi sürecinde sizinle birlikte çalışıyoruz. Kalite kontrolü ve zamanında teslimat için tüm süreci takip ediyoruz.',
  },
]

const Process = () => {
  return (
    <section className='bg-AliceBlue dark:bg-darkmode py-20'>
      <div className='container'>
        <div className='text-center mb-16' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <h2 className='text-secondary dark:text-white pb-6'>
            Çalışma Sürecimiz
          </h2>
          <p className='text-base font-normal text-SlateBlue dark:text-darktext max-w-585 mx-auto'>
            Her projede aynı titizlik ve profesyonellikle çalışıyoruz. 
            Sürecin her aşamasında sizinle birlikte ilerliyoruz.
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-7'>
          {processSteps.map((step, index) => (
            <div
              key={index}
              className='group'
              data-aos='fade-up'
              data-aos-delay={`${(index + 1) * 150}`}
              data-aos-duration='1000'>
              <div className='shadow-light_shadwo dark:shadow-darkmd p-8 rounded-14 group-hover:cursor-pointer h-full bg-white dark:bg-darkmode'>
                <div className='text-5xl font-bold text-primary dark:text-LightApricot mb-4'>
                  {step.number}
                </div>
                <h6 className='text-[22px] leading-[2rem] font-bold text-secondary dark:text-white pt-3 pb-4'>
                  {step.title}
                </h6>
                <p className='text-14 text-SlateBlue dark:text-darktext font-normal'>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

