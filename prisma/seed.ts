import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Clear existing data
    await prisma.image.deleteMany();
    await prisma.project.deleteMany();

    // Project 1: Modern Villa
    const p1 = await prisma.project.create({
        data: {
            title: 'Vadi Villa',
            slug: 'vadi-villa',
            category: 'Konut',
            description: 'Doğayla iç içe, modern ve minimalist bir villa tasarımı. Ahşap detaylar ve geniş cam cepheler kullanıldı.',
            coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
            images: {
                create: [
                    { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80', type: 'gallery' },
                    { url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80', type: 'gallery' },
                ]
            }
        }
    });

    // Project 2: Tech Office
    const p2 = await prisma.project.create({
        data: {
            title: 'TechHub Ofis',
            slug: 'techhub-ofis',
            category: 'Ofis',
            description: 'Açık ofis sistemi, verimliliği artıran akustik çözümler ve ergonomik mobilyalar.',
            coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
            images: {
                create: [
                    { url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80', type: 'gallery' },
                ]
            }
        }
    });

    // Project 3: Cozy Cafe
    const p3 = await prisma.project.create({
        data: {
            title: 'Luna Kafe',
            slug: 'luna-kafe',
            category: 'Ticari', // Maps to Cafe/Restoran
            description: 'Sıcak tonlar, yumuşak aydınlatma ve konforlu oturma alanlarıyla samimi bir atmosfer.',
            coverImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80',
            images: {
                create: [
                    { url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80', type: 'gallery' },
                ]
            }
        }
    });

    console.log({ p1, p2, p3 });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
