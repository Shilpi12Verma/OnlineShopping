import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './Avtar.css'

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
    <button className='avt'>
      <Avatar alt="Remy Sharp" src="/image/man.png" />
      <p>Men</p>
      </button>
      <button className='avt'>
      <Avatar alt="Travis Howard" src="/image/women.png" />
      <p>Women</p>
      </button>
      <button className='avt'>
      <Avatar alt="Cindy Baker" src="/image/child.png" />
      <p>Child</p>
      </button>
      <button className='avt'>
      <Avatar alt="Cindy Baker" src="/image/ring.png" />
      <p>Ring</p>
      </button>
      <button className='avt'>
      <Avatar alt="Cindy Baker" src="/image/tv.jpg" />
      <p>Telivision</p>
      </button>
      <button className='avt'>
      <Avatar alt="Cindy Baker" src="/image/bag.png" />
      <p>Women Bag</p>
      </button>
      <button className='avt'>
      <Avatar alt="Cindy Baker" src="/image/phone.jpg" />
      <p>Mobile</p>
      </button>
    </Stack>
  );
}