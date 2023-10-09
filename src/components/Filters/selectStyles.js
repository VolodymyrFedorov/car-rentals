import { theme } from 'styles';

const {
  colors,
  transition,
  breakpoints: { tablet, desktop },
} = theme;

const mq = {
  tablet: `@media screen and (min-width: ${tablet})`,
  desktop: `@media screen and (min-width: ${desktop})`,
};

export const components = {
  IndicatorSeparator: () => null,
};

const fontParams = {
  color: colors.textMain,
  fontFamily: 'inherit',
  fontSize: '15px',
  fontWeight: 500,
  lineHeight: '1.1',
};

const controlParams = {
  width: '100%',
  height: '48px',
  [mq.tablet]: {
    width: '250px',
  },
  ...fontParams,
  color: colors.textMain,
  border: 'none',
  borderRadius: '14px',
  backgroundColor: colors.grayLighter,
  boxShadow: 'none',

  transitionDuration: transition.duration,
  transitionTimingFunction: transition.func,
  transitionProperty: 'background-color',
};

export const stylesBrand = {
  control: (base, state) => ({
    ...base,
    ...controlParams,
    backgroundColor: state.isFocused ? colors.blue50 : colors.grayLighter,
  }),

  menu: base => {
    return {
      ...base,
      borderRadius: '14px',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.25,
      overflow: 'hidden',
    };
  },

  input: base => {
    return {
      ...base,
      color: colors.textMain,
    };
  },

  valueContainer: base => {
    return {
      ...base,
      paddingLeft: '15px',
      margin: 0,
    };
  },

  option: (base, state) => {
    return {
      ...base,
      color: state.isFocused ? colors.textMain : colors.gray,
      backgroundColor: state.isFocused && colors.grayLighter,
      ':active': { backgroundColor: colors.blue100 },
      cursor: 'pointer',
    };
  },

  indicatorsContainer: base => {
    return {
      ...base,
      cursor: 'pointer',
    };
  },
};

export const stylesPrice = {
  ...stylesBrand,
  control: (base, state) => ({
    ...base,
    ...controlParams,
    [mq.tablet]: {
      width: '150px',
    },
    backgroundColor: state.isFocused ? colors.blue50 : colors.grayLighter,
  }),
};
