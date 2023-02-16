import * as React from "react"
import { contactForm, contactForm__success, contactForm__content, contactForm__text, contactForm__form, contactForm__fields, contactForm__group, contactForm__groupSecondary, contactForm__label, contactForm__input, contactForm__textarea, contactForm__button } from "@style/components/contact-form.module.scss"
import { container } from "@style/components/container.module.scss"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import InputGroup from '@components/InputGroup'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { TContactFormProps, TFormInitialValue } from "../types"

export const emailValidation = (email: string):boolean => {
  if (email === "") return false
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const validate = regex.test(email)
  return validate
}

const requiredValidation = (value: string):boolean => !!value.length

const inputInitialValue = {
  value: "",
  isValid: false,
  touched: false
}

const ContactForm: React.FC<TContactFormProps> = ({content}) => {
  const [firstName, setFirstName] = React.useState(inputInitialValue)
  const [lastName, setLastName] = React.useState(inputInitialValue)
  const [email, setEmail] = React.useState(inputInitialValue)
  const [phone, setPhone] = React.useState(inputInitialValue)
  const [message, setMessage] = React.useState(inputInitialValue)
  const [success, setSuccess] = React.useState(false)
  const [animationParent] = useAutoAnimate()
  const {t} = useTranslation();

  const resetForm = () => {
    setFirstName(inputInitialValue)
    setLastName(inputInitialValue)
    setEmail(inputInitialValue)
    setPhone(inputInitialValue)
    setMessage(inputInitialValue)
  }
  const validateInput = (obj: TFormInitialValue, setObj: Function): boolean => {
    setObj((prevObj: TFormInitialValue) => ({
        ...prevObj,
        touched: true
      })
    )
    return obj.isValid
  }
  const checkValidation = (): boolean => {
    const isFirstNameValid = validateInput(firstName, setFirstName)
    const isLastNameValid = validateInput(lastName, setLastName)
    const isEmailValid = validateInput(email, setEmail)
    const isPhoneValid = validateInput(phone, setPhone)
    const isMessageValid = validateInput(message, setMessage)

    return isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isMessageValid
  }

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const isFormValid = checkValidation()

    if(isFormValid) {
      resetForm()
      setSuccess(true)
      setTimeout(() => setSuccess(false), 4000)
    }
  }
  return (
    <section className={contactForm}>
      <div className={container}>
        <div className={contactForm__content}>
          <div className={contactForm__text}>
            {renderRichText(content.content)}
          </div>
          <form className={contactForm__form} onSubmit={submit} noValidate>
            <div className={contactForm__fields}>
              <InputGroup
                name="name"
                id="name"
                label={t('form_firstname_label')}
                value={firstName}
                setValue={setFirstName}
                validation={requiredValidation}
                type="text"
                placeholder={t('form_firstname_placeholder')}
              />
              <InputGroup
                name="lastName"
                id="lastName"
                label={t('form_lastname_label')}
                value={lastName}
                setValue={setLastName}
                validation={requiredValidation}
                type="text"
                placeholder={t('form_lastname_placeholder')}
              />
            </div>
            <div className={contactForm__fields}>
              <InputGroup
                name="email"
                id="email"
                label={t('form_email_label')}
                value={email}
                setValue={setEmail}
                validation={emailValidation}
                type="email"
                placeholder={t('form_email_placeholder')}
              />
              <InputGroup
                name="phone"
                id="phone"
                label={t('form_phone_label')}
                value={phone}
                setValue={setPhone}
                validation={requiredValidation}
                type="text"
                placeholder={t('form_phone_placeholder')}
              />
            </div>
            <div className={contactForm__fields}>
              <InputGroup
                isTextarea={true}
                name="message"
                id="message"
                label={t('form_message_label')}
                value={message}
                setValue={setMessage}
                validation={requiredValidation}
                placeholder={t('form_message_placeholder')}
              />
            </div>
            <button className={contactForm__button}>{t('form_submit')}</button>
            <div ref={animationParent}>{ success && <p className={contactForm__success}>{t('form_submit_success')}</p>}</div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm