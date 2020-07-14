/*
    설문지 항목에 대한 리듀스 입니다.
*/
const initialId = {
  section: 0,
  item: 0,
  question: 0,
  row: 0,
  column: 0,
};
const InitalState = [
  {
    sectionId: 1,
    nextId: 0,
    items: [
      {
        id: 1,
        itemType: 0,
        title: '',
        description: '',
        focus: true,
        isEtc: false, // 기타 옵션 있는지 없는지
        step: {
          startValue: 0,
          startLabel: '',
          finishValue: 5,
          finishLabel: '',
        },
        questions: [
          {
            id: 1,
            title: '',
          },
        ],
        grid: {
          row: [],
          column: [],
        },
      },
    ],
  },
];

const SurveyItem = (state = InitalState, action) => {
  switch (action.type) {
    case 1:
      return state;
    default:
      return state;
  }
};

export default SurveyItem;
