import React from "react";
import { useLocation } from "react-router-dom";
import {useStyles} from '../style';
import "../style.scss";
import Navbar from "../../Navbar";
import Grid from "@material-ui/core/Grid";
import Footer from "../../Footer";
import {LayoutProps} from "../type";



const ItAdminLayout = (props: LayoutProps) => {
  const { children, subMenuItems } = props;
  const classes = useStyles();

  const pathLocation:any = useLocation().pathname;
  
  const menuItems = [
    {
      label: "Materials",
      link: "/itAdmin/materials",
      color: pathLocation === "/itAdmin/materials" || pathLocation === "/itAdmin/materials" ? "#d2435e" : ""
    },
    {
      label: "Dashboard",
      link: "/itAdmin/dashboard",
      color: pathLocation === "/itAdmin/dashboard" ? "#d2435e" : ""
    },
    

    {
      label: "Materials",
      link: "/itAdmin/materials",
      color: pathLocation === "/itAdmin/materials" || pathLocation === "/itAdmin/materials" ? "#d2435e" : ""
    },
    
    {
      label: "Enfants",
      link: "/itAdmin/enfants",
      color: pathLocation === "/itAdmin/enfants" || pathLocation === "/itAdmin/enfants" ? "#d2435e" : ""
    },

    {
      label: "Items",
      link: "/itAdmin/items",
      color: pathLocation === "/itAdmin/items" || pathLocation === "/itAdmin/items" ? "#d2435e" : ""
    },
    
  ];

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container spacing={3}>
            {/* Top navigation bar */}
            <Grid item xs={12} style={{ height: "12vh" }}>
              <Navbar menuItems={menuItems} />
            </Grid>
            {subMenuItems && (
              // Left side menu
              <Grid item xs={12} sm={2}>
              </Grid>
            )}

            <Grid item xs>
              <main className={classes.papers}>{children}</main>
            </Grid>
          </Grid>
        </div>

        <Footer/>
      </div>
    </>
  );
};


export default ItAdminLayout;


// import { useEffect } from 'react';
// import NextLink from 'next/link';
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
// import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// import { ChartBar as ChartBarIcon } from '../../../icons/chart-bar';
// import { Cog as CogIcon } from '../../../icons/cog';
// import { Lock as LockIcon } from '../../../icons/lock';
// import { Selector as SelectorIcon } from '../../../icons/selector';
// import { ShoppingBag as ShoppingBagIcon } from '../../../icons/shopping-bag';
// import { User as UserIcon } from '../../../icons/user';
// import { UserAdd as UserAddIcon } from '../../../icons/user-add';
// import { Users as UsersIcon } from '../../../icons/users';
// import { XCircle as XCircleIcon } from '../../../icons/x-circle';
// import { Logo } from '../../logo';
// import { NavItem } from '../../nav-item';


// const items = [
//   {
//     href: '/',
//     icon: (<ChartBarIcon fontSize="small" />),
//     title: 'Dashboard'
//   },
//   {
//     href: '/customers',
//     icon: (<UsersIcon fontSize="small" />),
//     title: 'Customers'
//   },
//   {
//     href: '/products',
//     icon: (<ShoppingBagIcon fontSize="small" />),
//     title: 'Products'
//   },
//   {
//     href: '/account',
//     icon: (<UserIcon fontSize="small" />),
//     title: 'Account'
//   },
//   {
//     href: '/settings',
//     icon: (<CogIcon fontSize="small" />),
//     title: 'Settings'
//   },
//   {
//     href: '/login',
//     icon: (<LockIcon fontSize="small" />),
//     title: 'Login'
//   },
//   {
//     href: '/register',
//     icon: (<UserAddIcon fontSize="small" />),
//     title: 'Register'
//   },
//   {
//     href: '/404',
//     icon: (<XCircleIcon fontSize="small" />),
//     title: 'Error'
//   }
// ];

// export const DashboardSidebar = (props:any) => {
//   const { open, onClose } = props;
//   const router = useRouter();
//   const lgUp = useMediaQuery((theme:any) => theme.breakpoints.up('lg'), {
//     defaultMatches: true,
//     noSsr: false
//   });

//   useEffect(
//     () => {
//       if (!router.isReady) {
//         return;
//       }

//       if (open) {
//         onClose?.();
//       }
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [router.asPath]
//   );

//   const content = (
//     <>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           height: '100%'
//         }}
//       >
//         <div>
//           <Box sx={{ p: 3 }}>
//             <NextLink
//               href="/"
//               passHref
//             >
//               <a>
//                 <Logo
//                   sx={{
//                     height: 42,
//                     width: 42
//                   }}
//                 />
//               </a>
//             </NextLink>
//           </Box>
//           <Box sx={{ px: 2 }}>
//             <Box
//               sx={{
//                 alignItems: 'center',
//                 backgroundColor: 'rgba(255, 255, 255, 0.04)',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 px: 3,
//                 py: '11px',
//                 borderRadius: 1
//               }}
//             >
//               <div>
//                 <Typography
//                   color="inherit"
//                   variant="subtitle1"
//                 >
//                   Acme Inc
//                 </Typography>
//                 <Typography
//                   color="neutral.400"
//                   variant="body2"
//                 >
//                   Your tier
//                   {' '}
//                   : Premium
//                 </Typography>
//               </div>
//               <SelectorIcon
//                 sx={{
//                   color: 'neutral.500',
//                   width: 14,
//                   height: 14
//                 }}
//               />
//             </Box>
//           </Box>
//         </div>
//         <Divider
//           sx={{
//             borderColor: '#2D3748',
//             my: 3
//           }}
//         />
//         <Box sx={{ flexGrow: 1 }}>
//           {items.map((item) => (
//             <NavItem
//               key={item.title}
//               icon={item.icon}
//               href={item.href}
//               title={item.title}
//             />
//           ))}
//         </Box>
//         <Divider sx={{ borderColor: '#2D3748' }} />
//         <Box
//           sx={{
//             px: 2,
//             py: 3
//           }}
//         >
//           <Typography
//             color="neutral.100"
//             variant="subtitle2"
//           >
//             Need more features?
//           </Typography>
//           <Typography
//             color="neutral.500"
//             variant="body2"
//           >
//             Check out our Pro solution template.
//           </Typography>
//           <Box
//             sx={{
//               display: 'flex',
//               mt: 2,
//               mx: 'auto',
//               width: '160px',
//               '& img': {
//                 width: '100%'
//               }
//             }}
//           >
//             <img
//               alt="Go to pro"
//               src="/static/images/sidebar_pro.png"
//             />
//           </Box>
//           <NextLink
//             href="https://material-kit-pro-react.devias.io/"
//             passHref
//           >
//             <Button
//               color="secondary"
//               component="a"
//               endIcon={(<OpenInNewIcon />)}
//               fullWidth
//               sx={{ mt: 2 }}
//               variant="contained"
//             >
//               Pro Live Preview
//             </Button>
//           </NextLink>
//         </Box>
//       </Box>
//     </>
//   );

//   if (lgUp) {
//     return (
//       <Drawer
//         anchor="left"
//         open
//         PaperProps={{
//           sx: {
//             backgroundColor: 'neutral.900',
//             color: '#FFFFFF',
//             width: 280
//           }
//         }}
//         variant="permanent"
//       >
//         {content}
//       </Drawer>
//     );
//   }

//   return (
//     <Drawer
//       anchor="left"
//       onClose={onClose}
//       open={open}
//       PaperProps={{
//         sx: {
//           backgroundColor: 'neutral.900',
//           color: '#FFFFFF',
//           width: 280
//         }
//       }}
//       sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
//       variant="temporary"
//     >
//       {content}
//     </Drawer>
//   );
// };

// DashboardSidebar.propTypes = {
//   onClose: PropTypes.func,
//   open: PropTypes.bool
// };
// export default DashboardSidebar;