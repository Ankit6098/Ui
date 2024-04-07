import React from "react";
import styles from '../styles/card.module.scss'

export default function Card() {
  return (
    <div className={` ${styles.cardContainer} w-[400px] h-[510px] bg-white rounded-3xl flex flex-col items-center justify-center`}>
      <div className={` ${styles.cardUpperSection} flex items-center justify-between w-11/12 relative top-12`}>
        <div className="cardStatus flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            fill="none"
            viewBox="0 0 96 96"
            id="play-button"
          >
            <path
              stroke="#12182B"
              stroke-width="5"
              d="M63.5811 45.0586C65.2565 46.255 65.2565 48.745 63.5811 49.9414L43.2434 64.4644C41.2578 65.8823 38.5 64.4629 38.5 62.023L38.5 32.977C38.5 30.5371 41.2578 29.1177 43.2434 30.5356L63.5811 45.0586Z"
            ></path>
            <circle
              cx="47.5"
              cy="47.5"
              r="38.5"
              stroke="#12182B"
              stroke-width="5"
            ></circle>
          </svg>
          <p className="text-indigo-800 font-bold">Live</p>
        </div>
        <div className="cardId text-indigo-800 font-bold">#2323424</div>
      </div>
      <div className={` ${styles.cardButtonSection} p-4 flex flex-col items-center w-[95%]`}>
        <div className="relative p-4 pb-0 top-8">
          <svg
            width="285"
            height="155"
            viewBox="0 0 285 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120.769V125C0 141.569 13.4315 155 30 155H255C271.569 155 285 141.569 285 125V120.327C285 111.837 281.403 103.744 275.1 98.0561L175.013 7.72883C169.501 2.75384 162.339 0 154.914 0H135.655C128.482 0 121.546 2.57011 116.105 7.24439L10.4505 98.013C3.81658 103.712 0 112.023 0 120.769Z"
              fill="#DFE5F0"
            />
          </svg>

          <div className="flex justify-center flex-col items-center absolute top-16 left-[37%]">
            <p className="text-emerald-300 text-lg font-extrabold">UP</p>
            <p className="text-indigo-800 text-sm font-semibold">
              2.15x Payout
            </p>
          </div>
        </div>
        <div className={`${styles.cardInfo} border-4 border-pink-600 p-4 bg-white w-full rounded-xl`}>
          <div className="priceInfo text-indigo-300 mb-2 text-sm font-meduim">
            Last Price
          </div>
          <div className="price w-full flex justify-between items-center mb-4">
            <p className="text-pink-600 text-xl font-bold border-dashed border-b-2 border-pink-600">
              $228.2335
            </p>
            <button className="bg-pink-600 rounded-lg p-2 text-white">
              ↓ $-0.4141
            </button>
          </div>
          <div className="lockedPrice w-full flex justify-between text-sm font-semibold text-indigo-800">
            <p className="">Locked Price:</p>
            <p>$228.9473</p>
          </div>
          <div className="poolPrice w-full flex justify-between text-lg font-bold text-indigo-900">
            <p>Price Pool:</p>
            <p>8.5143 BNB</p>
          </div>
        </div>
        <div className="relative p-4 pt-0 bottom-8">
          <svg
            width="285"
            height="155"
            viewBox="0 0 285 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 34.2314V30C0 13.4315 13.4315 0 30 0H255C271.569 0 285 13.4314 285 30V34.6727C285 43.1629 281.403 51.2556 275.1 56.9439L175.013 147.271C169.501 152.246 162.339 155 154.914 155H135.655C128.482 155 121.546 152.43 116.105 147.756L10.4505 56.987C3.81658 51.2877 0 42.9773 0 34.2314Z"
              fill="#ED4A9E"
            />
          </svg>

          <div className="flex justify-center flex-col items-center absolute top-14 left-[37%]">
            <p>2.15x Payout</p>
            <p className="text-white text-lg font-extrabold">DOWN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
