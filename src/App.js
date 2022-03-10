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
      <div class="title">🍴 맛집 리스트 🍴</div>
      {/* 임시 */}
      {/* <div class="tem">
      {List.map((item, index) => (
        
        <div class="tem_1">
            {item.nm}
          </div>
      ))}
      </div> */}
      {/* 하단 리스트 */}
      {/* 
    · nm - 식당명 o
    · branch - 지점명
    · image - 식당 대표 사진
    · area - 지역 키워드(ex: 건대)
    · distance - 거리(ex: 884m)
    · category - 식당 대표 카테고리 o
    · keyword - 식당 키워드(#태그 형식 노출) o
    · score - 식당 점수
    · user_score - 식당 사용자 평점(ex: 4.1) o
    · review_cnt - 식당 사용자 평점 참여자 수 o
    · favorites_cnt - 식당 좋아요 수 o
    ------------------------------------------------
    "nm":"송화산시도삭면",
    "branch":"2호점",
    "image":"https:\/\/s3-ap-northeast-1.amazonaws.com\/dcreviewsresized\/pre_20211216024924764_photo_i0OmWUtveemW.jpg","area":"건대",
    "distance":"884m",
    "category":"도삭면, 딤섬",
    "keyword":["2020숨은맛집","식사모임","이국적\/이색적"],
    "score":83,"user_score":4.2,
    "review_cnt":37,
    "favorites_cnt":137
      */}
      {/* Json형식의 배열데이터를 map함수를 이용해 반복처리 */}
      {List.map((item) => (
        <div class="ListBox">
          <ul class="ListBox_ul">
            {/* mapping 예정 */}
            <li class="ListBox_li">
              <div class="ListBox_li_imgBox"><img
                src={item.image}
                alt={item.image}
                layout="responsive"
                objectFit="cover" //써야됨 or none
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
                  {/* 각인덱스 앞 #추가 */}
                  <span class="ListBox_li_contents1_keyword">#{item.keyword.join(" #")}</span>
                </div>
                <div class="ListBox_li_contents2">
                  <span class="ListBox_li_contents2_score">{item.score}<span class="ListBox_li_contents2_score_">점</span></span>
                  <span class="ListBox_li_contents2_review_cnt">⭐ {item.user_score} ({item.review_cnt})</span>
                  <span class="ListBox_li_contents2_favorites_cnt">💜 {item.favorites_cnt}</span>
                </div>
              </div>
            </li>

          </ul>

        </div>
      ))}
      {/* 부트스트랩 pagination추가 */}
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