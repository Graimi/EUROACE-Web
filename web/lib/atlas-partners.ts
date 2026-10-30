import { partners } from './project';

const transparentLogos: Record<
  string,
  { image: string; width: number; height: number }
> = {
  '/logo-evora.png': {
    image: '/logo-evora-transparent-2026.svg',
    width: 331.5,
    height: 106.9,
  },
  '/logo-ubi.jpeg': {
    image: '/logo-ubi-transparent-2026.svg',
    width: 192.857,
    height: 90,
  },
};

export const atlasPartners = partners.map((partner) => ({
  ...partner,
  ...transparentLogos[partner.image],
}));
export const partnerRegions = [
  'Extremadura',
  'Extremadura',
  'Alentejo',
  'Centro',
];
