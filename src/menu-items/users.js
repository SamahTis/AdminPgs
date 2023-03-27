// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| Administrateurs ||============================== //

const users = {
    id: 'users',
    title: 'Administrateurs',
    type: 'group',
    children: [{
            id: 'Nouveau admin',
            title: 'Nouveau Admin',
            type: 'item',
            url: '/users/new-user',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'list-admin',
            title: 'Liste d\'administrateurs',
            type: 'item',
            url: '/users/list-users',
            icon: icons.IconPalette,
            breadcrumbs: false
        },

        // {
        //     id: 'icons',
        //     title: 'Icons',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [
        //         {
        //             id: 'tabler-icons',
        //             title: 'Tabler Icons',
        //             type: 'item',
        //             url: '/icons/tabler-icons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Material Icons',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         }
        //     ]
        // }
    ]
};

export default users;