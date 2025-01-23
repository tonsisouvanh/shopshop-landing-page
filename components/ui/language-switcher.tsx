'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  // get pathname wihtout locale
  const getPathnameWithoutLocale = (pathname: string) => {
    const paths = pathname.split('/');
    paths.splice(0, 2);
    return paths.join('/');
  };

  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();

  const handleChange = (value: string) => {
    const newLocale = value;
    startTransition(() => {
      if (query) {
        router.replace(`/${newLocale}/${getPathnameWithoutLocale(pathname)}?${query}`);
      } else {
        router.replace(`/${newLocale}/${getPathnameWithoutLocale(pathname)}`);
      }
    });
  };

  return (
    <Select onValueChange={handleChange} value={locale}>
      <SelectTrigger className="w-fit border border-slate-900 bg-transparent text-lg max-md:p-1 max-md:text-xs">
        <Globe size={16} className="mr-2" />
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="la">LA</SelectItem>
          <SelectItem value="en">EN</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
