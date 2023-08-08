import headerImg from "../../../../assets/images/Image_header.png";
import {useLocation} from "react-router-dom";
import {shouldChessboardDisappear} from "../../../../utilities/chessboardUtils.js";

const HeaderChessboard = ({ chessboardDisappear }) => {
    const { pathname } = useLocation();
    const shouldDisappear = shouldChessboardDisappear(pathname, window.scrollY);

    if(shouldDisappear) {
        return null;
    }

    return (
        <>
            <img src={headerImg} alt="Un échiquier" className={chessboardDisappear ? 'chessboard-disappear' : 'chessboard'} />
        </>
    )
}

export default HeaderChessboard;