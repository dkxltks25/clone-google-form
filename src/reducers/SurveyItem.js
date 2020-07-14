/*
    설문지 항목에 대한 리듀스 입니다.
*/

import {
  AddSection,
  DeleteSection,
  MoveSection,
  CopySection,
  ChangeSectionText,
  ChangeSectionNextId,
  AddItem,
  ChangeItemFocus,
  DeleteItem,
  MoveItem,
  ChangeItemText,
  ChangeToggleItemDescription,
  ChangeItemType,
  CopyItem,
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
    title: '',
    description: '',
    items: [createItem()],
  };
}
//item
function createItem() {
  return {
    id: initialId.item,
    itemType: 0,
    title: '',
    description: '',
    isFocus: true,
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
  };
}

/// #region 기능
// 섹션 추가
function addSection(state) {
  initialId.plusId('section');
  return [...state, createState()];
}

// 섹션 삭제
function deleteSection(state, sectionId) {
  return state.filter((section) => section.sectionId !== sectionId);
}
// 섹션 이동
// 섹션 복사
function copySection(state, sectionId) {
  initialId.plusId('section');
  return [].concat(
    ...state.map((section) =>
      section.sectionId === sectionId
        ? [{ ...section }, { ...section, sectionId: initialId.section }]
        : section,
    ),
  );
}
// 섹션 제목 & 설명 추가
function changeSectionText(state, sectionId, target, text) {
  return state.map((section) =>
    section.sectionId === sectionId ? { ...section, [target]: text } : section,
  );
}
// 섹션 다음단계 설정하기
function changeSectionNextId(state, sectionId, nextId) {
  return state.map((section) =>
    section.sectionId === sectionId
      ? {
          ...section,
          nextId,
        }
      : section,
  );
}
// 설문지 항목추가
function addItem(state, sectionId) {
  initialId.plusId('item');
  return state.map((section) =>
    section.sectionId === sectionId
      ? { ...section, items: [...section.items, createItem()] }
      : section,
  );
}

// 포커스 취소
function closeFocus(items) {
  return items.map((item) =>
    item.isFocus ? { ...item, isFocus: false } : item,
  );
}
// 포커스 열기
function openFocus(items, itemId) {
  return items.map((item) =>
    item.id === itemId ? { ...item, isFocus: true } : item,
  );
}
// 포커스 변경
function changeItemFocus(state, sectionId, itemId) {
  return state
    .map((section) => ({
      ...section,
      items: closeFocus(section.items),
    }))
    .map((section) =>
      section.sectionId === sectionId
        ? { ...section, items: openFocus(section.items, itemId) }
        : section,
    );
}

/// #endregion
const initialState = [createState()];
function SurveyItem(state = initialState, action) {
  switch (action.type) {
    case AddSection:
      return addSection(state);
    case DeleteSection:
      return deleteSection(state, action.sectionId);
    case MoveSection:
      return state;
    case CopySection:
      return copySection(state, action.sectionId);
    case ChangeSectionText:
      return changeSectionText(
        state,
        action.sectionId,
        action.target,
        action.text,
      );
    case ChangeSectionNextId:
      return changeSectionNextId(state, action.sectionId, action.nextId);
    case AddItem:
      return addItem(state, action.sectionId);
    case ChangeItemFocus:
      return changeItemFocus(state,action.sectionId,action.itemId);
    case DeleteItem:
      return state;
    case MoveItem:
      return state;
    case CopyItem:
      return state;
    case ChangeItemText:
      return state;
    case ChangeToggleItemDescription:
      return state;
    case ChangeItemType:
      return state;
    default:
      return state;
  }
}

export default SurveyItem;
