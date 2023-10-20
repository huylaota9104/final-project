'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Biển',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Cối xay gió',
    icon: GiWindmill,
    description: 'This property is has windmills!',
  },
  {
    label: 'Hiện đại',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
  {
    label: 'Đồng quê',
    icon: TbMountain,
    description: 'This property is in the countryside!'
  },
  {
    label: 'Bể bơi',
    icon: TbPool,
    description: 'This is property has a beautiful pool!'
  },
  {
    label: 'Đảo',
    icon: GiIsland,
    description: 'This property is on an island!'
  },
  {
    label: 'Hồ',
    icon: GiBoatFishing,
    description: 'This property is near a lake!'
  },
  {
    label: 'Tuyết',
    icon: FaSkiing,
    description: 'This property has skiing activies!'
  },
  {
    label: 'Lâu đài',
    icon: GiCastle,
    description: 'This property is an ancient castle!'
  },
  {
    label: 'Hang',
    icon: GiCaveEntrance,
    description: 'This property is in a spooky cave!'
  },
  {
    label: 'Cắm trại',
    icon: GiForestCamp,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Vùng cực',
    icon: BsSnow,
    description: 'This property is in arctic environment!'
  },
  {
    label: 'Sa mạc',
    icon: GiCactus,
    description: 'This property is in the desert!'
  },
  {
    label: 'Nông trại',
    icon: GiBarn,
    description: 'This property is in a barn!'
  },
  {
    label: 'Sang trọng',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;