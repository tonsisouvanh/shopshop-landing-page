export const days = Array.from({ length: 31 }, (_, i) => i + 1);
export const months = [
  { number: '1', en: 'January', la: 'ມັງກອນ' },
  { number: '2', en: 'February', la: 'ກຸມພາ' },
  { number: '3', en: 'March', la: 'ມີນາ' },
  { number: '4', en: 'April', la: 'ເມສາ' },
  { number: '5', en: 'May', la: 'ພຶດສະພາ' },
  { number: '6', en: 'June', la: 'ມິຖຸນາ' },
  { number: '7', en: 'July', la: 'ກໍລະກົດ' },
  { number: '8', en: 'August', la: 'ສິງຫາ' },
  { number: '9', en: 'September', la: 'ກັນຍາ' },
  { number: '10', en: 'October', la: 'ຕຸລາ' },
  { number: '11', en: 'November', la: 'ພະຈິກ' },
  { number: '12', en: 'December', la: 'ທັນວາ' },
];

export const SUPPORT_PHONE_NUMBER = '+8562088867800';

export const customReactSelectStyle = {
  control: (base: any, state: any) => ({
    ...base,
    borderRadius: '0.75rem', // Change this value to your desired border radius
    borderColor: state.isFocused ? '#0C6F1D' : '#E5E7EB', // Change border color based on focus state
    // borderColor: 0, // Change border color based on focus state
    // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
    '&:hover': {
      borderColor: 'none', // Change border color on hover
    },
    paddingTop: '0.4rem',
    paddingBottom: '0.4rem',
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: '10px', // Change this value to your desired border radius
  }),
  placeholder: (base: any) => ({
    ...base,
    color: '#9CA3AF', // Change placeholder color
  }),
};

// DATA
export const ourClients = [
  { name: 'Mineral', logo: '/images/mineral.jpeg', url: 'https://mineralwater.la' },
  { name: 'Baby Bright', logo: '/images/babybright.png', url: 'https://babybright.shopshop.la' },
  { name: 'Keumyon', logo: '/images/keumyon.png', url: 'https://keumyon.shopshop.la' },
  { name: 'Skynlab', logo: '/images/skynlab.png', url: 'https://skynlab.shopshop.la' },
  { name: 'Boya', logo: '/images/boya.png', url: 'http://boya.shopshop.la' },
  { name: 'Pureen', logo: '/images/pureenv2.png', url: 'https://pureen.shopshop.la' },
  { name: 'Realthai', logo: '/images/realthai.png', url: 'https://realthai.shopshop.la' },
  { name: 'Aorsorror', logo: '/images/aorsorror.png', url: 'https://aorsorror.shopshop.la' },
  { name: 'Suesut', logo: '/images/suesat.png', url: 'https://suesat.shopshop.la' },
  { name: 'Jalern', logo: '/images/rosjalern.png', url: 'https://chareunros.shopshop.la' },
  { name: 'Normai', logo: '/images/normai.png', url: 'https://goldensauce.shopshop.la' },
  { name: 'Suanthip', logo: '/images/suanthip.png', url: 'https://suanthip.shopshop.la' },
  // { name: 'Heineken', logo: '/images/heineken.jpeg' },
];
