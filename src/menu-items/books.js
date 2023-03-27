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

const books = {
    id: 'books',
    title: 'Livres',
    type: 'group',
    children: [{
            id: 'Nouveau livre',
            title: 'Nouveau livre',
            type: 'item',
            url: '/books/new-book',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'list-livre',
            title: 'Liste des livres',
            type: 'item',
            url: '/books/list-books',
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

export default books;