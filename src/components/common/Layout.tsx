import React from 'react';
import { Grid } from '@mui/material';
import SectionHeader from './SectionHeader';

type Props = {
  content: JSX.Element | undefined,
  title: string,
  sx?: Record<string, string | number>,
  mb?: string,
  sectionSubHeader?: JSX.Element | null,
}

const Layout = ({ content, title, sx = {}, mb = '0', sectionSubHeader = null }: Props) => {
  return (
    <Grid container sx={sx}>
      <Grid item xs={12}>
        <SectionHeader title={title} mb={mb} />
        {sectionSubHeader}
      </Grid>
      {content}
    </Grid>
  );
};

export default Layout;
