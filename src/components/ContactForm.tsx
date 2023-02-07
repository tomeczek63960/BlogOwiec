import * as React from "react"
import { contactForm, contactForm__content, contactForm__text, contactForm__form, contactForm__fields, contactForm__group, contactForm__groupSecondary, contactForm__label, contactForm__input, contactForm__textarea, contactForm__button } from '@style/components/contact-form.module.scss';
import { container } from '@style/components/container.module.scss';
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ContactForm: React.FC = ({content}: any) => {
  return (
    <section className={contactForm}>
      <div className={container}>
        <div className={contactForm__content}>
          <div className={contactForm__text}>
            {renderRichText(content.content)}
          </div>
          <form className={contactForm__form}>
            <div className={contactForm__fields}>
              <div className={contactForm__group}>
                <label className={contactForm__label} htmlFor="name">First name</label>
                <input className={contactForm__input} type="text" id="name" placeholder="John"/>
              </div>
              <div className={contactForm__group}>
                <label className={contactForm__label} htmlFor="lastName">Last name</label>
                <input className={contactForm__input} type="text" id="lastName" placeholder="John"/>
              </div>
            </div>
            <div className={contactForm__fields}>
              <div className={contactForm__group}>
                <label className={contactForm__label} htmlFor="email">Email</label>
                <input className={contactForm__input} type="email" id="email" placeholder="John"/>
              </div>
              <div className={contactForm__group}>
                <label className={contactForm__label} htmlFor="phone">Phone</label>
                <input className={contactForm__input} type="text" id="phone" placeholder="John"/>
              </div>
            </div>
            <div className={contactForm__fields}>
              <div className={contactForm__groupSecondary}>
                <label className={contactForm__label} htmlFor="message">Message</label>
                <textarea name="message" id="message" className={contactForm__textarea} placeholder="Write something to us :)"></textarea>
              </div>
            </div>
            <button className={contactForm__button}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm;