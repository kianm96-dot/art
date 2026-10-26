/* 미술사 양식 데이터 — 시대(양식) 순서대로.
   w = 영어 위키백과 문서 제목, q = 문서를 못 찾을 때 쓰는 검색어.
   작품 순서를 바꾸면 그림 id(예: baroque-2)가 바뀌니, 새 작품은 각 목록 끝에 추가하고
   GitHub Actions의 "Fetch painting images"를 다시 돌리세요. */
window.ERAS = [
 {id:'gothic',name:'중세 고딕',per:'13~14세기',c:'#a8873f',
  desc:'금빛 배경 위에 성모와 성인들을 평면적으로 그린 종교화의 시대. 원근법이 아직 서툴러 공간이 납작하고, 인물 크기는 중요도에 따라 달라져요.',
  tips:['금박 배경','성모·성인 중심의 종교화','납작하고 상징적인 공간'],
  works:[
   {a:'두초',t:'마에스타',y:'1308–1311',w:'Maestà (Duccio)'},
   {a:'치마부에',t:'산타 트리니타 마에스타',y:'1280–1290년경',w:'Santa Trinita Maestà'},
   {a:'시모네 마르티니',t:'수태고지',y:'1333',w:'Annunciation with St. Margaret and St. Ansanus'},
   {a:'조토',t:'그리스도를 애도함',y:'1305년경',w:'Lamentation (The Mourning of Christ)',q:'Giotto Lamentation Mourning of Christ Scrovegni'}
  ]},
 {id:'renaissance',name:'르네상스',per:'15~16세기',c:'#c98f4a',
  desc:'고대 그리스·로마를 다시 살려 낸 “부활”의 시대. 원근법과 해부학을 연구해 사실적이고 균형 잡힌 이상적인 인간을 그렸어요.',
  tips:['소실점 원근법','안정된 삼각형(피라미드) 구도','이상적인 인체 비례'],
  works:[
   {a:'보티첼리',t:'비너스의 탄생',y:'1485년경',w:'The Birth of Venus'},
   {a:'레오나르도 다빈치',t:'모나리자',y:'1503–1519',w:'Mona Lisa'},
   {a:'레오나르도 다빈치',t:'최후의 만찬',y:'1495–1498',w:'The Last Supper (Leonardo)'},
   {a:'라파엘로',t:'아테네 학당',y:'1509–1511',w:'The School of Athens'},
   {a:'미켈란젤로',t:'아담의 창조',y:'1512년경',w:'The Creation of Adam'},
   {a:'티치아노',t:'우르비노의 비너스',y:'1534',w:'Venus of Urbino'}
  ]},
 {id:'northern',name:'북유럽 르네상스',per:'15~16세기',c:'#7f8f5a',
  desc:'플랑드르(벨기에·네덜란드)와 독일의 르네상스. 유화 물감으로 머리카락 한 올, 거울 속 반사까지 꼼꼼하게 그리고, 그림 곳곳에 상징을 숨겼어요.',
  tips:['돋보기로 본 듯한 세밀함','유화의 반짝이는 질감','일상 풍경과 숨은 상징'],
  works:[
   {a:'얀 반 에이크',t:'아르놀피니 부부의 초상',y:'1434',w:'Arnolfini Portrait'},
   {a:'히에로니무스 보스',t:'쾌락의 정원',y:'1500년경',w:'The Garden of Earthly Delights'},
   {a:'피터르 브뤼헐',t:'눈 속의 사냥꾼',y:'1565',w:'The Hunters in the Snow'},
   {a:'알브레히트 뒤러',t:'1500년의 자화상',y:'1500',w:'Self-Portrait (Dürer, Munich)'},
   {a:'한스 홀바인',t:'대사들',y:'1533',w:'The Ambassadors (Holbein)'}
  ]},
 {id:'mannerism',name:'매너리즘',per:'16세기 후반',c:'#9a6fa8',
  desc:'르네상스의 완벽한 조화를 일부러 비튼 양식. 몸이 이상하게 길고, 자세는 꼬여 있고, 색은 차갑고 묘해서 어딘가 불안한 느낌을 줘요.',
  tips:['길쭉하게 늘어난 인체','꼬이고 불안정한 구도','차갑고 인공적인 색'],
  works:[
   {a:'파르미자니노',t:'목이 긴 성모',y:'1535–1540',w:'Madonna with the Long Neck'},
   {a:'엘 그레코',t:'오르가스 백작의 매장',y:'1586',w:'The Burial of the Count of Orgaz'},
   {a:'브론치노',t:'비너스와 큐피드의 알레고리',y:'1545년경',w:'Venus, Cupid, Folly and Time'},
   {a:'폰토르모',t:'십자가에서 내려지심',y:'1528',w:'Deposition from the Cross (Pontormo)',q:'Pontormo Deposition Santa Felicita'}
  ]},
 {id:'baroque',name:'바로크',per:'17세기',c:'#8c3b2f',
  desc:'어둠 속에서 빛이 확 쏟아지는 극적인 양식. 연극의 한 장면처럼 가장 긴장된 순간을 포착해 보는 사람의 감정을 강하게 흔들어요.',
  tips:['강렬한 명암 대비','연극 같은 결정적 순간','대각선 구도와 움직임'],
  works:[
   {a:'카라바조',t:'성 마태오의 소명',y:'1600',w:'The Calling of Saint Matthew'},
   {a:'렘브란트',t:'야경',y:'1642',w:'The Night Watch'},
   {a:'디에고 벨라스케스',t:'시녀들',y:'1656',w:'Las Meninas'},
   {a:'요하네스 페르메이르',t:'진주 귀걸이를 한 소녀',y:'1665년경',w:'Girl with a Pearl Earring'},
   {a:'요하네스 페르메이르',t:'우유를 따르는 여인',y:'1658년경',w:'The Milkmaid (Vermeer)'},
   {a:'페테르 파울 루벤스',t:'십자가를 세움',y:'1610',w:'The Elevation of the Cross (Rubens)',q:'Rubens Elevation of the Cross Antwerp'}
  ]},
 {id:'rococo',name:'로코코',per:'18세기',c:'#d99bb0',
  desc:'프랑스 귀족들의 살롱에서 피어난 가볍고 달콤한 양식. 분홍·하늘색 같은 파스텔 톤에 사랑과 놀이, 여가 장면이 많아요.',
  tips:['파스텔 톤','귀족의 사랑과 놀이','하늘하늘한 곡선과 장식'],
  works:[
   {a:'장오노레 프라고나르',t:'그네',y:'1767',w:'The Swing (Fragonard)'},
   {a:'장앙투안 바토',t:'키테라 섬의 순례',y:'1717',w:'Pilgrimage to Cythera'},
   {a:'장오노레 프라고나르',t:'책 읽는 소녀',y:'1770년경',w:'Young Girl Reading'},
   {a:'프랑수아 부셰',t:'목욕하는 디아나',y:'1742',w:'Diana Bathing (Boucher)'}
  ]},
 {id:'neoclassic',name:'신고전주의',per:'18세기 말~19세기 초',c:'#8aa3b8',
  desc:'달콤한 로코코에 반발해 고대 그리스·로마의 엄격함으로 돌아간 양식. 또렷한 윤곽선, 매끈한 표면, 영웅과 애국심을 그렸어요.',
  tips:['선명한 윤곽, 붓 자국 없는 매끈함','엄숙하고 질서 있는 구도','영웅적·도덕적 주제'],
  works:[
   {a:'자크루이 다비드',t:'호라티우스 형제의 맹세',y:'1784',w:'Oath of the Horatii'},
   {a:'자크루이 다비드',t:'마라의 죽음',y:'1793',w:'The Death of Marat'},
   {a:'자크루이 다비드',t:'알프스를 넘는 나폴레옹',y:'1801',c:'Jacques-Louis David Napoleon Crossing the Alps Malmaison',w:'Napoleon Crossing the Alps'},
   {a:'장오귀스트 앵그르',t:'그랑드 오달리스크',y:'1814',w:'Grande Odalisque'}
  ]},
 {id:'romantic',name:'낭만주의',per:'19세기 전반',c:'#b5543a',
  desc:'이성보다 감정과 상상력! 거친 바다와 폭풍 같은 압도적인 자연, 혁명과 참사 같은 사건을 격정적인 색과 움직임으로 그렸어요.',
  tips:['격렬한 감정과 움직임','거대하고 숭고한 자연','극적인 사건, 풍부한 색'],
  works:[
   {a:'외젠 들라크루아',t:'민중을 이끄는 자유의 여신',y:'1830',w:'Liberty Leading the People'},
   {a:'테오도르 제리코',t:'메두사호의 뗏목',y:'1819',w:'The Raft of the Medusa'},
   {a:'카스파르 다비트 프리드리히',t:'안개 바다 위의 방랑자',y:'1818년경',w:'Wanderer above the Sea of Fog'},
   {a:'프란시스코 고야',t:'1808년 5월 3일',y:'1814',w:'The Third of May 1808'},
   {a:'윌리엄 터너',t:'전함 테메레르',y:'1839',w:'The Fighting Temeraire'}
  ]},
 {id:'realism',name:'사실주의',per:'19세기 중반',c:'#7a6a4f',
  desc:'신화나 영웅 대신 “지금, 여기”의 현실을 있는 그대로. 농민과 노동자의 고된 삶을 꾸미지 않고 정직하게 그렸어요.',
  tips:['평범한 사람들의 노동과 일상','이상화하지 않은 표현','차분한 흙빛 색조'],
  works:[
   {a:'장프랑수아 밀레',t:'이삭 줍는 여인들',y:'1857',w:'The Gleaners'},
   {a:'장프랑수아 밀레',t:'만종',y:'1859',w:'The Angelus (painting)'},
   {a:'귀스타브 쿠르베',t:'돌 깨는 사람들',y:'1849',w:'The Stone Breakers'},
   {a:'귀스타브 쿠르베',t:'오르낭의 매장',y:'1850',w:'A Burial at Ornans'},
   {a:'오노레 도미에',t:'삼등 열차',y:'1864년경',w:'The Third-Class Carriage'}
  ]},
 {id:'impression',name:'인상주의',per:'19세기 후반',c:'#6fa8c9',
  desc:'밖으로 나가 빛과 공기가 바뀌는 “순간의 인상”을 포착! 짧고 빠른 붓 터치, 밝은 색, 흐릿한 윤곽으로 도시의 여가와 풍경을 그렸어요.',
  tips:['빛에 따라 바뀌는 색','짧게 끊어 찍은 붓질','야외 풍경·도시의 여가'],
  works:[
   {a:'클로드 모네',t:'인상, 해돋이',y:'1872',w:'Impression, Sunrise'},
   {a:'클로드 모네',t:'양산을 든 여인',y:'1875',q:'Woman with a Parasol Madame Monet and Her Son'},
   {a:'오귀스트 르누아르',t:'물랭 드 라 갈레트의 무도회',y:'1876',w:'Bal du moulin de la Galette'},
   {a:'오귀스트 르누아르',t:'뱃놀이 일행의 점심',y:'1881',w:'Luncheon of the Boating Party'},
   {a:'에드가 드가',t:'무용 수업',y:'1874',w:'The Dance Class (Degas)',q:'Degas The Dance Class 1874 painting'},
   {a:'귀스타브 카유보트',t:'파리의 거리, 비 오는 날',y:'1877',w:'Paris Street; Rainy Day'}
  ]},
 {id:'postimp',name:'후기 인상주의',per:'19세기 말',c:'#e0b23a',
  desc:'인상주의에서 출발했지만 화가마다 자기 길을 갔어요. 고흐는 감정을, 세잔은 구조를, 쇠라는 점을, 고갱은 원시적인 색을 탐구했죠.',
  tips:['화가마다 뚜렷한 개성','두꺼운 붓질·점묘·단순한 면','색과 형태를 주관적으로 재구성'],
  works:[
   {a:'빈센트 반 고흐',t:'별이 빛나는 밤',y:'1889',w:'The Starry Night'},
   {a:'빈센트 반 고흐',t:'해바라기',y:'1888',w:'Sunflowers (Van Gogh series)'},
   {a:'조르주 쇠라',t:'그랑드자트 섬의 일요일 오후',y:'1884–1886',w:'A Sunday Afternoon on the Island of La Grande Jatte'},
   {a:'폴 세잔',t:'카드놀이 하는 사람들',y:'1890년대',w:'The Card Players'},
   {a:'폴 고갱',t:'우리는 어디서 왔는가, 우리는 무엇인가, 우리는 어디로 가는가',y:'1897',w:'Where Do We Come From? What Are We? Where Are We Going?'},
   {a:'폴 세잔',t:'생트빅투아르 산',y:'1904년경',w:'Mont Sainte-Victoire (Cézanne)'}
  ]},
 {id:'nouveau',name:'아르누보·빈 분리파',per:'1890~1910년대',c:'#c9a227',
  desc:'식물 줄기처럼 휘어지는 곡선, 금박과 화려한 무늬. 순수 미술과 포스터·공예의 경계를 허물었어요.',
  tips:['금박과 장식 무늬','유려한 곡선','납작한 장식 + 사실적인 얼굴'],
  works:[
   {a:'구스타프 클림트',t:'키스',y:'1908',w:'The Kiss (Klimt)'},
   {a:'구스타프 클림트',t:'아델레 블로흐바우어의 초상 I',y:'1907',w:'Portrait of Adele Bloch-Bauer I'},
   {a:'구스타프 클림트',t:'유디트 I',y:'1901',c:'Gustav Klimt Judith I 1901 Belvedere'},
   {a:'알폰스 무하',t:'지스몽다 포스터',y:'1894',c:'Mucha Gismonda poster 1894'}
  ]},
 {id:'fauvism',name:'야수파',per:'1905~1908',c:'#e2553d',
  desc:'“야수들 같다”는 말을 들을 만큼 강렬한 원색! 하늘이 노랗고 얼굴이 초록이어도 OK. 색을 감정 표현의 도구로 해방시켰어요.',
  tips:['현실과 상관없는 강렬한 원색','넓고 거친 붓질','단순화된 형태'],
  works:[
   {a:'앙리 마티스',t:'모자를 쓴 여인',y:'1905',w:'Woman with a Hat'},
   {a:'앙리 마티스',t:'삶의 기쁨',y:'1906',w:'Le bonheur de vivre'},
   {a:'앙리 마티스',t:'춤',y:'1910',w:'Dance (Matisse)'},
   {a:'앙리 마티스',t:'붉은색의 조화',y:'1908',w:'The Dessert: Harmony in Red'},
   {a:'앙드레 드랭',t:'채링 크로스 다리',y:'1906',c:'André Derain Charing Cross Bridge 1906'}
  ]},
 {id:'expression',name:'표현주의',per:'1890~1920년대',c:'#4f7a3a',
  desc:'눈에 보이는 모습보다 마음속 불안·공포·고독을 드러내는 것이 중요! 일그러진 형태와 날카롭고 강한 색이 특징이에요.',
  tips:['일그러지고 과장된 형태','불안한 감정의 분출','거칠고 날카로운 선'],
  works:[
   {a:'에드바르 뭉크',t:'절규',y:'1893',w:'The Scream'},
   {a:'에른스트 루트비히 키르히너',t:'베를린 거리',y:'1913',w:'Street, Dresden'},
   {a:'프란츠 마르크',t:'큰 푸른 말들',y:'1911',w:'The Large Blue Horses',q:'Franz Marc The Large Blue Horses'},
   {a:'에곤 실레',t:'꽈리가 있는 자화상',y:'1912',w:'Self-Portrait with Physalis',q:'Egon Schiele Self-Portrait with Physalis'}
  ]},
 {id:'cubism',name:'입체파(큐비즘)',per:'1907~1920년대',c:'#8a7b6a',
  desc:'여러 방향에서 본 모습을 조각조각 쪼개 한 화면에 다시 조립! 대상을 원통·원뿔·구 같은 기하학적인 면으로 단순화했어요.',
  tips:['여러 시점이 한 화면에','기하학적인 면으로 쪼갬','갈색·회색 위주의 차분한 색'],
  works:[
   {a:'후안 그리스',t:'피카소의 초상',y:'1912',c:'Juan Gris Portrait of Pablo Picasso 1912'},
   {a:'장 메챙제',t:'티타임',y:'1911',c:'Jean Metzinger Le goûter Tea Time 1911'},
   {a:'후안 그리스',t:'체크 무늬 식탁보가 있는 정물',y:'1915',c:'Juan Gris Still Life with Checked Tablecloth 1915'},
   {a:'로베르 들로네',t:'에펠탑',y:'1911',c:'Robert Delaunay Tour Eiffel 1911'}
  ]},
 {id:'futurism',name:'미래주의',per:'1909~1916',c:'#d97a2b',
  desc:'이탈리아에서 시작된 “속도의 미술”. 기계·자동차·도시의 에너지를 찬양하며 움직이는 모습을 여러 겹으로 겹쳐 그렸어요.',
  tips:['연속 동작을 겹쳐 그림','속도·기계·도시','힘차게 뻗는 선'],
  works:[
   {a:'움베르토 보초니',t:'도시가 일어나다',y:'1910',w:'The City Rises'},
   {a:'자코모 발라',t:'끈에 묶인 개의 역동성',y:'1912',w:'Dynamism of a Dog on a Leash'},
   {a:'움베르토 보초니',t:'자전거 타는 사람의 역동성',y:'1913',q:'Boccioni Dynamism of a Cyclist'},
   {a:'루이지 루솔로',t:'자동차의 역동성',y:'1913',q:'Luigi Russolo Dynamism of a Car'}
  ]},
 {id:'abstract',name:'추상미술',per:'1910~1940년대',c:'#3f6fb5',
  desc:'무엇을 그렸는지 알아볼 수 없어도 괜찮아요. 색·선·면 그 자체로 음악처럼 감정을 표현(칸딘스키)하거나 순수한 질서를 표현(몬드리안)했어요.',
  tips:['알아볼 수 있는 대상이 없음','순수한 색·선·도형','뜨거운 추상 vs 차가운 추상'],
  works:[
   {a:'바실리 칸딘스키',t:'구성 VII',y:'1913',w:'Composition VII'},
   {a:'바실리 칸딘스키',t:'노랑-빨강-파랑',y:'1925',c:'Kandinsky Gelb-Rot-Blau 1925'},
   {a:'피트 몬드리안',t:'빨강·파랑·노랑의 구성',y:'1930',c:'Piet Mondrian Composition with Red Blue and Yellow 1930'},
   {a:'피트 몬드리안',t:'브로드웨이 부기우기',y:'1943',w:'Broadway Boogie Woogie'},
   {a:'카지미르 말레비치',t:'검은 사각형',y:'1915',w:'Black Square (painting)'}
  ]}
];
