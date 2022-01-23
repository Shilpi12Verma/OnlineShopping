import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './Avtar.css'

export default function ImageAvatars1() {
  return (
      <center>
    <Stack direction="row" spacing={2}>
    <button className='avt'>
      <Avatar alt="Remy Sharp" src="/image/cust.png"/>
      <p className='small'>Customer Support</p>
      </button>
      <button className='avt'>
      <Avatar alt="Travis Howard" src="/image/payment.png" />
      <p className='small'>Secured Payment</p>
      </button>
      <button className='avt'>
      <Avatar alt="Cindy Baker" src="/image/home.png" />
      <p className='small'>Free Home Delivery</p>
      </button>
      <button className='avt'>
      <Avatar alt="Cindy Baker" src="/image/return.jpg" />
      <p className='small'>30 Day Reuters</p>
      </button>
    </Stack>
    </center>
  );
}