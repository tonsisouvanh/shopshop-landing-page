import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { toast } from '@/hooks/use-toast';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slugFormat = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function encryptKey(passkey: string) {
  return btoa(passkey);
}

export function decryptKey(passkey: string) {
  return atob(passkey);
}

export const formatDate = (dateStr: string | undefined): string => {
  if (!dateStr) return 'No Date';
  return dateStr.replace(/T|Z/g, match => (match === 'T' ? ' ' : '')).replace(/\.\d{3}$/, '');
};

export const requestNotificationPermission = async () => {
  if ('Notification' in window) {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    } else {
      console.log('Notification permission denied.');
    }
  }
};

export const showNotification = (title: string, options: any) => {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, options);
  }
};

export const provinceMapping: { [key: string]: string } = {
  VT: 'ນະຄອນຫຼວງວຽງຈັນ',
  VI: 'ວຽງຈັນ',
  BL: 'ບໍລິຄຳໄຊ',
  XS: 'ໄຊສົມບູນ',
  BK: 'ບໍ່ແກ້ວ',
  HO: 'ຫົວພັນ',
  LM: 'ຫຼວງນ້ຳທາ',
  LP: 'ຫຼວງພະບາງ',
  XA: 'ໄຊຍະບູລີ',
  XI: 'ຊຽງຂວາງ',
  AT: 'ອັດຕະປື',
  CH: 'ຈຳປາສັກ',
  KH: 'ຄຳມ່ວນ',
  OU: 'ອຸດົມໄຊ',
  PH: 'ຜົ້ງສາລີ',
  SL: 'ສາລະວັນ',
  SV: 'ສະຫວັນນະເຂດ',
  XE: 'ເຊກອງ',
};

export const getProvinceFullName = (shortcut: string) => {
  return provinceMapping[shortcut] || shortcut;
};

export const generateOrderNumber = (): string => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

  const randomString = Math.random().toString(36).substring(2, 5).toUpperCase();

  return `${randomString}${hours}${minutes}${seconds}${milliseconds}`;
};

export function capitalize(theme: string) {
  return theme.charAt(0).toUpperCase() + theme.slice(1);
}

export const getFilename = (images: string): string | null => {
  try {
    const parsedImages = JSON.parse(images ?? '[]');
    if (Array.isArray(parsedImages) && parsedImages.length > 0) {
      return parsedImages[0]?.filename || null;
    }
    return null;
  } catch (error) {
    console.error('Error parsing images:', error);
    return null;
  }
};

export const getCurrentDateInLaos = () => {
  const nowUTC = new Date();
  const laosOffset = 7 * 60; // Laos is UTC+7, so add 7 hours in minutes
  const laosTime = new Date(nowUTC.getTime() + laosOffset * 60 * 1000);
  return laosTime;
};

export const formatPrice = (price: number, currency?: string) => {
  if (!currency) {
    // Format the price with commas without currency
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
    }).format(price);
  }
  // Format the price with commas to LAK
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency || 'LAK',
  }).format(price);
};

export const formatLaoDate = (dateString: string = '2024-10-06T15:29:40.040Z'): string => {
  const [datePart, timePart] = dateString.split('T');
  const [year, month, day] = datePart.split('-');
  const [time] = timePart.split('.');

  const monthNames = [
    'ມັງກອນ',
    'ກຸມພາ',
    'ມີນາ',
    'ເມສາ',
    'ພຶດສະພາ',
    'ມິຖຸນາ',
    'ກໍລະກົດ',
    'ສິງຫາ',
    'ກັນຍາ',
    'ຕຸລາ',
    'ພະຈິກ',
    'ທັນວາ',
  ];
  const monthName = monthNames[parseInt(month, 10) - 1];

  return `${parseInt(day, 10)} ${monthName} ${year} - ${time}`;
};

export function isAgeValid(dob: string): boolean {
  const birthDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1 >= 18;
  }

  return age >= 18;
}

export function isValidPhoneNumber(phoneNumber: string): boolean {
  // Remove all non-numeric characters
  const normalizedNumber = phoneNumber.replace(/\D/g, '');

  // Check if the number starts with "20" and is exactly 10 digits long
  return /^20\d{8}$/.test(normalizedNumber);
}

export const checkFormErrors = (errors: any) => {
  if (errors.shop_id) {
    toast({
      title: 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ',
      variant: 'warning',
    });
  } else if (errors.user_province) {
    toast({
      title: 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ',
      variant: 'warning',
    });
  } else if (errors.user_district) {
    toast({
      title: 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ',
      variant: 'warning',
    });
  } else if (errors.user_village) {
    toast({
      title: 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ',
      variant: 'warning',
    });
  } else if (errors.day) {
    toast({
      title: 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ',
      variant: 'warning',
    });
  } else if (errors.month) {
    toast({
      title: 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ',
      variant: 'warning',
    });
  } else if (errors.year) {
    toast({
      title: 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ',
      variant: 'warning',
    });
  } else if (errors.user_phone) {
    toast({
      title: 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ',
      variant: 'warning',
    });
  } else if (errors.user_gender) {
    toast({
      title: 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ',
      variant: 'warning',
    });
  } else if (errors.accept_terms) {
    toast({
      title: 'ກະລຸນາຍອມຮັບເງື່ອນໄຂ ແລະ ຂໍ້ກຳນົດການໃຊ້ງານ',
      variant: 'warning',
    });
  } else if (errors.event_id) {
    toast({
      title: 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ',
      variant: 'warning',
    });
  }
};
