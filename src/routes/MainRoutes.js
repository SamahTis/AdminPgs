import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import ListUseers from "../views/users/ListUsers";
import NewBook from 'views/books/NewBook';
import ListBooks from 'views/books/ListBooks';
import NewEmprunt from 'views/emprunts/NewEmprunt';
import BooksEmprunt from 'views/emprunts/BooksEmprunt';

// dashboard routing
const DashboardDefault = Loadable(lazy(() =>
    import ('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() =>
    import ('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() =>
    import ('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() =>
    import ('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() =>
    import ('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() =>
    import ('views/utilities/TablerIcons')));
const NewUser = Loadable(lazy(() =>
    import ('views/users/NewUser')));
const ListUsers = Loadable(lazy(() =>
    import ('views/users/ListUsers')));

// sample page routing
const SamplePage = Loadable(lazy(() =>
    import ('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: < MainLayout / > ,
    children: [{
            path: '/',
            element: < DashboardDefault / >
        },
        {
            path: 'dashboard',
            children: [{
                path: 'default',
                element: < DashboardDefault / >
            }]
        },
        // Users
        {
            path: 'users',
            children: [{
                    path: 'new-user',
                    element: < NewUser / >
                },
                {
                    path: 'list-users',
                    element: < ListUsers / >
                }
            ]
        },
        {
            path: 'books',
            children: [{
                    path: 'new-book',
                    element: < NewBook / >
                },
                {
                    path: 'list-books',
                    element: < ListBooks / >
                }
            ]

        },
        {
            path: 'emprunts',
            children: [{
                    path: 'new-emprunt',
                    element: < NewEmprunt / >
                },
                {
                    path: 'books-emprunt',
                    element: < BooksEmprunt / >
                }
            ]
        },
        {
            path: 'utils',
            children: [{
                path: 'util-typography',
                element: < UtilsTypography / >
            }]
        },
        {
            path: 'utils',
            children: [{
                path: 'util-color',
                element: < UtilsColor / >
            }]
        },
        {
            path: 'utils',
            children: [{
                path: 'util-shadow',
                element: < UtilsShadow / >
            }]
        },
        {
            path: 'icons',
            children: [{
                path: 'tabler-icons',
                element: < UtilsTablerIcons / >
            }]
        },
        {
            path: 'icons',
            children: [{
                path: 'material-icons',
                element: < UtilsMaterialIcons / >
            }]
        },
        {
            path: 'sample-page',
            element: < SamplePage / >
        }
    ]
};

export default MainRoutes;