/* 리덕스 액션 */
/* 섹션.. */

// 세션 추가
export const AddSection = 'ADD/SECTION';
export const ACTION_ADD_SECTION = {
  type: AddSection,
};

// 세션 삭제
export const RemoveSection = 'REMOVE/SECTION';
export const ACTION_REMOVE_SECTION = (sectionId) => ({
  type: RemoveSection,
  sectionId,
});
// 섹션 이동
export const MoveSection = 'MOVE/SECTION';
export const ACTION_MOVE_SECTION = (dragId, targetIndex) => ({
  type: MoveSection,
  dragId,
  targetIndex,
});
// 섹션 복사
export const CopySection = 'COPY/SECTION';
export const ACTION_COPY_SECTION = (sectionId) => ({
  type: CopySection,
  sectionId,
});
// 섹션 제목 & 설명 추가
export const ChangeSectionText = 'CHANGE/SECTION/TEXT';
export const ACTION_CHANGE_SECTION_TEXT = (sectionId, target) => ({
  type: ChangeSectionText,
  sectionId,
  target
});
