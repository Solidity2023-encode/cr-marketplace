import { Grid, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { SectionItem } from '../../../types/config';
import { AssetCardWithData } from '../../nft/components/AssetCardWidthData';
import CollectionCardWithData from './CollectionCardWithData';

interface Props {
  title: React.ReactNode | React.ReactNode[];
  items: SectionItem[];
}
const LogoImage = styled('img')({});

export function FeaturedSection({ title, items }: Props) {
  const renderItems = () => {
    return items.map((item, index: number) => {
      if (item.type === 'asset' && item.tokenId !== undefined) {
        return (
          <Grid item xs={6} sm={3} key={index}>
            <AssetCardWithData
              address={item.contractAddress}
              id={item.tokenId}
            />
          </Grid>
        );
      } else if (item.type === 'collection') {
        return (
          <Grid item xs={12} sm={6} key={index}>
            <CollectionCardWithData
              contractAddress={item.contractAddress}
              chainId={item.chainId}
              title={item.title}
              backgroundImageUrl={item.backgroundImageUrl}
            />
          </Grid>
        );
      }
    });
  };

  return (
    <Box color="#f5c89e" py={8}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <LogoImage
              src="/assets/images/market-logo-big.svg"
              sx={{ height: 100, width: '100%' }}
            />
            {/* <Typography align="center" variant="h3" component="h1">
              {title}
            </Typography> */}
          </Grid>
          {renderItems()}
        </Grid>
      </Container>
    </Box>
  );
}
