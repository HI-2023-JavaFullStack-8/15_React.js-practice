import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Menu({ menu }) {
    if (!menu) {
        return <div>No menu data available</div>;
    }

    const { menuName, detail } = menu;

    const addCommasToNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Menu: {menuName}</h2>
            {detail && (
                <div style={{ display: 'inline-block', maxWidth: '100%' }}>
                    <img src={detail.image} style={{ maxWidth: '100%' }} alt='No image'/>
                    <TableContainer component={Paper} style={{ maxWidth: '100%', margin: 'auto', marginTop: '20px' }}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" style={{ fontWeight: 'bold' }}>Attribute</TableCell>
                                    <TableCell align="left" style={{ fontWeight: 'bold' }}>Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row" style={{ maxWidth: '200px', paddingRight: '20px', wordWrap: 'break-word' }} align="left">What it is</TableCell>
                                    <TableCell align="left">{menu.detail ? menu.detail.description : ""}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" style={{ maxWidth: '200px', paddingRight: '20px' }} align="left">Price</TableCell>
                                    <TableCell align="left">KRW {addCommasToNumber(menu.menuPrice)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" style={{ maxWidth: '200px', paddingRight: '20px' }} align="left">Category</TableCell>
                                    <TableCell align="left">{menu.categoryName}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" style={{ maxWidth: '200px', paddingRight: '20px' }} align="left">Available</TableCell>
                                    <TableCell align="left">{menu.isOrderable ? "Yes" : "No"}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )}
        </div>
    );
}
