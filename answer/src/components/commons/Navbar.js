/*
    Navbar 컴포넌트 작성

    1. 상단 메뉴바 만들기
    2. 로그인 조건에 따라 로그인/로그아웃 현출
    3. localStorage 활용해 로그아웃 시 로그인 정보 삭제

*/

import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Link } from 'react-router-dom';

function Navbar() {
    const [value, setValue] = React.useState('1');

    const onChangeHandler = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                    <TabList onChange={onChangeHandler} sx={{ justifyContent: 'space-between', paddingX: 2, gap: 2 }}>
                        <Tab label="HOME" value="1" component={Link} to="/" />
                        <Tab label="MENU" value="2" component={Link} to="/menus" />
                    </TabList>
                </Box>
            </TabContext>
        </Box>
    );
}

export default Navbar;