import React from 'react'

const expertiseAreas = [
  {
    title: 'Konut & Villa Tasarımı',
    description: 'Evleriniz için modern ve fonksiyonel iç mekan tasarımları. Her detayı düşünülmüş yaşam alanları.',
    icon: '🏠'
  },
  {
    title: 'Ofis & Çalışma Alanları',
    description: 'Verimlilik ve konfor odaklı ofis tasarımları. Çalışanların motivasyonunu artıran mekanlar.',
    icon: '💼'
  },
  {
    title: 'Ticari Mekanlar',
    description: 'Mağaza, showroom ve ticari alanlar için özel tasarımlar. Müşteri deneyimini ön planda tutuyoruz.',
    icon: '🏪'
  },
  {
    title: 'Kafe & Restoran',
    description: 'Horeca sektörü için atmosferik ve işlevsel tasarımlar. Markanızın ruhunu yansıtan mekanlar.',
    icon: '☕'
  },
  {
    title: '3D Görselleştirme',
    description: 'Projelerinizi hayata geçirmeden önce 3D olarak görün. Detaylı render ve animasyon hizmetleri.',
    icon: '🎨'
  },
  {
    title: 'Uygulama Hizmeti',
    description: 'Tasarımdan uygulamaya kadar tüm süreci takip ediyoruz. Güvendiğimiz ustalar ve işçilerle çalışıyoruz.',
    icon: '🔨'
  },
]

const Expertise = () => {
  return (
    <section className='bg-white dark:bg-darkmode py-20'>
      <div className='container'>
        <div className='text-center mb-16' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <h2 className='text-secondary dark:text-white pb-6'>
            Uzmanlık Alanlarımız
          </h2>
          <p className='text-base font-normal text-SlateBlue dark:text-darktext max-w-585 mx-auto'>
            Farklı kategorilerde geniş bir deneyime sahibiz. Her projede 
            müşterilerimizin ihtiyaçlarına özel çözümler üretiyoruz.
          </p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className='group'
              data-aos='fade-up'
              data-aos-delay={`${(index + 1) * 100}`}
              data-aos-duration='1000'>
              <div className='bg-white dark:bg-darklight shadow-light_shadwo dark:shadow-darkmd p-8 rounded-14 group-hover:cursor-pointer h-full'>
                <div className='text-4xl mb-4'>{area.icon}</div>
                <h6 className='text-[22px] leading-[2rem] font-bold text-secondary dark:text-white max-w-200 pt-3'>
                  {area.title}
                </h6>
                <p className='text-14 text-SlateBlue dark:text-darktext font-normal max-w-200 pt-3'>
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise

