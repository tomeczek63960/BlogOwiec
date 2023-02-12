import * as React from "react"
import { contactForm__group, contactForm__groupSecondary, contactForm__label, contactForm__input, contactForm__textarea, contactForm__inputError } from "@style/components/contact-form.module.scss"

const InputGroup: React.FC = ({isTextarea, type, label, id, name, placeholder, value, setValue, validation}: any) => {
  const onChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement
    let isValid = true
    if (validation) {
      isValid = validation(target.value)
    }
    setValue({
      value: target.value,
      isValid,
      touched: true
    })
  }
  return (
    <>
      {isTextarea ?
        <div className={contactForm__groupSecondary}>
          <label className={contactForm__label} htmlFor={id}>{label}</label>
          <textarea
            name={name}
            id={id}
            className={`${contactForm__textarea} ${!value.isValid && value.touched && contactForm__inputError}`}
            placeholder={placeholder}
            value={value.value}
            onChange={onChange}
          ></textarea>
        </div>
      :
        <div className={contactForm__group}>
          <label className={contactForm__label} htmlFor={id}>{label}</label>
          <input
            className={`${contactForm__input} ${!value.isValid && value.touched && contactForm__inputError}`}
            type={type}
            id={id}
            placeholder={placeholder}
            value={value.value}
            onChange={onChange}
          />
        </div>
      }
    </>
  )
}

export default InputGroup