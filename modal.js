// 프로젝트 정보 데이터
const projects = {
  project1: {
    title: '리플렛',
    image: 'img/portfolio/P1.jpg',
    description: '이 리플렛은 독도 관광 패키지 홍보와 독도 인식 확산을 목적으로 제작되었습니다.'
  },
  project2: {
    title: '포스터',
    image: 'img/portfolio/P2.jpg',
    description: '영화 시간을 달리는 소녀를 주제로 시간의 흐름과 청춘의 감성을 그래픽적으로 재해석한 포스터 디자인입니다.'
  },
  project3: {
    title: 'SNS 배너',
    image: 'img/portfolio/P3.jpg',
    description: '현대 민화 전시회 홍보를 위한 SNS 배너입니다.'
  },
  project4: {
    title: 'Edit Design Project 4',
    image: 'img/portfolio/P4.jpg',
    description: '기업 로고 디자인 프로젝트로, 브랜드의 정체성을 명확히 표현했습니다.'
  },
  project5: {
    title: 'Edit Design Project 5',
    image: 'img/portfolio/P5.jpg',
    description: '모던하고 세련된 로고 디자인으로 브랜드 가치를 높였습니다.'
  },
  project6: {
    title: 'Edit Design Project 6',
    image: 'img/portfolio/P6.jpg',
    description: '심볼과 로고타입을 결합한 통합 브랜딩 디자인입니다.'
  }
};

// 모달 열기 함수
function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const project = projects[projectId];

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// 모달 외부 클릭시 닫기
function closeModalOnOutside(event) {
  if (event.target.id === 'modal') {
    closeModal();
  }
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});