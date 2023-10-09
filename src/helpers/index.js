export const isStr = v => typeof v === 'string';
export const isNum = v => !isNaN(v - parseFloat(v));
export const isInt = v => Number.isInteger(v);

export const calcCSSValue = v => (isNum(v) ? `${v}px` : v);

export const isVScrollBarVisible = () => {
  const { body } = document;
  const curBodyClientWidth = body.clientWidth;
  const curBodyOverflow = body.style.overflow;

  body.style.overflow = 'hidden';
  const res = curBodyClientWidth !== body.clientWidth;
  body.style.overflow = curBodyOverflow;

  return res;
};

export const splitNumIntoTriads = (v, splitter = ' ') => {
  const str = String(v).replace(/\s/g, '');
  if (!/^\d+(\.\d+)?$/.test(str)) return '';

  const part = str.split('.');
  const headLen = part[0].length % 3;

  part[0] = part[0].replace(
    RegExp(`(${headLen ? `^\\d{${headLen}}|` : ``}\\d{3})(?!$)`, `g`),
    `$1${splitter}`
  );

  return part.join('.');
};

export const isEmptyFilter = data => {
  return !Object.values(data).some(v => v !== '');
};

export const isModalOpen = (modalRootSelector = '#root-modal') => {
  const rootModal = document.querySelector(modalRootSelector);
  return !!rootModal?.children.length;
};
