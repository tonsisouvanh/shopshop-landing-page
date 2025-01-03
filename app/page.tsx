import logo from '../logo.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ShopShop - A Commerce Platform Service in Laos</title>
        <meta
          name="description"
          content="ShopShop is a cloud-based web app that lets you effortlessly create your online store in Laos with integrated local payments and delivery."
        />
        <meta name="keywords" content="ecommerce, online store, Laos, payments, delivery" />
        <link rel="canonical" href="https://www.shopshop.laos" />
        <meta property="og:title" content="ShopShop - A Commerce Platform Service in Laos" />
        <meta
          property="og:description"
          content="ShopShop is a cloud-based web app that lets you effortlessly create your online store in Laos with integrated local payments and delivery."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.shopshop.laos" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="max-w-lgd mx-auto flex min-h-screen flex-col bg-background-image bg-cover bg-center">
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
            A COMMERCE PLATFORM SERVICE IN LAOS
          </h1>
          <p className="w-full max-w-[1170px] text-center text-[24px] font-[400] text-[#52525B] max-sm:text-[14px]">
            ShopShop is a cloud-based web app that lets you effortlessly create your online store in Laos with
            integrated local payments and delivery. Your customers can shop from any devices.
          </p>

          <div className="border-cyan-500d mx-auto flex w-full max-w-[624px] flex-col items-center justify-center gap-[32px] pt-[16px] max-sm:gap-[16px] max-sm:pt-0">
            <a href="mailto:info@bizgital.com?subject=''&body=''" target="_blank" rel="noopener noreferrer">
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
                EMAIL US
              </Button>
            </a>

            <p className="text-center text-[20px] font-[400] max-sm:text-[14px]">
              Experience our service today. Connect with us to explore more and unlock exclusive benefits.
            </p>
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
              <ul className="space-y-6">
                {features.map(({ icon, title, description }) => (
                  <li key={title} className="flex items-center gap-[56px] max-md:gap-[20px]">
                    <div className="w-[40px] shrink-0">{icon}</div>
                    <div>
                      <h3 className="text-[24px] font-[500] max-md:text-[16px]">{title}</h3>
                      <p className="text-[20px] font-[400] text-[#52525B] max-md:text-[14px]">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
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
                CONTACT US
              </h2>
              <div className="flex items-center gap-[16px]">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 0C6.47715 0 2 4.47715 2 10C2 15.5229 6.47715 20 12 20C17.5229 20 22 15.5229 22 10C22 4.47715 17.5229 0 12 0ZM8.40625 3.97217C8.61228 3.96002 8.79852 4.08317 8.9397 4.30175L10.3069 6.89452C10.4508 7.20175 10.369 7.53072 10.1543 7.75023L9.52808 8.37645C9.48943 8.42942 9.464 8.48907 9.46338 8.55467C9.70353 9.48425 10.432 10.3417 11.0747 10.9314C11.7174 11.5211 12.4082 12.3194 13.3049 12.5085C13.4158 12.5395 13.5516 12.5505 13.6309 12.4768L14.3584 11.7359C14.6095 11.5455 14.9728 11.4533 15.241 11.6089H15.2532L17.7202 13.0652C18.0823 13.2922 18.1198 13.7309 17.8606 13.9978L16.1614 15.6836C15.9104 15.9409 15.5771 16.0275 15.2532 16.0278C13.8207 15.9849 12.4672 15.2819 11.3555 14.5593C9.53067 13.2318 7.85678 11.5852 6.80592 9.59595C6.40288 8.76178 5.92943 7.69745 5.97462 6.76638C5.97865 6.41612 6.07342 6.07297 6.32008 5.8472L8.0193 4.14798C8.15167 4.03535 8.28262 3.97947 8.40625 3.97217Z"
                    fill="#475569"
                  />
                </svg>
                <p className="text-[20px] font-[400] max-sm:text-[16px]">+(856) 20 5533-2207</p>
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
                  facebook.com/shopshop.laos
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
                  bcid@bizgital.com
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

const features = [
  {
    icon: (
      <svg
        width="48"
        className="max-md:w-[33px]"
        height="60"
        viewBox="0 0 48 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.2392 15.5297H36.6463V8.113C36.6463 4.15029 33.4403 0.938416 29.4718 0.938416H7.58474C3.62203 0.938416 0.410156 4.1445 0.410156 8.113V51.887C0.410156 55.8497 3.61624 59.0616 7.58474 59.0616H29.4718C33.4779 59.0657 36.7141 55.7756 36.6463 51.7659H42.2392C45.2307 51.7659 47.5898 49.3361 47.5898 46.4152V20.8805C47.5898 17.9491 45.2208 15.5297 42.2392 15.5297ZM33.2407 51.887C33.2407 53.9703 31.5559 55.656 29.4718 55.656H7.58474C5.5015 55.656 3.81581 53.9712 3.81581 51.887V8.113C3.81581 6.02987 5.50059 4.34407 7.58474 4.34407H29.4718C31.555 4.34407 33.2407 6.02896 33.2407 8.113V15.5297H13.0565C10.065 15.5297 7.70587 17.9595 7.70587 20.8805V46.4153C7.70587 49.3466 10.0748 51.766 13.0565 51.766H33.2407V51.887ZM44.1842 39.2407H36.7675C35.695 39.2407 34.8225 38.368 34.8225 37.2956C34.8225 36.2232 35.695 35.3506 36.7675 35.3506H44.1842V39.2407ZM44.1842 31.9451H36.7675C33.8171 31.9451 31.4168 34.3454 31.4168 37.2957C31.4168 40.246 33.8171 42.6465 36.7675 42.6465H44.1842V46.4153C44.1842 47.4777 43.3252 48.3604 42.2392 48.3604H13.0565C11.9969 48.3604 11.1115 47.5037 11.1115 46.4153V25.8682C11.7231 26.1066 12.3801 26.2311 13.0565 26.2311H42.2391C43.2987 26.2311 44.1841 27.0877 44.1841 28.1762L44.1842 31.9451ZM44.1842 23.1907C43.5816 22.955 42.9261 22.8254 42.241 22.8254H13.0565C11.9841 22.8254 11.1115 21.9529 11.1115 20.8805C11.1115 19.808 11.9841 18.9354 13.0565 18.9354H42.2391C43.2987 18.9354 44.1841 19.792 44.1841 20.8805L44.1842 23.1907Z"
          fill="#475569"
        />
        <path
          d="M16.7043 11.6398H20.3521C22.6074 11.5568 22.6087 8.31757 20.3521 8.23413H16.7043C14.4489 8.31712 14.4477 11.5562 16.7043 11.6398Z"
          fill="#475569"
        />
      </svg>
    ),
    title: 'Online Payment',
    description: 'Convenient and secure payment, supporting all banks in Laos.',
  },
  {
    icon: (
      <svg
        width="62"
        className="max-md:w-[45px]"
        height="42"
        viewBox="0 0 62 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M61.4887 20.9731L51.0687 10.2065C50.7267 9.85292 50.2556 9.65335 49.7636 9.65335H43.105V1.81645C43.105 0.813286 42.2917 0 41.2886 0H7.55129C6.54814 0 5.73488 0.813286 5.73488 1.81645V7.2675H4.35998C3.35684 7.2675 2.54357 8.08079 2.54357 9.08395C2.54357 10.0871 3.35684 10.9004 4.35998 10.9004H5.73488V14.535H1.81641C0.813266 14.535 0 15.3483 0 16.3515C0 17.3546 0.813266 18.1679 1.81641 18.1679H5.73488V34.8498C5.73488 35.853 6.54814 36.6663 7.55129 36.6663H11.4177C11.7698 37.8385 12.4084 38.9126 13.2982 39.8025C14.7152 41.2197 16.5993 42 18.6033 42C20.6073 42 22.4912 41.2197 23.9084 39.8025C24.8088 38.902 25.431 37.8274 25.7771 36.6863H43.1232C43.4693 37.8274 44.0914 38.902 44.9919 39.8025C46.4089 41.2197 48.293 42 50.297 42C52.301 42 54.185 41.2197 55.6021 39.8025C56.5026 38.902 57.1248 37.8274 57.4709 36.6863H60.1836C61.1867 36.6863 62 35.873 62 34.8698V22.2364C62 21.7648 61.8167 21.3119 61.4887 20.9731ZM55.8978 20.4199H43.054V13.2863H48.9938L55.8978 20.4199ZM9.36769 18.1678H18.8218C19.825 18.1678 20.6383 17.3545 20.6383 16.3513C20.6383 15.3482 19.825 14.5349 18.8218 14.5349H9.36769V10.9003H20.1542C21.1574 10.9003 21.9706 10.087 21.9706 9.08383C21.9706 8.08067 21.1574 7.26738 20.1542 7.26738H9.36769V3.63278H20.1542H39.4721L39.4211 33.0531H25.963C25.6875 31.6373 25.0027 30.2859 23.9084 29.1915C22.4913 27.7743 20.6073 26.9939 18.6033 26.9939C16.5993 26.9939 14.7153 27.7743 13.2982 29.1915C12.2325 30.2571 11.5272 31.5869 11.2427 33.0331H9.36769V18.1678ZM21.3396 37.2336C20.6087 37.9646 19.6368 38.3671 18.6033 38.3671C17.5697 38.3671 16.5978 37.9646 15.8669 37.2336C15.136 36.5027 14.7335 35.5308 14.7335 34.4971C14.7335 33.4633 15.136 32.4914 15.8669 31.7604C16.5978 31.0295 17.5697 30.6269 18.6033 30.6269C19.6368 30.6269 20.6087 31.0295 21.3396 31.7604C22.8485 33.2694 22.8485 35.7246 21.3396 37.2336ZM53.0331 37.2336C52.3022 37.9646 51.3303 38.3671 50.2968 38.3671C49.2632 38.3671 48.2913 37.9646 47.5604 37.2336C46.0516 35.7246 46.0516 33.2695 47.5604 31.7605C48.2913 31.0296 49.2632 30.6271 50.2968 30.6271C51.3303 30.6271 52.3022 31.0296 53.0331 31.7605C53.764 32.4915 54.1664 33.4634 54.1664 34.4972C54.1666 35.5308 53.764 36.5027 53.0331 37.2336ZM57.6566 33.0532C57.3811 31.6374 56.6963 30.2861 55.6019 29.1916C54.1849 27.7744 52.3008 26.994 50.2968 26.994C48.2928 26.994 46.4088 27.7744 44.9917 29.1916C44.0268 30.1566 43.3822 31.3216 43.0539 32.5541V24.0528H58.3672V33.0532H57.6566Z"
          fill="#475569"
        />
      </svg>
    ),
    title: 'Nationwide Delivery',
    description: 'Deliver goods to your customers nationwide with a variety of delivery services options.',
  },
  {
    icon: (
      <svg
        width="54"
        className="max-md:w-[40px]"
        height="58"
        viewBox="0 0 54 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45.6255 10.8309C46.4417 11.2945 47.384 11.5609 48.388 11.5609C51.4825 11.5609 54 9.04337 54 5.94899C54 2.85451 51.4825 0.336975 48.388 0.336975C45.2936 0.336975 42.7761 2.85451 42.7761 5.94899C42.7761 6.8109 42.9719 7.6278 43.3206 8.35826L37.2627 12.946C36.3673 12.3412 35.2889 11.9877 34.1294 11.9877C32.9977 11.9877 31.944 12.3255 31.0617 12.9039L25.1224 8.04431C25.3546 7.42928 25.4826 6.76365 25.4826 6.06835C25.4826 2.97397 22.965 0.456442 19.8706 0.456442C16.7763 0.456442 14.2587 2.97397 14.2587 6.06835C14.2587 6.85266 14.4211 7.59969 14.713 8.27831L6.95425 16.4404C6.52386 16.3344 6.07455 16.277 5.61191 16.277C2.51753 16.277 0 18.7945 0 21.8889C0 24.9833 2.51753 27.5008 5.61191 27.5008C8.70628 27.5008 11.2238 24.9833 11.2238 21.8889C11.2238 20.5 10.7155 19.2283 9.87654 18.2472L16.919 10.8386C17.7771 11.3716 18.7883 11.6804 19.8706 11.6804C21.0491 11.6804 22.1432 11.3145 23.0471 10.6915L28.9258 15.5015C28.6634 16.1501 28.5174 16.858 28.5174 17.5996C28.5174 20.694 31.0349 23.2115 34.1293 23.2115C37.2236 23.2115 39.7412 20.694 39.7412 17.5996C39.7412 16.8857 39.6058 16.2033 39.3616 15.5747L45.6255 10.8309ZM48.388 3.69973C49.6282 3.69973 50.6373 4.70865 50.6373 5.94899C50.6373 7.18912 49.6283 8.19803 48.388 8.19803C47.1479 8.19803 46.1389 7.18912 46.1389 5.94899C46.139 4.70876 47.1479 3.69973 48.388 3.69973ZM5.61191 24.138C4.37178 24.138 3.36276 23.1291 3.36276 21.8889C3.36276 20.6486 4.37167 19.6397 5.61191 19.6397C6.85203 19.6397 7.86106 20.6486 7.86106 21.8889C7.86106 23.1291 6.85203 24.138 5.61191 24.138ZM19.8706 8.3175C18.6305 8.3175 17.6215 7.30858 17.6215 6.06835C17.6215 4.82811 18.6304 3.81931 19.8706 3.81931C21.1109 3.81931 22.1198 4.82823 22.1198 6.06835C22.1198 7.30847 21.1108 8.3175 19.8706 8.3175ZM34.1294 19.8485C32.8893 19.8485 31.8802 18.8396 31.8802 17.5995C31.8802 16.3594 32.8891 15.3504 34.1294 15.3504C35.3696 15.3504 36.3785 16.3593 36.3785 17.5995C36.3785 18.8397 35.3695 19.8485 34.1294 19.8485Z"
          fill="#475569"
        />
        <path
          d="M48.2905 22.0172C45.266 22.0172 42.8052 24.478 42.8052 27.5025V57.663H53.7759V27.5025C53.7759 24.478 51.3151 22.0172 48.2905 22.0172ZM50.413 54.3002H46.168V27.5025C46.168 26.3322 47.1201 25.3801 48.2904 25.3801C49.4607 25.3801 50.4129 26.3322 50.4129 27.5025L50.413 54.3002Z"
          fill="#475569"
        />
        <path
          d="M34.1294 35.7563C31.1049 35.7563 28.6441 38.2169 28.6441 41.2417V57.663H39.6148V41.2416C39.6148 38.2169 37.154 35.7563 34.1294 35.7563ZM36.2519 54.3001H32.0069V41.2416C32.0069 40.0712 32.959 39.119 34.1293 39.119C35.2996 39.119 36.2518 40.0712 36.2518 41.2416L36.2519 54.3001Z"
          fill="#475569"
        />
        <path
          d="M19.783 26.5012C16.7584 26.5012 14.2976 28.9618 14.2976 31.9865V57.663H25.2684V31.9865C25.2684 28.9619 22.8077 26.5012 19.783 26.5012ZM21.9056 54.3001H17.6605V31.9865C17.6605 30.8162 18.6126 29.864 19.783 29.864C20.9534 29.864 21.9055 30.8162 21.9055 31.9865V54.3001H21.9056Z"
          fill="#475569"
        />
        <path
          d="M5.62186 40.7929C2.59724 40.7929 0.136475 43.2536 0.136475 46.2782V57.663H11.1071V46.2782C11.1071 43.2536 8.64637 40.7929 5.62186 40.7929ZM7.74427 54.3001H3.49934V46.2782C3.49934 45.1078 4.45149 44.1557 5.62186 44.1557C6.79212 44.1557 7.74427 45.1078 7.74427 46.2782V54.3001Z"
          fill="#475569"
        />
      </svg>
    ),
    title: 'Owned Data',
    description: "The brand owns the consumer's data from start to finish.",
  },
  {
    icon: (
      <svg
        width="50"
        className="max-md:w-[40px]"
        height="58"
        viewBox="0 0 50 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 57.3185C18.3222 57.3185 12.0442 54.7181 7.32223 49.9963C2.60044 45.2743 0 38.9963 0 32.3185C0 28.02 1.12854 23.7618 3.2635 20.0046L3.89845 18.8872L5.13905 19.2224C6.07323 19.4748 6.83285 19.1486 7.30509 18.8306C8.27069 18.1799 8.94823 16.9619 9.11748 15.5722C9.89856 9.1536 13.4094 5.52661 16.2171 3.61422C19.2374 1.55714 22.091 1.01179 22.2111 0.989442L23.8327 0.689331L24.1427 2.30924C24.578 4.58336 25.3653 6.95261 26.4825 9.35117C27.0017 10.4654 27.8623 11.22 28.8436 11.4212C29.6829 11.5932 30.5367 11.3369 31.2483 10.6993L33.9386 8.28966L34.9076 8.69862C35.0814 8.77207 39.1747 10.5636 39.9133 16.4008C40.0523 17.5003 40.3983 18.21 40.9418 18.5103C41.9212 19.0515 43.6022 18.4735 43.9987 18.2892L45.3167 17.6762L46.0979 18.9021C48.6507 22.909 50 27.5482 50 32.3185C50 38.9963 47.3996 45.2743 42.6778 49.9963C37.9558 54.7181 31.6778 57.3185 25 57.3185ZM5.62246 22.6285C4.11228 25.637 3.31858 28.9641 3.31858 32.3185C3.31858 44.2737 13.0448 54 25 54C36.9552 54 46.6814 44.2737 46.6814 32.3185C46.6814 28.6147 45.7439 25.0026 43.9601 21.7948C42.7313 22.1061 40.9293 22.295 39.3366 21.415C37.44 20.367 36.8129 18.3363 36.6207 16.8174C36.3091 14.3537 35.2014 12.9867 34.4222 12.3116L33.4623 13.1713C31.9701 14.5079 30.0434 15.0549 28.177 14.6722C26.1558 14.2578 24.4416 12.8292 23.4742 10.7525C22.5271 8.71942 21.793 6.69542 21.283 4.71356C20.3868 5.04497 19.1956 5.58546 17.9821 6.42783C14.7865 8.64608 12.9123 11.8576 12.4116 15.973C12.1236 18.3397 10.9382 20.3842 9.1594 21.5827C8.07666 22.3123 6.85454 22.6701 5.62246 22.6285Z"
          fill="#4D5D74"
        />
        <path d="M13.4635 43.161L34.1771 22.4474L36.5233 24.7936L15.8097 45.5072L13.4635 43.161Z" fill="#4D5D74" />
        <path
          d="M17.9602 31.9158C15.2154 31.9158 12.9823 29.6828 12.9823 26.938C12.9823 24.1932 15.2154 21.9601 17.9602 21.9601C20.705 21.9601 22.9381 24.1932 22.9381 26.938C22.9381 29.6828 20.7051 31.9158 17.9602 31.9158ZM17.9602 25.2787C17.0452 25.2787 16.3009 26.023 16.3009 26.938C16.3009 27.8529 17.0452 28.5973 17.9602 28.5973C18.8751 28.5973 19.6195 27.8529 19.6195 26.938C19.6195 26.023 18.8752 25.2787 17.9602 25.2787Z"
          fill="#4D5D74"
        />
        <path
          d="M32.0398 45.9955C29.295 45.9955 27.062 43.7625 27.062 41.0177C27.062 38.2729 29.295 36.0398 32.0398 36.0398C34.7846 36.0398 37.0177 38.2729 37.0177 41.0177C37.0177 43.7625 34.7846 45.9955 32.0398 45.9955ZM32.0398 39.3584C31.1249 39.3584 30.3805 40.1027 30.3805 41.0177C30.3805 41.9326 31.1249 42.677 32.0398 42.677C32.9548 42.677 33.6991 41.9326 33.6991 41.0177C33.6991 40.1027 32.9548 39.3584 32.0398 39.3584Z"
          fill="#4D5D74"
        />
        <path d="M3.31857 7.3186H6.63716V10.6372H3.31857V7.3186Z" fill="#4D5D74" />
        <path d="M33.4071 0.681396H36.7257V3.99998H33.4071V0.681396Z" fill="#4D5D74" />
        <path d="M40.0443 4H43.3628V7.31858H40.0443V4Z" fill="#4D5D74" />
      </svg>
    ),
    title: 'Promotion',
    description: 'Easily manage promotions on-the-go and integrate them with digital marketing campaigns.',
  },
  {
    icon: (
      <svg
        width="52"
        className="max-md:w-[40px]"
        height="60"
        viewBox="0 0 52 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M49.4321 37.5959C47.4988 36.4796 45.1341 36.7678 43.5252 38.1406L40.3036 36.2807L43.9298 30L40.3036 23.7193L43.5246 21.8596C44.462 22.6595 45.6558 23.0914 46.8717 23.0914C47.7428 23.0914 48.625 22.87 49.4321 22.404C51.8855 20.9875 52.7291 17.8391 51.3127 15.3856C49.8963 12.9321 46.7479 12.0885 44.2943 13.505C42.3608 14.6213 41.4281 16.8132 41.8126 18.8929L38.591 20.7528L34.965 14.4723H27.7126V10.7525C29.706 10.0455 31.1378 8.14189 31.1378 5.90921C31.1378 3.0762 28.833 0.771362 26 0.771362C23.167 0.771362 20.8621 3.0762 20.8621 5.90921C20.8621 8.14189 22.294 10.0455 24.2874 10.7525V14.4723H17.035L13.4088 20.753L10.1873 18.8931C10.5717 16.8133 9.63904 14.6215 7.70561 13.5052C5.25246 12.0885 2.10388 12.9322 0.687317 15.3857C-0.72913 17.8391 0.11439 20.9875 2.56788 22.4041C3.37498 22.8701 4.25698 23.0915 5.12824 23.0915C6.34397 23.0915 7.53789 22.6596 8.47526 21.8597L11.6963 23.7194L8.07017 30L11.6963 36.2807L8.47492 38.1406C6.86609 36.7678 4.50142 36.4796 2.56788 37.596C0.11439 39.0125 -0.72913 42.1609 0.687317 44.6143C1.63782 46.2608 3.36824 47.1822 5.14537 47.1822C6.0164 47.1822 6.89863 46.9608 7.70573 46.4948C9.63915 45.3785 10.5718 43.1866 10.1874 41.1069L13.409 39.247L17.035 45.5277H24.2874V49.2475C22.294 49.9545 20.8621 51.8581 20.8621 54.0908C20.8621 56.9238 23.167 59.2286 26 59.2286C28.833 59.2286 31.1378 56.9238 31.1378 54.0908C31.1378 51.8581 29.706 49.9545 27.7126 49.2475V45.5277H34.965L38.5911 39.247L41.8127 41.1069C41.4283 43.1867 42.3609 45.3785 44.2944 46.4948C45.1015 46.9608 45.9835 47.1822 46.8547 47.1822C48.6315 47.1822 50.3623 46.2606 51.3128 44.6143C52.7291 42.1609 51.8856 39.0125 49.4321 37.5959ZM46.0069 16.4715C46.2759 16.3162 46.57 16.2423 46.8603 16.2423C47.4527 16.2423 48.0295 16.5495 48.3464 17.0983C48.8186 17.9161 48.5374 18.9655 47.7196 19.4377C46.9017 19.9097 45.8524 19.6286 45.3802 18.8109C44.9078 17.9931 45.189 16.9437 46.0069 16.4715ZM26 4.19659C26.9443 4.19659 27.7126 4.96487 27.7126 5.90921C27.7126 6.85354 26.9443 7.62182 26 7.62182C25.0557 7.62182 24.2874 6.85354 24.2874 5.90921C24.2874 4.96487 25.0557 4.19659 26 4.19659ZM6.61993 18.8109C6.1477 19.6287 5.09856 19.9102 4.2805 19.4377C3.46267 18.9655 3.18145 17.9161 3.65368 17.0983C3.97051 16.5495 4.54732 16.2423 5.13977 16.2423C5.43012 16.2423 5.72412 16.3161 5.99323 16.4715C6.81094 16.9437 7.09215 17.9931 6.61993 18.8109ZM5.99311 43.5285C5.17505 44.0006 4.1259 43.7194 3.65368 42.9017C3.18145 42.0839 3.46267 41.0345 4.2805 40.5623C4.54949 40.407 4.8436 40.3331 5.13395 40.3331C5.72629 40.3331 6.30309 40.6402 6.62004 41.1891C7.09215 42.0069 6.81094 43.0563 5.99311 43.5285ZM26 55.8034C25.0557 55.8034 24.2874 55.0351 24.2874 54.0908C24.2874 53.1464 25.0557 52.3782 26 52.3782C26.9443 52.3782 27.7126 53.1464 27.7126 54.0908C27.7126 55.0351 26.9443 55.8034 26 55.8034ZM19.0126 17.8975H32.9873L39.9747 30L35.262 38.1625C34.5409 35.819 32.9523 33.8534 30.8734 32.638C32.0105 31.4353 32.7099 29.8147 32.7099 28.0328C32.7101 24.3328 29.6999 21.3227 26 21.3227C22.3001 21.3227 19.2899 24.3328 19.2899 28.0329C19.2899 29.8147 19.9893 31.4354 21.1263 32.6381C19.0475 33.8535 17.4588 35.819 16.7377 38.1627L12.0253 30L19.0126 17.8975ZM22.7151 28.0329C22.7151 26.2215 24.1887 24.748 26 24.748C27.8113 24.748 29.2849 26.2215 29.2849 28.0329C29.2849 29.8443 27.8113 31.3178 26 31.3178C24.1887 31.3178 22.7151 29.8441 22.7151 28.0329ZM26 34.743C29.4538 34.743 32.2635 37.5527 32.2635 41.0065V42.1025H19.7365V41.0065C19.7365 37.5527 22.5462 34.743 26 34.743ZM48.3464 42.9017C47.8743 43.7195 46.8252 44.0008 46.007 43.5285C45.1892 43.0563 44.9079 42.0069 45.3802 41.1891C45.697 40.6402 46.2738 40.3331 46.8663 40.3331C47.1566 40.3331 47.4506 40.4069 47.7197 40.5623C48.5374 41.0345 48.8185 42.0839 48.3464 42.9017Z"
          fill="#4D5D74"
        />
      </svg>
    ),
    title: 'CRM',
    description: 'Create loyalty programs with points and personalized promotions based on customer data.',
  },
];
