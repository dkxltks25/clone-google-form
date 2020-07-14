/*
    설문지 항목에 대한 리듀스 입니다.
*/

import {
  AddSection,
  RemoveSection,
  MoveSection,
  CopySection,
  ChangeSectionText,
} from '../actions';

const initialId = {
  section: 1,
  item: 1,
  question: 1,
  row: 0,
  column: 0,
  plusId(target) {
    this[target] += 1;
  },
};

// state 생성
function createState() {
  return {
    sectionId: initialId.section,
    nextId: 0,
    items: [
      {
        id: initialId.item,
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
            id: initialId.question,
            title: '',
          },
        ],
        grid: {
          row: [],
          column: [],
        },
      },
    ],
  };
}

/// #region 기능
// 섹션 추가
function addSection(state) {
  initialId.plusId('section');
  return [...state, createState()];
}

// 섹션 삭제
function removeSection(state, sectionId) {
  return state.filter((section) => section.sectionId !== sectionId);
}
/// #endregion
const initialState = [createState()];
function SurveyItem(state = initialState, action) {
  switch (action.type) {
    case AddSection:
      return addSection(state);
    case RemoveSection:
      return removeSection(state, action.sectionId);
    case MoveSection:
      return state;
    case CopySection:
      return state;
    case ChangeSectionText:
      return state;
    default:
      return state;
  }
}

export default SurveyItem;
