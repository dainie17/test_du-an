import PropTypes from 'prop-types';
// material
import { Paper, Typography } from '@mui/material';

import Hinh from "../assets/logo_cty.png";

// ----------------------------------------------------------------------

SearchNotFound.propTypes = {
    searchQuery: PropTypes.string,
};

export default function SearchNotFound({ searchQuery = '', ...other }) {
    return (
        <Paper {...other}>
            <Typography gutterBottom align="center" variant="subtitle1">
                <img src={Hinh} width="200" height="200" />
            </Typography>
            <Typography variant="body2" align="center">
                Giỏ hàng hiện tại không có sản phẩm nào...
            </Typography>
        </Paper>
    );
}
