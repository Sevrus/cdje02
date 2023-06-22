import headerImg from "../../../../assets/images/Image_header.png";

const HeaderChessboard = ({ chessboardDisappear }) => {
    return (
        <>
            <img src={headerImg} alt="Un échiquier" className={chessboardDisappear ? 'chessboard-disappear' : 'chessboard'} />
        </>
    )
}

export default HeaderChessboard;