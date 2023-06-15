import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NewsLayout.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ImgDescription from '../../components/ImgDescription/ImgDescription';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faTiktok,
    faGoogle,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const NewsLayout = () => {
    const id = useParams().id;

    return (
        <>
            <Navbar />
            <section>
                <div class={cx('container')}>
                    <div className={cx('content')}>
                        <div className={cx('header')}>
                            <a>Tin tức Ecogreen</a>
                            <h1>
                                Eco Green Sài Gòn - Nơi an cư lý tưởng tại trung
                                tâm Quận 7
                            </h1>
                        </div>
                        <div className={cx('body')}>
                            <p>
                                Eco Green Sài Gòn là dự án chung cư cao cấp tọa
                                lạc tại Quận 7, nằm trong khu vực có nhiều tiện
                                ích và dịch vụ đẳng cấp như Công viên Hương
                                Tràm, trung tâm thương mại, trường học, bệnh
                                viện với kiến trúc hiện đại và nhiều tiện ích
                                cao cấp cho những ai muốn sở hữu một căn hộ tại
                                khu vực trung tâm.
                            </p>
                            <ImgDescription
                                src="https://ecogreenq7.vn/rentalservicesg/outsideImages/view.jpg"
                                des="Eco Green Sài Gòn với kiến trúc hiện đại và tiện ích cao cấp"
                            />
                            <h2>Vị trí đắc địa ngay trung tâm thành phố.</h2>
                            <p>
                                Toạ lạc tại đường Nguyễn Văn Linh, gần chung cư
                                Nguyễn Tất Thành, Eco Green Sài Gòn thuận tiện
                                cho việc di chuyển đến các khu vực khác trong
                                thành phố, đặc biệt là quận 1, quận 4 các khu đô
                                thị mới như Phú Mỹ Hưng chỉ trong vài phút
                            </p>
                            <ImgDescription
                                src="https://ecogreenq7.vn/rentalservicesg/outsideImages/view.jpg"
                                des="Dự án Eco Green Sài Gòn là giao điểm kết nối 3 khu đô thị lớn"
                            />
                            <p>
                                Ngoài ra, với cách liền kề với Công viên Hương
                                Tràm, cư dân tại Eco Green Sài Gòn có thể thưởng
                                ngoạn không gian xanh trong lành và tận hưởng
                                cuộc sống đầy đủ tiện ích. Bên cạnh đó, tại đây
                                còn có nhiều trường học, bệnh viện, trung tâm
                                thương mại và các cửa hàng tiện lợi đáp ứng mọi
                                nhu cầu của cư dân.
                            </p>
                            <h2>Kiến trúc hiện đại và thân thiện môi trường</h2>
                            <p>
                                Dự án Eco Green Sài Gòn bao gồm 4 tòa nhà cao 25
                                tầng với tổng số lượng căn hộ lên đến hơn 1.200
                                căn hộ. Mỗi tòa nhà được thiết kế đẹp mắt với sự
                                kết hợp giữa kiến trúc hiện đại cùng tiêu chuẩn
                                xanh và với mục đích tạo ra một không gian sống
                                thân thiện với môi trường.
                            </p>
                            <ImgDescription
                                src="https://ecogreenq7.vn/rentalservicesg/outsideImages/view.jpg"
                                des="Kiến trúc hiện đại kết hợp lối sống thân thiện gần gũi môi trường"
                            />
                            <p>
                                Eco Green Sài Gòn cung cấp cho cư dân không chỉ
                                một môi trường sống tốt cho sức khỏe mà còn bảo
                                vệ môi trường xung quanh. Đây là một trong những
                                tiêu chí mà người yêu thích không gian xanh và
                                môi trường sống trong lành không thể bỏ qua.
                            </p>
                            <h2>
                                Dịch vụ tiện ích cho cư dân được đầu tư nghiêm
                                túc.
                            </h2>
                            <p>
                                Bên cạnh lợi thế vị trí thuận lợi, các căn hộ
                                Eco Green Sài Gòn được trang bị đầy đủ các thiết
                                bị và khuôn viên của dự án còn có các tiện ích
                                đa dạng như hồ bơi, phòng tập gym, khu vui chơi
                                trẻ em, khu BBQ, sân chơi thể thao và hệ thống
                                an ninh 24/7 đảm bảo an toàn cho cư dân tại đây.
                            </p>
                            <ImgDescription
                                src="https://ecogreenq7.vn/rentalservicesg/outsideImages/view.jpg"
                                des="Tầm nhìn đẹp nhất thành phố từ căn hộ Eco Green Sài Gòn"
                            />
                            <p>
                                Đặc biệt, các căn hộ Eco Green Sài Gòn còn có
                                tầm nhìn đẹp nhất của thành phố với căn hộ view
                                Landmark 81, là tòa nhà cao nhất Việt Nam hiện
                                nay.
                            </p>
                            <h2>
                                Không những là tài sản mà còn là một cơ hội đầu
                                tư tiềm năng
                            </h2>
                            <p>
                                Nếu là một nhà đầu tư, đây là một cơ hội tuyệt
                                vời để sở hữu một căn hộ tại Eco Green Sài Gòn.
                                Dự án này không chỉ là một nơi lý tưởng để sống
                                mà còn là một cơ hội đầu tư tiềm năng. Không chỉ
                                vị trí thuận tiện và tiện ích đầy đủ, Eco Green
                                Sài Gòn còn có khả năng cho thuê cao với nhu cầu
                                tăng cao của khách hàng. Với lượng khách du lịch
                                và người nước ngoài đến Hồ Chí Minh ngày càng
                                tăng, việc sở hữu một căn hộ tại Eco Green Sài
                                Gòn có thể mang lại lợi nhuận cho nhà đầu tư
                                thông qua cho thuê dài hạn hoặc cho thuê ngắn
                                hạn. Hơn nữa, dự án cũng có nhiều chính sách ưu
                                đãi và hỗ trợ vay ngân hàng cho nhà đầu tư.
                            </p>
                            <h2>Lời kết</h2>
                            <p>
                                Nếu bạn đang tìm kiếm một không gian sống trong
                                lành, tiện nghi đầy đủ và thuận tiện cho việc di
                                chuyển, hãy đến với Eco Green Sài Gòn để trải
                                nghiệm cuộc sống xứng đáng với giá trị của bạn.
                                Hơn nữa, Eco Green Sài Gòn còn được đánh giá là
                                một trong những dự án căn hộ giá rẻ gần quận 1
                                và quận 4. Với mức giá hợp lý nhưng vẫn đảm bảo
                                chất lượng, đây là cơ hội tuyệt vời cho những ai
                                muốn sở hữu một căn hộ tại khu vực trung tâm của
                                thành phố hoặc đang tìm kiếm một cơ hội đầu tư
                                tiềm năng trong lĩnh vực bất động sản.{' '}
                                <a>Liên hệ ngay</a> để được tư vấn và tham quan
                                căn hộ mẫu của dự án.
                            </p>
                        </div>
                        <div className={cx('footer')}>
                            <div className={cx('footer-social-network-links')}>
                                <a href="/">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon icon={faTiktok} />
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </div>
                            <div className={cx('navigator')}>
                                <a href="/">
                                    <div>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </div>
                                    <div>
                                        <p>
                                            Căn hộ hạng sang Tumys Phú Mỹ –
                                            “Hàng Hiếm” của BĐS Bà Rịa – Vũng
                                            Tàu
                                        </p>
                                    </div>
                                </a>
                                <a href="/">
                                    <div>
                                        <p>
                                            Căn hộ hạng sang Tumys Phú Mỹ –
                                            “Hàng Hiếm” của BĐS Bà Rịa – Vũng
                                            Tàu
                                        </p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={cx('another-content')}>
                        <h2>Tin mới</h2>
                        <ul>
                            <li>
                                <a href="/">
                                    Căn hộ hạng sang Tumys Phú Mỹ – “Hàng Hiếm”
                                    của BĐS Bà Rịa – Vũng Tàu
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Căn hộ hạng sang Tumys Phú Mỹ – “Hàng Hiếm”
                                    của BĐS Bà Rịa – Vũng Tàu
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Căn hộ hạng sang Tumys Phú Mỹ – “Hàng Hiếm”
                                    của BĐS Bà Rịa – Vũng Tàu
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Căn hộ hạng sang Tumys Phú Mỹ – “Hàng Hiếm”
                                    của BĐS Bà Rịa – Vũng Tàu
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default NewsLayout;
