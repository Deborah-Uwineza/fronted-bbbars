// import "./style.scss";
// import { PeopleAlt, RequestQuote } from "@mui/icons-material";
// import { makeStyles } from "@material-ui/core/styles";

// import ItAdminLayout from "../../../components/Layout/ItAdmin";

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// type Props = {
//   history: any;
// };


// export const useStyles = makeStyles((theme) => ({
//   root: {
//     // display: 'flex',
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: "flex",
//     overflow: "auto",
//     flexDirection: "column",
//   },
//   fixedHeight: {
//     height: 240,
//   },
// }));

// const ItAdminDashboard = (props: Props) => {

//   return (
//     <ItAdminLayout>
//       <div className="section-1">
//         <div className="content row">
//           <div className="col dashboard-card">
//             <div className="icon-client">
//               <PeopleAlt style={{ color: "rgba(255, 166, 1)", opacity: 1 }} />
//             </div>
//             <div className="text">
//               {/* <h1>2000</h1>
//               <p>Users</p> */}
//               <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//             </div>
//           </div>
//           <div className="col dashboard-card">
//             <div className="dashboard-icon">
//               <RequestQuote
//                 style={{ color: "rgba(210, 67, 0, 1)", opacity: 1 }}
//               />
//             </div>
//             <div className="text">
//               <h1>1000</h1>
//               <p>Request</p>
//             </div>
//           </div>

//           <div className="col dashboard-card">
//             <div className="icon-client">
//               <PeopleAlt style={{ color: "rgba(255, 166, 1)", opacity: 1 }} />
//             </div>
//             <div className="text">
//               <h1>1000</h1>
//               <p>Received request</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </ItAdminLayout>
//   );
// };

// export default ItAdminDashboard;




// // export default function ActionAreaCard() {
// //   return (
// //     <Card sx={{ maxWidth: 345 }}>
// //       <CardActionArea>
// //         <CardMedia
// //           component="img"
// //           height="140"
// //           image="/static/images/cards/contemplative-reptile.jpg"
// //           alt="green iguana"
// //         />
// //         <CardContent>
// //           <Typography gutterBottom variant="h5" component="div">
// //             Lizard
// //           </Typography>
// //           <Typography variant="body2" color="text.secondary">
// //             Lizards are a widespread group of squamate reptiles, with over 6,000
// //             species, ranging across all continents except Antarctica
// //           </Typography>
// //         </CardContent>
// //       </CardActionArea>
// //     </Card>
// //   );
// // }

import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
//import { Budget } from '../components/dashboard/';
// import  LatestOrders  from '../../../components/dashboard/latest-orders';
// import LatestProducts  from '../../../components/dashboard/latest-products';
import  Sales  from '../../../components/dashboard/sales';
import  Material  from '../../../components/dashboard/Material';
import  Enfant  from '../../../components/dashboard/Enfant';
import  TasksProgress  from '../../../components/dashboard/tasks-progress';
// import { TotalCustomers } from '../components/dashboard/total-customers';
// import { TotalProfit } from '../components/dashboard/total-profit';
// import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
//import { DashboardLayout } from '../components/dashboard-layout';
import Budget from '../../../components/dashboard/Budget';

import DashboardLayout from '../../../components/dashboard-layout';


const Dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
            <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <Enfant/>
            </Grid>
            <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Material />
            <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
         </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          {/* <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid> */}
         
          {/* <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid> */}
          {/* <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page:any) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
  
    // <ItAdminLayout>
    //    {page}
    // </ItAdminLayout>
  );


export default Dashboard;