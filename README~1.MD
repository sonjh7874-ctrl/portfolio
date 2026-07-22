# 손지헌 포트폴리오 — 사용·배포 가이드

## 폴더 구성

```
portfolio/
├── index.html        메인 (Hero · About · Work · Contact)
├── link.html         LG LINK 상세
├── lilo.html         LG LILO 상세
├── README_배포가이드.md   (이 파일 — 업로드 안 해도 됨)
└── assets/
    ├── css/style.css   디자인 시스템(색·폰트·레이아웃)
    ├── js/main.js      내비게이션·스크롤 애니메이션·이미지 확대
    ├── img/*.jpg       발표자료에서 추출한 도표·목업
    └── resume.pdf      이력서 (다운로드 버튼과 연결됨)
```

---

## 1. 내 컴퓨터에서 미리보기 (VS Code)

1. VS Code에서 `portfolio` 폴더를 엽니다 (File → Open Folder).
2. `index.html`을 우클릭 → **Reveal in File Explorer** 후 더블클릭하면 브라우저에서 열립니다.
   - 더 편하게 보려면 VS Code 확장 **Live Server** 설치 → `index.html`에서 우클릭 → *Open with Live Server*.
3. 인터넷 연결이 있어야 폰트(Pretendard·IBM Plex Mono)가 정상 표시됩니다.

---

## 2. GitHub Pages로 무료 배포 (git 명령어 없이)

1. github.com 로그인 → 우측 상단 **+** → **New repository**.
2. Repository name을 정합니다.
   - 주소를 `https://아이디.github.io/portfolio/` 로 하려면 이름을 `portfolio`
   - 주소를 `https://아이디.github.io/` (더 짧게) 로 하려면 이름을 **`아이디.github.io`**
   - **Public** 선택 → Create repository.
3. 생성된 저장소에서 **Add file → Upload files** 클릭.
4. `portfolio` 폴더를 연 뒤 **폴더 안의 내용물**(index.html, link.html, lilo.html, assets 폴더)을 통째로 드래그해서 올립니다.
   - ⚠️ `portfolio` 폴더 자체가 아니라 **그 안의 파일들**을 올려야 `index.html`이 최상단에 놓입니다.
   - `assets` 폴더는 하위 구조가 그대로 유지됩니다.
5. 아래 **Commit changes** 버튼 클릭.
6. 상단 **Settings → Pages** 이동 → *Build and deployment*의 Source를 **Deploy from a branch**, Branch를 **main / (root)** 로 두고 **Save**.
7. 1~2분 뒤 같은 페이지 상단에 공개 주소가 뜹니다. 끝.

---

## 3. 나중에 수정하기

- **이력서 교체:** 저장소의 `assets/resume.pdf`를 새 파일로 교체(같은 이름으로 업로드)하고 Commit하면 다운로드 버튼이 자동으로 새 이력서를 가리킵니다. 사이트 본문은 손댈 필요 없습니다.
- **텍스트 수정:** `index.html`·`link.html`·`lilo.html`을 VS Code로 열어 원하는 문구만 고치고 다시 업로드(또는 GitHub에서 연필 아이콘으로 직접 편집).
- **프로젝트 추가:** 기존 `link.html`을 복제해 새 파일로 만들고, `index.html`의 Work 목록에 항목 한 줄을 추가하면 됩니다.

---

## 4. 지금 채워 넣어야 할 두 곳

1. **Notion 링크** — 메인/`index.html`의 Contact에 있는 Notion 항목이 `href="#"`(빈 링크)로 되어 있습니다. Notion 포트폴리오 주소로 바꿔주세요. (검색: `data-edit="notion"`)
2. **이메일** — 현재 이력서 기준 `sonjh7874@naver.com`으로 넣었습니다. Gmail 등 다른 주소로 바꾸려면 `index.html`에서 두 군데(`mailto:` 링크와 표시 텍스트)를 수정하세요.

---

## 개인 도메인 (선택)

나중에 `이름.com` 같은 주소를 쓰고 싶으면, 도메인 구매 후 GitHub 저장소 **Settings → Pages → Custom domain**에 입력하면 무료로 연결됩니다. 지금은 기본 주소로 시작해도 되고, 도메인은 언제든 나중에 붙일 수 있습니다.
