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

export const SERVICES_VI = [
    {
        thumb_url: <FontAwesomeIcon icon={faListCheck} />,
        mainTitle: 'Quản lý tài sản',
        subTitle:
            'Dưới sự ủy quyền của chủ nhà, chúng tôi có trách nhiệm giải quyết mọi yêu cầu, vướng mắc của bạn gặp phải trong thời gian hợp đồng.',
    },
    {
        thumb_url: <FontAwesomeIcon icon={faCouch} />,
        mainTitle: 'Bảo trì nội thất',
        subTitle:
            'Đội ngũ bảo trì đồ nội thất của chúng tôi là những người lành nghề nhất mà bạn có thể tìm thấy. Sự tin tưởng của bạn là xứng đáng!',
    },
    {
        thumb_url: <FontAwesomeIcon icon={faPenRuler} />,
        mainTitle: 'Thiết kế và phân phối nội thất',
        subTitle:
            'Không chỉ bán và cho thuê căn hộ, khách hàng còn rất hài lòng với cách bố trí nội thất của chúng tôi, chúng tôi có thể biến mọi ngóc ngách trong căn hộ của bạn trở nên hoàn hảo.',
    },
];
