import headerImg from "../../../../assets/images/Image_header.png";
import leftBar from "../../../../assets/svg/left_bar.svg";
import rightBar from "../../../../assets/svg/right_bar.svg";

const HeaderTitle = ({ chessboardDisappear }) => {
    return (
        <>
            <div className="header-title">
                <img src={rightBar} alt="barre droite"
                    className={chessboardDisappear ? 'header-title--disappear-bar' : 'header-title--right-bar'} />
                <img src={leftBar} alt="barre gauche"
                    className={chessboardDisappear ? 'header-title--disappear-bar' : 'header-title--left-bar'} />
                <h1 className={chessboardDisappear ? 'header-title--cdje' : 'header-title--disappear-cdje'}>
                    CDJE<span>02</span>
                </h1>
            </div>
            <img src={headerImg} alt="Un échiquier" className={chessboardDisappear ? 'chessboard-disappear' : 'chessboard'} />
        </>
    )
}

export default HeaderTitle;