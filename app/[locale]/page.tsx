import logo from '../../logo.svg';
import Image from 'next/image';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';
import Features from '@/components/features';
import LanguageSwitcher from '@/components/ui/language-switcher';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <meta name="keywords" content={t('keywords')} />
        <link rel="canonical" href="https://www.shopshop.laos" />
        <meta property="og:title" content={t('title')} />
        <meta property="og:description" content={t('description')} />
        <meta property="og:image" content="/images/cover_image.png" />
        <meta property="og:url" content="https://www.shopshop.laos" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="max-w-lgd relative mx-auto flex min-h-screen flex-col bg-background-image bg-cover bg-center">
        <div className="absolute right-5 top-5 z-[99]">
          <LanguageSwitcher />
        </div>
        <div className="borderd border-blue-500d mx-auto flex w-full max-w-7xl flex-col items-center gap-[16px] px-[24px]">
          <Image
            alt="logo"
            src={logo}
            width={500}
            height={500}
            sizes="100vw"
            className="h-[330px] w-[330px] max-sm:h-[200px] max-sm:w-[200px]"
          />
          <h1 className="w-full max-w-[888px] text-center text-[64px] font-[500] leading-tight max-md:text-[32px]">
            {t('heading')}
          </h1>
          <p className="w-full max-w-[1170px] text-center text-[24px] font-[400] text-[#52525B] max-sm:text-[14px]">
            {t('subheading')}
          </p>

          <div className="border-cyan-500d mx-auto flex w-full max-w-[624px] flex-col items-center justify-center gap-[32px] pt-[16px] max-sm:gap-[16px] max-sm:pt-0">
            <a
              href="mailto:bcid@bizgital.com?subject=Your subject&body=Your message"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="h-[86px] w-[304px] gap-[16px] rounded-[90px] bg-[#F04251] text-[36px] font-[600] transition-transform duration-300 hover:scale-110 hover:bg-[#F04251]/80 max-md:h-[52px] max-md:w-[197px] max-md:text-[24px]"
                size="lg"
              >
                <svg
                  className="h-[48px] w-[48px] shrink-0 max-md:h-[32px] max-md:w-[32px]"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_115_35)">
                    <path
                      d="M28.0115 29.4087C26.8173 30.2048 25.4302 30.6257 24 30.6257C22.5699 30.6257 21.1828 30.2048 19.9886 29.4087L0.319594 16.2956C0.210469 16.2228 0.104156 16.147 0 16.069V37.5562C0 40.0198 1.99922 41.9749 4.41872 41.9749H43.5812C46.0448 41.9749 47.9999 39.9757 47.9999 37.5562V16.0689C47.8956 16.1471 47.7891 16.2231 47.6797 16.296L28.0115 29.4087Z"
                      fill="white"
                    />
                    <path
                      d="M1.87969 13.9555L21.5487 27.0687C22.2933 27.5651 23.1466 27.8132 23.9999 27.8132C24.8533 27.8132 25.7067 27.565 26.4513 27.0687L46.1203 13.9555C47.2973 13.1712 48 11.8587 48 10.4422C48 8.00646 46.0184 6.02496 43.5828 6.02496H4.41722C1.98159 6.02506 0 8.00656 0 10.4445C0 11.8587 0.70275 13.1712 1.87969 13.9555Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_115_35">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {t('emailUs')}
              </Button>
            </a>

            <p className="text-center text-[20px] font-[400] max-sm:text-[14px]">{t('experienceService')}</p>
          </div>

          {/* About our service */}
          <div className="borderd border-yellow-500d flex w-full flex-col items-center justify-between gap-[40px] bg-gradient-to-r py-12 max-md:py-0 lg:flex-row">
            <div className="flex w-auto flex-shrink-0 justify-center">
              <Image
                src="/images/web_a.png" // Replace with your image path
                alt="Features"
                width={500}
                height={500}
                sizes="100vw"
                className="object-cover max-md:h-[250px] max-md:w-[300px]"
              />
            </div>

            <div className="w-full max-w-xl">
              <Features />
            </div>
          </div>

          {/* Currently running projects */}
          <div className="w-full">
            <Separator className="bg-[#A1A1AA66]" />
            <div className="flex w-full flex-wrap items-center justify-between gap-[32px] py-10 max-xl:justify-center max-md:gap-[16px] max-md:py-[25px]">
              {ourClients.map(({ name, logo }) => (
                <div key={name} className="">
                  <Image
                    src={logo}
                    alt={name}
                    width={500}
                    height={500}
                    className="h-[80px] w-auto max-md:h-[60px]"
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
            <Separator className="bg-[#A1A1AA66]" />
          </div>

          {/* Contact & Location */}
          <div className="borderd border-red-500d flex w-full items-start justify-between gap-20 py-[28px] max-md:flex-col max-md:gap-[16px] max-md:py-[15px]">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <h2 className="mb-[10px] text-center text-[24px] font-[700] text-[#09090B] max-sm:text-[18px]">
                {t('contactUs')}
              </h2>
              <div className="flex items-center gap-[16px]">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 0C6.47715 0 2 4.47715 2 10C2 15.5229 6.47715 20 12 20C17.5229 20 22 15.5229 22 10C22 4.47715 17.5229 0 12 0ZM8.40625 3.97217C8.61228 3.96002 8.79852 4.08317 8.9397 4.30175L10.3069 6.89452C10.4508 7.20175 10.369 7.53072 10.1543 7.75023L9.52808 8.37645C9.48943 8.42942 9.464 8.48907 9.46338 8.55467C9.70353 9.48425 10.432 10.3417 11.0747 10.9314C11.7174 11.5211 12.4082 12.3194 13.3049 12.5085C13.4158 12.5395 13.5516 12.5505 13.6309 12.4768L14.3584 11.7359C14.6095 11.5455 14.9728 11.4533 15.241 11.6089H15.2532L17.7202 13.0652C18.0823 13.2922 18.1198 13.7309 17.8606 13.9978L16.1614 15.6836C15.9104 15.9409 15.5771 16.0275 15.2532 16.0278C13.8207 15.9849 12.4672 15.2819 11.3555 14.5593C9.53067 13.2318 7.85678 11.5852 6.80592 9.59595C6.40288 8.76178 5.92943 7.69745 5.97462 6.76638C5.97865 6.41612 6.07342 6.07297 6.32008 5.8472L8.0193 4.14798C8.15167 4.03535 8.28262 3.97947 8.40625 3.97217Z"
                    fill="#475569"
                  />
                </svg>
                <a
                  className="text-[20px] font-[400] hover:underline max-sm:text-[16px]"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="tel:+8562055332207"
                >
                  {t('phone')}
                </a>
              </div>
              <div className="flex items-center gap-[16px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                    fill="#475569"
                  />
                </svg>
                <a
                  href="https://facebook.com/shopshop.laos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-[20px] font-[400] hover:underline max-sm:text-[16px]"
                >
                  {t('facebook')}
                </a>
              </div>
              <div className="flex items-center gap-[16px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM19 6L12.5 10.47C12.348 10.5578 12.1755 10.604 12 10.604C11.8245 10.604 11.652 10.5578 11.5 10.47L5 6H19Z"
                    fill="#475569"
                  />
                </svg>

                <a
                  href="mailto:bcid@bizgital.com"
                  className="cursor-pointer text-[20px] font-[400] hover:underline max-sm:text-[16px]"
                >
                  {t('email')}
                </a>
              </div>
            </div>
            <div className="w-full overflow-hidden rounded-[16px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.2217326746586!2d102.61025887491877!3d17.968418085807798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3124688a2681000f%3A0x732e93fca368583d!2sBizgital%20Company%20Limited!5e0!3m2!1sen!2sla!4v1735833050996!5m2!1sen!2sla"
                width="100%"
                height="240px"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <Separator className="bg-[#A1A1AA66]" />
          <p className="my-[32px] text-center text-[18px] max-md:my-[20px] max-sm:text-[14px]">
            Copyright © 2017-2025 BIZGITAL Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

const ourClients = [
  { name: 'Mineral', logo: '/images/mineral.jpeg' },
  { name: 'Heineken', logo: '/images/heineken.jpeg' },
  { name: 'Baby Bright', logo: '/images/babybright.jpeg' },
  { name: 'Keumyon', logo: '/images/keumyon.jpeg' },
  { name: 'Skynlab', logo: '/images/skynlab.jpeg' },
  { name: 'Boya', logo: '/images/boya.jpeg' },
  { name: 'Pureen', logo: '/images/pureen.jpeg' },
  { name: 'Realthai', logo: '/images/realthai.png' },
  { name: 'Aorsorror', logo: '/images/aorsorror.png' },
  { name: 'Suesut', logo: '/images/suesut.jpeg' },
];
