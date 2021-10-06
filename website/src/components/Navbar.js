import Burger from "../components/Burger";
import "../style/App.css";
import github from "../image/github/GitHub-Mark-120px-plus.png";

function Navbar() {
  return (
    <div className="navbar grid grid-cols-4 place-items-center">
      <Burger />

      <ul className="list">
        <li>Dobong-gu (도봉구)</li>
        <li>Dongdaemun-gu (동대문구)</li>
        <li>Dongjak-gu (동작구)</li>
        <li>Eunpyeong-gu (은평구)</li>
        <li>Gangbuk-gu (강북구)</li>
        <li>Gangdong-gu (강동구)</li>
        <li>Gangnam-gu (강남구)</li>
        <li>Gangseo-gu (강서구 )</li>
        <li>Geumcheon-gu (금천구)</li>
        <li>Guro-gu (구로구)</li>
        <li>Gwanak-gu (관악구)</li>
        <li>Gwangjin-gu (광진구)</li>
        <li>Jongno-gu (종로구)</li>
        <li>Jung-gu (중구)</li>
        <li>Jungnang-gu (중랑구)</li>
        <li>Mapo-gu (마포구)</li>
        <li>Nowon-gu (노원구)</li>
        <li>Seocho-gu (서초구)</li>
        <li>Seodaemun-gu (서대문구)</li>
        <li>Seongbuk-gu (성북구)</li>
        <li>Seongdong-gu (성동구)</li>
        <li>Songpa-gu (송파구)</li>
        <li>Yangcheon-gu (양천구)</li>
        <li>Yeongdeungpo-gu (영등포구)</li>
        <li>Yongsan-gu (용산구)</li>
      </ul>

      <div className="text-7xl font-bold col-span-2 text-center">
        <span id="s">S</span>
        <span id="e">E</span>
        <span id="o">O</span>
        <span id="u">U</span>
        <span id="l">L</span>
      </div>

      <a href="https://github.com/eric8979">
        <img width="70rem" height="70rem" src={github} alt="GitHub" />
      </a>
    </div>
  );
}

export default Navbar;
