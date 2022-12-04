import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faListCheck,
    faCouch,
    faPenRuler,
} from '@fortawesome/free-solid-svg-icons';

export const logo_url =
    'https://tienphongholding.com/wp-content/uploads/2019/08/logo-home.png';

export const SERVICES = [
    {
        thumb_url: <FontAwesomeIcon icon={faListCheck} />,
        mainTitle: 'Property Management',
        subTitle:
            'Under the authority of the landlord, we are responsible for solving resolving any requests or problems you encounter during the contract period.',
    },
    {
        thumb_url: <FontAwesomeIcon icon={faCouch} />,
        mainTitle: 'Furniture Maintenance',
        subTitle:
            'Our team of furniture maintainers are the most skilled you can find. Your trust is deserved!',
    },
    {
        thumb_url: <FontAwesomeIcon icon={faPenRuler} />,
        mainTitle: 'Furniture design and distribution',
        subTitle:
            'Not only selling and renting apartments, customers are also very satisfied with our interior layout, we can make every corner of your apartment to be perfect.',
    },
];
