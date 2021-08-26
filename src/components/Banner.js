export default function Banner(){

    function onClickButton(e){
        alert("확인");
    }

    return(
        <div className="banner">
            <div>
                <button>홈</button>
                <button>사진첩</button>
                <button onClick={onClickButton}>제작자</button>
            </div>
        </div>
    );
}