import './App.css';
import React from "react";
// import fecthData from "../public/List.txt"
import List from "./json/List.js"

function Map() {
  //   console.log("=======")
  // console.log(List.nm);
  // console.log(List[0].keyword.join("#"));
  //   console.log("=======")

  return (
    <div class="App">
      <div class="title">๐ด ๋ง์ง ๋ฆฌ์คํธ ๐ด</div>
      {/* ์์ */}
      {/* <div class="tem">
      {List.map((item, index) => (
        
        <div class="tem_1">
            {item.nm}
          </div>
      ))}
      </div> */}
      {/* ํ๋จ ๋ฆฌ์คํธ */}
      {/* 
    ยท nm - ์๋น๋ช o
    ยท branch - ์ง์ ๋ช
    ยท image - ์๋น ๋ํ ์ฌ์ง
    ยท area - ์ง์ญ ํค์๋(ex: ๊ฑด๋)
    ยท distance - ๊ฑฐ๋ฆฌ(ex: 884m)
    ยท category - ์๋น ๋ํ ์นดํ๊ณ ๋ฆฌ o
    ยท keyword - ์๋น ํค์๋(#ํ๊ทธ ํ์ ๋ธ์ถ) o
    ยท score - ์๋น ์ ์
    ยท user_score - ์๋น ์ฌ์ฉ์ ํ์ (ex: 4.1) o
    ยท review_cnt - ์๋น ์ฌ์ฉ์ ํ์  ์ฐธ์ฌ์ ์ o
    ยท favorites_cnt - ์๋น ์ข์์ ์ o
    ------------------------------------------------
    "nm":"์กํ์ฐ์๋์ญ๋ฉด",
    "branch":"2ํธ์ ",
    "image":"https:\/\/s3-ap-northeast-1.amazonaws.com\/dcreviewsresized\/pre_20211216024924764_photo_i0OmWUtveemW.jpg","area":"๊ฑด๋",
    "distance":"884m",
    "category":"๋์ญ๋ฉด, ๋ค์ฌ",
    "keyword":["2020์จ์๋ง์ง","์์ฌ๋ชจ์","์ด๊ตญ์ \/์ด์์ "],
    "score":83,"user_score":4.2,
    "review_cnt":37,
    "favorites_cnt":137
      */}
      {/* Jsonํ์์ ๋ฐฐ์ด๋ฐ์ดํฐ๋ฅผ mapํจ์๋ฅผ ์ด์ฉํด ๋ฐ๋ณต์ฒ๋ฆฌ */}
      {List.map((item) => (
        <div class="ListBox">
          <ul class="ListBox_ul">
            {/* mapping ์์  */}
            <li class="ListBox_li">
              <div class="ListBox_li_imgBox"><img
                src={item.image}
                alt={item.image}
                layout="responsive"
                objectFit="cover" //์จ์ผ๋จ or none
                width={100}
                height={100}
                style={{borderRadius:"20px"}}
              /></div>
              <div class="ListBox_li_contents">
                <div class="ListBox_li_contents1">
                  <div class="ListBox_li_contents1_nm_area">
                    <span class="ListBox_li_contents1_nm">{item.nm}</span>
                    <span class="ListBox_li_contents1_area">{item.area} | {item.distance}</span>
                  </div>
                  <span class="ListBox_li_contents1_category">{item.category}</span>
                  {/* ๊ฐ์ธ๋ฑ์ค ์ #์ถ๊ฐ */}
                  <span class="ListBox_li_contents1_keyword">#{item.keyword.join(" #")}</span>
                </div>
                <div class="ListBox_li_contents2">
                  <span class="ListBox_li_contents2_score">{item.score}<span class="ListBox_li_contents2_score_">์ </span></span>
                  <span class="ListBox_li_contents2_review_cnt">โญ {item.user_score} ({item.review_cnt})</span>
                  <span class="ListBox_li_contents2_favorites_cnt">๐ {item.favorites_cnt}</span>
                </div>
              </div>
            </li>

          </ul>

        </div>
      ))}
      {/* ๋ถํธ์คํธ๋ฉ pagination์ถ๊ฐ */}
      <div class="pagination">
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
        </nav>
        </div>
    </div>
  );
}


export default Map;