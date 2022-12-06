import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
// components
import hinhanh404 from '../assets/404-error.png';


// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Inactive() {
  return (
    <Container>
      <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
        <Typography variant="h3" paragraph>
          Tài khoản của bạn đã bị khóa tạm thời !
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Bạn muốn biết chi tiết xin liên hệ qua số điện thoại 0954756557.
        </Typography>

        <div style={{
          padding: '5% 0',
          width: '100%', display: 'flex',
          justifyContent: 'space-around', textAlign: 'center', alignItems: 'center'
        }} className="number">
          <img className='img' src={hinhanh404} alt="login" width={'80%'} />

        </div>

        <Button to="/" size="medium" variant="contained" component={RouterLink}>
          VỀ TRANG CHỦ
        </Button>
      </ContentStyle>
    </Container>
  );
}
