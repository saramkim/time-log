import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import dayChart from 'images/day-chart.png';
import monthChart from 'images/month-chart.png';
import weekChart from 'images/week-chart.png';
import yearChart from 'images/year-chart.png';

import 'css/Information.css';

function Information({ setInformation }: { setInformation: Dispatch<SetStateAction<boolean>> }) {
  const [addAnimation, setAddAnimation] = useState('');
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setAddAnimation('information-wrapper--animation');
    }, 10);
    return () => {
      setAddAnimation('');
    };
  }, []);

  const informationUI = {
    1: (
      <div className='info-page info-page-1'>
        <h1>Manual</h1>
        <p>0. TimeLog 탭 우클릭 → 탭 고정</p>
        <p>1. 집중을 시작할 때 Alarm 재생 (알람 시간: 10~15분)</p>
        <p>2. 알람이 울릴 때마다 방금 하고 있던 일 기록</p>
        <p>&nbsp; ＊알람 시간 동안 한 일들 X, 알람이 울렸을 때 방금 하고 있던 일 O</p>
        <p>3. 딴짓하지 않고 집중하는 일만 기록하게 되면 알람 시간 연장</p>
        <p>&nbsp; ex) 연속 5번 집중에 성공할 때마다 알람 시간 10분씩 연장</p>
        <p>4. 알람 설정 시간이 1시간이 되면 Timer 이용</p>
        <p>5. 집중하는 시간을 타이머로 모두 기록</p>
        <p>6. 차트로 그려진 시간 기록을 보며 자기 객관화</p>
        <p>7. 목표 및 계획 설정, 그리고 이행</p>

        <h1>v0.8</h1>
        <p>PC 브라우저에서만 타이머 정상 작동 (모바일 백그라운드에서 타이머 지연)</p>
        <p>로컬스토리지를 이용하여, ‘쿠키 및 기타 사이트 데이터’ 삭제 시 데이터 소멸</p>
        <p>추후 로그인 기능을 도입하여 아이디 간 데이터 연동, 모바일 정상 지원 예정</p>
      </div>
    ),

    2: (
      <div className='info-page'>
        <h1>Day Chart</h1>
        <img src={dayChart} alt='day-chart' />
        <span>(example)</span>
      </div>
    ),
    3: (
      <div className='info-page'>
        <h1>Week Chart</h1>
        <img src={weekChart} alt='day-chart' />
        <span>(example)</span>
      </div>
    ),
    4: (
      <div className='info-page'>
        <h1>Month Chart</h1>
        <img src={monthChart} alt='day-chart' />
        <span>(example)</span>
      </div>
    ),
    5: (
      <div className='info-page'>
        <h1>Year Chart</h1>
        <img src={yearChart} alt='day-chart' />
        <span>(example)</span>
      </div>
    ),
  };

  return (
    <div
      className={`information-wrapper ${addAnimation}`}
      role='banner'
      onClick={() => {
        if (pageIndex >= 5) {
          setInformation(false);
        }
        setPageIndex((index) => index + 1);
      }}
      onKeyPress={() => {
        if (pageIndex >= 5) {
          setInformation(false);
        }
        setPageIndex((index) => index + 1);
      }}
    >
      {informationUI[pageIndex]}
      <span>{pageIndex} / 5</span>
    </div>
  );
}

export default Information;
