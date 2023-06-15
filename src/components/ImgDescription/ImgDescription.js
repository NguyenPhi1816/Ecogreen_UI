import classNames from "classnames/bind";
import styles from './ImgDescription.module.scss';

const cx = classNames.bind(styles);

const ImgDescription = ({src = "", des = ""}) => {
    return (
        <div className={cx("container")}>
            <img src={src} alt={des} className={cx("img")}/>
            <p className={cx("des")}>{des}</p>
        </div>
    );
}

export default ImgDescription;