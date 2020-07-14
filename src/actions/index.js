/* 리덕스 액션 */

//**********************************
// 세션 추가
export const AddSection = 'ADD/SECTION';
export const ACTION_ADD_SECTION = {
  type: AddSection,
};

//**********************************
// 세션 삭제
export const DeleteSection = 'DELETE/SECTION';
export const ACTION_Delete_SECTION = (sectionId) => ({
  type: DeleteSection,
  sectionId,
});
//**********************************
// 섹션 이동
export const MoveSection = 'MOVE/SECTION';
export const ACTION_MOVE_SECTION = (dragId, targetIndex) => ({
  type: MoveSection,
  dragId,
  targetIndex,
});
//**********************************
// 섹션 복사
export const CopySection = 'COPY/SECTION';
export const ACTION_COPY_SECTION = (sectionId) => ({
  type: CopySection,
  sectionId,
});
//**********************************
// 섹션 제목 & 설명 추가
export const ChangeSectionText = 'CHANGE/SECTION/TEXT';
export const ACTION_CHANGE_SECTION_TEXT = (sectionId, target, text) => ({
  type: ChangeSectionText,
  sectionId,
  target,
  text,
});
//**********************************
// 섹션 단계 설정 (nextId = 2인경우 2로 넘어감)
export const ChangeSectionNextId = 'CHANGE/SECTION/NEXTID';
export const ACTION_CHANGE_SECTION_NEXTID = (sectionId, nextId) => ({
  type: ChangeSectionNextId,
  sectionId,
  nextId,
});
//**********************************
// 항목 추가
export const AddItem = 'ADD/ITEM';
export const ACTION_ADD_ITEM = (sectionId) => ({
  type: AddItem,
  sectionId,
});
//**********************************
// 항목 포커스
export const ChangeItemFocus = 'CHANGE/ITEM/FOCUS';
export const ACTION_CHANGE_ITEM_FOCUS = (sectionId, itemId) => ({
  type: ChangeItemFocus,
  sectionId,
  itemId,
});
//**********************************
// 항목 삭제
export const DeleteItem = 'DELETE/ITEM';
export const ACTION_DELETE_ITEM = {
  type: DeleteItem,
};
//**********************************
// 힝목 이동
export const MoveItem = 'MOVE/ITEM';
export const ACTION_MOVE_ITEM = (sectionId, itemId, targetIndex) => ({
  type: MoveItem,
  sectionId,
  itemId,
  targetIndex,
});
//**********************************
// 항목 복사
export const CopyItem = 'COPY/ITEM';
export const ACTION_COPY_ITEM = {
  type: CopyItem,
};
//**********************************
// 항목 제목 & 설명 텍스트 추가
export const ChangeItemText = 'CHANGE/ITEM/TEXT';
export const ACTION_CHANGE_ITEM_TEXT = (sectionId, itemId, target, text) => ({
  type: ChangeItemText,
  sectionId,
  itemId,
  target,
  text,
});
//**********************************
// 항목 설명 추가
export const ChangeToggleItemDescription = 'CHANGE/TOGGLE/ITEM/DESCRIPTION';
export const ACTION_CHANGE_TOGGLE_ITEM_DESCRIPTION = (sectionId, itemId) => ({
  type: ChangeToggleItemDescription,
  sectionId,
  itemId,
});
//**********************************
// 항목 아이템 타입 변경
export const ChangeItemType = 'CHANGE/ITEM/TYPE';
export const ACTION_CHANGE_ITEM_TYPE = (sectionId, itemId, itemType) => ({
  type: ChangeItemType,
  sectionId,
  itemId,
  itemType,
});
