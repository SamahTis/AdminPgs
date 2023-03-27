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

const orders = {
    id: 'orders',
    title: 'Emprutes',
    type: 'group',
    children: [{
        id: 'emprunter-livre',
        title: 'Emprunter livre',
        type: 'item',
        url: '/emprunts/new-emprunt',
        icon: icons.IconTypography,
        breadcrumbs: false
    },
    {
        id: 'book-emprunts',
        title: 'Livres empruntés',
        type: 'item',
        url: '/emprunts/books-emprunt',
        icon: icons.IconPalette,
        breadcrumbs: false
    },

        // {
        //     id: 'icons',
        //     title: 'Icons',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [{
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

export default orders;