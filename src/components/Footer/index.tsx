import * as React from "react"
import { footer, footer__content, footer__col, footer__socials } from "./style.module.scss"
import { container } from "@style/container.module.scss"
import TransitionLink from "@components/TransitionLink"
import type { TFooter, TFooterCol } from "../../types"

const Footer: React.FC<TFooter> = (props) => {
  if (!props?.footer) return <></>
  const {firstColTitle, firstColItems, secondColTitle, secondColItems, thirdColTitle, twitterUrl, facebookUrl, instagramUrl} = props.footer
  return (
    <footer className={footer}>
      <div className={container}>
        <div className={footer__content}>
          <div className={footer__col}>
            <h4>{firstColTitle}</h4>
            <ul>
              {firstColItems?.map((colItem: TFooterCol) => 
                <li key={colItem.id}>
                  <TransitionLink
                    direction="right"
                    url={colItem.url}
                  >
                    {colItem.title}
                  </TransitionLink>
                </li>
              )}
            </ul>
          </div>
          <div className={footer__col}>
            <h4>{secondColTitle}</h4>
            <ul>
              {secondColItems?.map((colItem: TFooterCol) => 
                <li key={colItem.id}>
                  <TransitionLink
                    direction="right"
                    url={colItem.url}
                  >
                    {colItem.title}
                  </TransitionLink>
                </li>
              )}
            </ul>
          </div>
          <div className={footer__col}>
            <h4>{thirdColTitle}</h4>
            <div className={footer__socials}>
              <a href={instagramUrl} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="16" height="16"
                  viewBox="0 0 40 40">
                  <path fill="#8585cc" d="M30.5,38.5c4.418,0,8-3.582,8-8v-21c0-4.418-3.582-8-8-8h-21c-4.418,0-8,3.582-8,8v21 c0,4.418,3.582,8,8,8H30.5z"></path><path fill="#8d8dd8" d="M3.4,4.331C2.217,5.726,1.5,7.528,1.5,9.5v21c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8v-21 c0-0.503-0.052-0.992-0.141-1.469C32.135,4.22,24.832,2,17,2C12.229,2,7.657,2.832,3.4,4.331z"></path><path fill="#bd82f4" d="M1.505,9.404C1.504,9.437,1.5,9.468,1.5,9.5v21c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8V12.897 C32.439,8.56,25.021,6,17,6C11.465,6,6.22,7.226,1.505,9.404z"></path><path fill="#ed73f4" d="M1.5,13.88V30.5c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8V17.981C32.724,13.013,25.217,10,17,10 C11.394,10,6.124,11.414,1.5,13.88z"></path><path fill="#f97dcd" d="M17,14c-5.705,0-11.014,1.664-15.5,4.509V30.5c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8v-6.935 C33.194,17.698,25.534,14,17,14z"></path><path fill="#fc9c95" d="M17,18c-5.861,0-11.237,2.033-15.5,5.411V30.5c0,4.418,3.582,8,8,8h21c4.418,0,8-3.582,8-8v-0.238 C34.143,22.925,26.152,18,17,18z"></path><path fill="#ffac99" d="M17,22c-6.145,0-11.66,2.651-15.5,6.859V30.5c0,4.418,3.582,8,8,8h21c2.465,0,4.668-1.117,6.136-2.87 C33.648,27.674,25.999,22,17,22z"></path><path fill="#ffc49c" d="M30.5,38.5c0.957,0,1.87-0.177,2.721-0.485C31.087,31.065,24.649,26,17,26 c-6.186,0-11.592,3.309-14.566,8.248C3.778,36.777,6.437,38.5,9.5,38.5H30.5z"></path><path fill="#ffde8d" d="M17,30c-5.137,0-9.573,2.984-11.684,7.309C6.535,38.06,7.964,38.5,9.5,38.5h19.683 C27.35,33.542,22.595,30,17,30z"></path><path fill="#fff69f" d="M17,34c-3.319,0-6.193,1.813-7.753,4.487C9.332,38.49,9.415,38.5,9.5,38.5h15.26 C23.203,35.818,20.324,34,17,34z"></path><path fill="#8b75a1" d="M31,2c3.86,0,7,3.14,7,7v22c0,3.86-3.14,7-7,7H9c-3.86,0-7-3.14-7-7V9c0-3.86,3.14-7,7-7H31 M31,1H9 C4.582,1,1,4.582,1,9v22c0,4.418,3.582,8,8,8h22c4.418,0,8-3.582,8-8V9C39,4.582,35.418,1,31,1L31,1z"></path><path fill="#fff" d="M27.5 11A1.5 1.5 0 1 0 27.5 14A1.5 1.5 0 1 0 27.5 11Z"></path><path fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" d="M20 14A6 6 0 1 0 20 26A6 6 0 1 0 20 14Z"></path><path fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" d="M33,14.5c0-4.142-3.358-7.5-7.5-7.5 c-2.176,0-8.824,0-11,0C10.358,7,7,10.358,7,14.5c0,2.176,0,8.824,0,11c0,4.142,3.358,7.5,7.5,7.5c2.176,0,8.824,0,11,0 c4.142,0,7.5-3.358,7.5-7.5C33,23.324,33,16.676,33,14.5z"></path>
                </svg>
              </a>
              <a href={facebookUrl} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="48" height="48"
                  viewBox="0 0 48 48">
                  <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                </svg>
              </a>
              <a href={twitterUrl} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="48" height="48"
                  viewBox="0 0 48 48">
                  <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer