var PubLists = [
  {
    category: "admin",
    title: "관리자",
    elem: [
      {
        id: "guide",
        breadcrumb: " 가이드",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/guide.html",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_LOG_01_00_00_00",
        breadcrumb: "로그인",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_LOG_01_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_LOG_01_01_00_00",
        breadcrumb: "로그인 > 비밀번호 찾기",
        type: "팝업",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_LOG_01_01_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_LOG_01_02_00_00",
        breadcrumb: "로그인 > 비밀번호 변경",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_LOG_01_02_00_00.html",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_MAI_01_00_00_00",
        breadcrumb: "메인관리 > 메인 배너 관리",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_MAI_01_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_MAI_01_01_00_00",
        breadcrumb: "메인관리 > 메인 배너 등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_MAI_01_01_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_MAI_01_02_00_00",
        breadcrumb: "홈 전시 관리 > 메인 배너 상세/수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_MAI_01_02_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_MAI_01_03_00_00",
        breadcrumb: "홈 전시 관리 > 메인배너 > 메인배너 정렬순서 설정",
        type: "popup",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_MAI_01_03_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_MAI_02_00_00_00",
        breadcrumb: "메인 브랜드 관리 > 브랜드 관리",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_MAI_02_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_MAI_02_01_00_00",
        breadcrumb: "메인 브랜드 관리 > 등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_MAI_02_01_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_MAI_02_02_00_00",
        breadcrumb: "메인 브랜드 관리 > 상세/수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_MAI_02_02_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_MAI_02_03_00_00",
        breadcrumb: "메인 브랜드 관리 > 메인 브랜드 정렬 순서 설정",
        type: "popup",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_MAI_02_03_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_MAI_03_00_00_00",
        breadcrumb: "메인 브랜드 관리 > 공지 팝업 관리",
        type: "popup",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_MAI_03_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_MAI_03_01_00_00",
        breadcrumb: "메인 브랜드 관리 > 공지 팝업 등록",
        type: "popup",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_MAI_03_01_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_MAI_03_02_00_00",
        breadcrumb: "메인 브랜드 관리 > 공지 팝업 상세/수정",
        type: "popup",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_MAI_03_02_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_MAI_03_03_00_00",
        breadcrumb: "메인 브랜드 관리 > 공지 팝업 정렬 순서 설정",
        type: "popup",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_MAI_03_03_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      /*==============  브랜드 관리 ============ */
      {
        id: "A_BRD_01_00_00_00",
        breadcrumb: "브랜드 관리",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_BRD_01_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_BRD_01_01_00_00",
        breadcrumb: "브랜드 관리 > 브랜드 등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_BRD_01_01_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_BRD_01_02_00_00",
        breadcrumb: "브랜드 관리 > 브랜드 상세/수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_BRD_01_02_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_BRD_01_03_00_00",
        breadcrumb: "브랜드 관리 > 브랜드 정렬 순서 설정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_BRD_01_03_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },

      /*===========  IR ============== */
      {
        id: "A_IR_01_00_00_00",
        breadcrumb: "IR 자료(목록)",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_IR_01_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_IR_02_00_00_00",
        breadcrumb: "IR 자료 > 목록(추가자료)",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_IR_02_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_IR_01_01_00_00",
        breadcrumb: "IR 자료 > 2024 IR 자료 등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_IR_01_01_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_IR_02_01_00_00", // 임시
        breadcrumb: "IR 자료 > 추가등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_IR_02_01_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_IR_01_02_00_00",
        breadcrumb: "IR 자료 > 상세/수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_IR_01_02_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_IR_02_02_00_00",
        breadcrumb: "IR 자료 > 추가 자료 상세/수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_IR_02_02_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      /*{
        id: "A-IR-01-02-00-00",
        breadcrumb: "IR 자료 > IR Book",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A-IR-01-03-00-00",
        breadcrumb: "IR 자료 > Fact Sheet",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A-IR-01-04-00-00",
        breadcrumb: "IR 자료 > 감사 / 검토보고서",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A-IR-01-05-00-00",
        breadcrumb: "IR 자료 > 지속가능경영보고서",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A-IR-01-06-00-00",
        breadcrumb: "IR 자료 > IR 파일 (게시글)",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },*/

      /*===========  기업지배구조 ============== */
      {
        id: "A_COR_01_00_00_00",
        breadcrumb: "기업지배구조",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_COR_01_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      /*{
        id: "A-COR-01-01-00-00",
        breadcrumb: "기업지배구조 > 등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },*/
      {
        id: "A_COR_02_00_00_00",
        breadcrumb: "기업지배구조 > 상세/수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_COR_02_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      /*{
        id: "123",
        breadcrumb: "기업지배구조 > 정관",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "123",
        breadcrumb: "기업지배구조 > 공시정보관리지침",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "123",
        breadcrumb: "기업지배구조 > 기업지배구조헌장",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },*/

      /*===========  지속가능경영 ============== */

      {
        id: "A_ESG_01_00_00_00",
        breadcrumb: "지속가능경영 > 지속가능경영보고서 관리",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_ESG_01_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_ESG_01_01_00_00",
        breadcrumb: "지속가능경영 > 지속가능경영보고서 등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_ESG_01_01_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_ESG_01_02_00_00",
        breadcrumb: "지속가능경영 > 지속가능경영보고서 상세/수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_ESG_01_02_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_ESG_02_00_00_00",
        breadcrumb: "지속가능경영 > ESG 정책 관리",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_ESG_02_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_ESG_02_01_00_00",
        breadcrumb: "지속가능경영 > ESG 정책 등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_ESG_02_01_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_ESG_02_02_00_00",
        breadcrumb: "지속가능경영 > ESG 정책 상세/수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_ESG_02_02_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },

      /*===========  채용 ============== */
      {
        id: "A_REC_01_00_00_00",
        breadcrumb: "채용 > 채용 현황",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_REC_01_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_REC_01_00_00_00_n",
        breadcrumb: "채용 > 채용 현황 empty",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_REC_01_00_00_00_n.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_REC_02_00_00_00",
        breadcrumb: "채용 > 채용 공고 관리",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_REC_02_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_REC_02_01_00_00",
        breadcrumb: "채용 > 채용 공고 등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_REC_02_01_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_REC_02_02_00_00",
        breadcrumb: "채용 > 채용 공고 상세/수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_REC_02_02_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_REC_03_00_00_00",
        breadcrumb: "채용 > 상시 인력풀 관리",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_REC_03_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_REC_03_01_00_00",
        breadcrumb: "채용 > 상시 인력풀 등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_REC_03_01_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_REC_03_02_00_00",
        breadcrumb: "채용 > 상시 인력풀 상세/수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_REC_03_02_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      /*===========  뉴스룸 ============== */

      {
        id: " ",
        breadcrumb: "뉴스룸 > 보도자료 관리",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_NEW_01_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_NEW_01_01_00_00",
        breadcrumb: "뉴스룸 > 보도자료 등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address:
          "https://www.figma.com/design/UcggDxeMwE7K2cbGREtg2Z/FILA-(MOON-project)-%EA%B5%AC%EC%B6%95?node-id=838-21060&t=AWwTYEeAAFQieOlI-4",
        pubAddress: "./pages/admin/A_NEW_01_01_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_NEW_01_02_00_00",
        breadcrumb: "뉴스룸 > 보도자료 상세/수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_NEW_01_02_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_NEW_02_00_00_00",
        breadcrumb: "뉴스룸 > 아카이브 관리 > 영상",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_NEW_02_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_NEW_02_02_00_00",
        breadcrumb: "뉴스룸 > 아카이브 관리 > 이미지",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_NEW_02_02_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_NEW_02_01_01_00",
        breadcrumb: "뉴스룸 > 아카이브 관리 > 영상 등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_NEW_02_01_01_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_NEW_02_02_01_00",
        breadcrumb: "뉴스룸 > 아카이브 관리 > 이미지 등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_NEW_02_02_01_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_NEW_02_01_02_00",
        breadcrumb: "뉴스룸 > 아카이브 관리 > 영상 상세/수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_NEW_02_01_02_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_NEW_02_02_02_00",
        breadcrumb: "뉴스룸 > 아카이브 관리 > 이미지 상세/수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_NEW_02_02_02_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_NEW_03_00_00_00",
        breadcrumb: "뉴스룸 > CI/BI 관리",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_NEW_03_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_NEW_03_01_00_00",
        breadcrumb: "CI/BI 관리 > CI/BI 등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_NEW_03_01_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_NEW_03_02_00_00",
        breadcrumb: "뉴스룸 > CI/BI 상세/수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_NEW_03_02_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_SYS_01_01_00_00",
        breadcrumb: "관리자 계정 관리",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_SYS_01_01_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_SYS_01_01_01_00",
        breadcrumb: "관리자 계정 관리 > 관리자 등록",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_SYS_01_01_01_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_SYS_01_01_02_00",
        breadcrumb: "관리자 계정 관리 > 관리자 상세",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_SYS_01_01_02_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_SYS_01_02_00_00",
        breadcrumb: "관리자 계정 관리 > 사용자 정보 수정",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_SYS_01_02_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "A_SEO_01_00_00_00",
        breadcrumb: "SEO관리",
        type: "page",
        design: "없음", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/admin/A_SEO_01_00_00_00.html",
        complete: "완료", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
    ],
  },
  ,
  {
    category: "KOR",
    title: "사용자(KOR)",
    elem: [
      {
        id: "F-MAI-01-00-00-00",
        breadcrumb: "MAIN",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/main/index.html",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ABO-01-00-00-00",
        breadcrumb: "Misto",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ABO-01-01-00-00",
        breadcrumb: "Misto > We are Misto",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ABO-01-02-00-00",
        breadcrumb: "Misto > 연혁",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-COM-01-03-00-00",
        breadcrumb: "Misto > 브랜드",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-00-00-00",
        breadcrumb: "Investors",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-01-00-00",
        breadcrumb: "Investors > 재무정보",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-01-01-00",
        breadcrumb: "Investors > 재무정보 > 연결 재무상태표",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-01-02-00",
        breadcrumb: "Investors > 재무정보 > 연결 손익계산서",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-02-00-00",
        breadcrumb: "Investors > 공시정보",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-03-00-00",
        breadcrumb: "Investors > 주주총회",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-03-01-00",
        breadcrumb: "Investors > 주주총회 > 제35기 정기주주총회",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-03-02-00",
        breadcrumb: "Investors > 주주총회 > 과거 주주총회",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-04-00-00",
        breadcrumb: "Investors > 주주환원",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-05-00-00",
        breadcrumb: "Investors > IR자료",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-05-01-00",
        breadcrumb: "Investors > IR자료 > 2020",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-05-02-00",
        breadcrumb: "Investors > IR자료 > 2021",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-05-03-00",
        breadcrumb: "Investors > IR자료 > 2022",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-05-04-00",
        breadcrumb: "Investors > IR자료 > 2023",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-05-05-00",
        breadcrumb: "Investors > IR자료 > 2024",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-06-00-00",
        breadcrumb: "Investors > 기업지배구조",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-06-01-00",
        breadcrumb:
          "Investors > 기업지배구조 > 주주현황 / 이사회 구성 현황 / 이사회 운영 현황 / 외부감사인",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ESG-01-00-00-00",
        breadcrumb: "Sustainability",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ESG-01-01-00-00",
        breadcrumb: "Sustainability > 전략 체계",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ESG-01-02-00-00",
        breadcrumb: "Sustainability > ESG 평가정보",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ESG-01-03-00-00",
        breadcrumb: "Sustainability > 지속가능경영",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ESG-01-04-00-00",
        breadcrumb: "Sustainability > ESG 정책",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CAR-01-00-00-00",
        breadcrumb: "Careers",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CAR-01-01-00-00",
        breadcrumb: "Careers > 문화",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CAR-01-02-00-00",
        breadcrumb: "Careers > 인사제도 및 복지",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CAR-01-03-00-00",
        breadcrumb: "Careers > 채용공고",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CAR-01-03-01-00",
        breadcrumb: "Careers > 채용공고 > 채용 절차",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CAR-01-03-02-00",
        breadcrumb: "Careers > 채용공고 > 채용 공고",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CAR-01-03-03-00",
        breadcrumb: "Careers > 채용공고 > 상시 인력풀",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-00-00-00",
        breadcrumb: "Newsroom",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-01-00-00",
        breadcrumb: "Newsroom > 보도자료",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-01-01-00",
        breadcrumb: "Newsroom > 보도자료 > 전체",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-01-02-00",
        breadcrumb: "Newsroom > 보도자료 > 기업",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-01-03-00",
        breadcrumb: "Newsroom > 보도자료 > 브랜드",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-01-04-00",
        breadcrumb: "Newsroom > 보도자료 > 지속가능경영",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-01-01-01",
        breadcrumb: "Newsroom > 보도자료 > [Sorting] 연도 > 보도자료 상세",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-02-00-00",
        breadcrumb: "Newsroom > 아카이브",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-02-01-00",
        breadcrumb: "Newsroom > 아카이브 > 전체",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-02-02-00",
        breadcrumb: "Newsroom > 아카이브 > 영상",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-02-02-01",
        breadcrumb: "Newsroom > 아카이브 > 영상 > 아카이브 상세 (영상)",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-02-03-00",
        breadcrumb: "Newsroom > 아카이브 > 이미지",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-02-03-01",
        breadcrumb: "Newsroom > 아카이브 > 이미지 > 아카이브 상세 (이미지)",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-02-04-00",
        breadcrumb: "Newsroom > 아카이브 > CI/BI",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CTT-01-00-00-00",
        breadcrumb: "Contact",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CTT-01-01-00-00",
        breadcrumb: "Contact > 제보채널",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CTT-01-02-00-00",
        breadcrumb: "Contact > 오시는길",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
    ],
  },
  {
    category: "ENG",
    title: "사용자(ENG)",
    elem: [
      {
        id: "F-MAI-01-00-00-00",
        breadcrumb: "MAIN",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ABO-01-00-00-00",
        breadcrumb: "Misto",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ABO-01-01-00-00",
        breadcrumb: "Misto > We are Misto",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ABO-01-02-00-00",
        breadcrumb: "Misto > History",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-COM-01-03-00-00",
        breadcrumb: "Misto > Brand",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-COM-01-04-00-00",
        breadcrumb: "Misto > CI/BI",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-00-00-00",
        breadcrumb: "Investors",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-01-00-00",
        breadcrumb: "Investors > Financial Information",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-01-01-00",
        breadcrumb:
          "Investors > Financial Information > Consolidated Balance Sheet",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-01-02-00",
        breadcrumb:
          "Investors > Financial Information > Consolidated Income Statement",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-02-00-00",
        breadcrumb: "Investors > Disclosure",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-03-00-00",
        breadcrumb: "Investors > Shareholders' Meeting",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-03-01-00",
        breadcrumb:
          "Investors > Shareholders' Meeting > The 35th General Shareholders' Meeting",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-03-02-00",
        breadcrumb:
          "Investors > Shareholders' Meeting > Past General Shareholders' Meeting",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-04-00-00",
        breadcrumb: "Investors > Shareholder Return",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-05-00-00",
        breadcrumb: "Investors > IR Board",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-05-01-00",
        breadcrumb: "Investors > IR Board > 2020",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-05-02-00",
        breadcrumb: "Investors > IR Board > 2021",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-05-03-00",
        breadcrumb: "Investors > IR Board > 2022",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-05-04-00",
        breadcrumb: "Investors > IR Board > 2023",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-05-05-00",
        breadcrumb: "Investors > IR Board > 2024",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-06-00-00",
        breadcrumb: "Investors > Corporate Governance",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-INV-01-06-01-00",
        breadcrumb:
          "Investors > Corporate Governance > Outstanding Shares / Ownership Structure / List of Shareholders with the Ownership of 5% or above / Board of Directors",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ESG-01-00-00-00",
        breadcrumb: "Sustainability",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ESG-01-01-00-00",
        breadcrumb: "Sustainability > Sustainability Strategy",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ESG-01-02-00-00",
        breadcrumb: "Sustainability > ESG Ratings",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ESG-01-03-00-00",
        breadcrumb: "Sustainability > Sustainability Report",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-ESG-01-04-00-00",
        breadcrumb: "Sustainability > ESG Policy",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CAR-01-00-00-00",
        breadcrumb: "Careers",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CAR-01-01-00-00",
        breadcrumb: "Careers > Culture",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CAR-01-02-00-00",
        breadcrumb: "Careers > Employee Benefits",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-00-00-00",
        breadcrumb: "Newsroom",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-01-00-00",
        breadcrumb: "Newsroom > Press Release",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-01-01-00",
        breadcrumb: "Newsroom > Press Release > ALL",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-01-01-01",
        breadcrumb: "Newsroom > Press Release > ALL > Contents View",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-01-02-00",
        breadcrumb: "Newsroom > Press Release > Corporate",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-01-03-00",
        breadcrumb: "Newsroom > Press Release > Brand",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-01-04-00",
        breadcrumb: "Newsroom > Press Release > Sustainability",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-02-00-00",
        breadcrumb: "Newsroom > Archive",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-02-01-00",
        breadcrumb: "Newsroom > Archive > ALL",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-02-02-00",
        breadcrumb: "Newsroom > Archive > Video Clips",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-02-02-01",
        breadcrumb: "Newsroom > Archive > Video Clips > view",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-02-03-00",
        breadcrumb: "Newsroom > Archive > Image",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-02-03-01",
        breadcrumb: "Newsroom > Archive > Image > view",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-MED-01-02-04-00",
        breadcrumb: "Newsroom > Archive > CI/BI",
        type: "TAB",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CTT-01-00-00-00",
        breadcrumb: "Contact",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CTT-01-01-00-00",
        breadcrumb: "Contact > Hotline",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
      {
        id: "F-CTT-01-02-00-00",
        breadcrumb: "Contact > IR Contact",
        type: "page",
        design: "대기", //"대기 | 진행중 | 완료 | 없음"
        designDate: "2025-01-00",
        designAnchor: "",
        address: "/",
        pubAddress: "./pages/service/",
        complete: "대기", //"대기 | 진행중 | 완료"
        completeDate: "2025-01-00",
        etc: [""],
      },
    ],
  },
  {
    category: "common",
    title: "공통",
    elem: [],
  },
];
