import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RHFTextField from '../bo_sung/RHFTextField';
import { Stack, IconButton, InputAdornment, Checkbox } from '@mui/material';
import { useForm } from 'react-hook-form';
import FormProvider from '../bo_sung/FormProvider';
import '../css/Login_1.css'
import { Visibility, VisibilityOff } from '@mui/icons-material';
function Login_1() {
    const navigate = useNavigate();
    const [showPassConf, setShowPassConf] = useState(false);

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const defaultValues = {
        email: '',
        password: '',
        remember: true,
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async () => {
        navigate('/Home', { replace: true });
    };

    return (
        <div className="container">
            <div className="logo_form">
                <img className='logo' src='https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png' />
                <h1 className='name_logo'>Vagaboon</h1>
            </div>

            <div className='login'>
                <div className='form_login_title'>
                    <p className='title_content'>Đăng nhập</p>
                    <p className='nouser'>Không có tài khoản ?</p>
                </div>
                <div className='form_login_input'>
                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={3}>
                            <RHFTextField name="email" label="Email address" />

                            <RHFTextField
                                name="password"
                                label="Password"
                                type={showPassConf ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassConf(!showPassConf)}>
                                                {showPassConf ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Stack>
                    </FormProvider>
                </div>

                <div className='form_login_forgetmenot'>
                    <div className='form_login_forgetmenot_left'>
                        <Checkbox />
                        <div className='title_chb'>Lưu mật khẩu</div>
                    </div>
                    <p>Quên mật khẩu ?</p>
                </div>

                <div className='form_login_btn'>
                    Đăng nhập
                </div>
                <div className='login_or'>Đăng nhập với</div>
                <div className='form_login_with'>

                    <div className='btn_gg'>
                        <div className='logo_gg'></div>
                        <div className='title_gg'>
                            Google
                        </div>
                    </div>

                    <div className='btn_tw'>
                        <div  className='logo_tw'/>
                        <div className='title_tw'>
                            Twiter
                        </div>
                    </div>

                    <div className='btn_fb'>
                        <div className='logo_fb'></div>
                        <div className='title_fb'>
                            Facebook
                        </div>
                    </div>

                </div>
            </div>

            <div className='footer_login'>
                <div className='footer_login_content'>
                    <div className='about_we'>Về chúng tôi</div>
                    <div className='about_line'></div>
                    <div className='about_we'>Các điều khoản</div>
                    <div className='about_line'></div>
                    <div className='about_we'>Chính sách bảo mật</div>
                    <div className='about_line'></div>
                    <div className='about_we'>Trung tâm trợ giúp</div>
                </div>
                <div className=''>©2022 Bản quyền thuộc về Công Ty TNHH Sản Xuất Đầu Tư TM DV XNK Vũ Gia Group.</div>
            </div>
        </div>
    )
}
export default Login_1;