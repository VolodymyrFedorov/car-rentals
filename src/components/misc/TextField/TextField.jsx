import { forwardRef } from 'react';
import { func, string, number, oneOfType, object } from 'prop-types';
import { VscClose as IconClose } from 'react-icons/vsc';
import { ClearBtn, InputWrapper, Input, Field } from './TextField.styled';

export const TextField = forwardRef(
  (
    {
      value,
      type,
      onChange,
      disabled,
      inputOverride: InputStyled,
      ...restProps
    },
    ref /* after props */
  ) => {
    const InputComp = InputStyled || Input;
    return (
      <Field disabled={disabled}>
        <InputWrapper>
          <InputComp
            ref={ref}
            type={type || 'text'}
            onChange={onChange}
            value={value}
            {...restProps}
          />

          {value && (
            <ClearBtn
              type="button"
              onClick={() => onChange({ target: { value: '' } })}
            >
              <IconClose size="80%" />
            </ClearBtn>
          )}
        </InputWrapper>
      </Field>
    );
  }
);

TextField.propTypes = {
  value: string,
  type: string,
  onChange: func,
  fieldStyle: object,
  inputStyle: object,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
};
