import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import './css/Progress.css'

export default function Variants() {
  return (
    <Stack  spacing={1} sx={{  bgcolor: 'white', backgroundColor:'black' }}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem', bgcolor: 'white' }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} sx={{ fontSize: '1rem', bgcolor: 'white' }} />
    </Stack>
  );
}