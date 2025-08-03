const Keyboard = () => {
  return (
    <div className="content-holder mx-auto flex w-full max-w-[88rem] items-center justify-center text-white">
      <div className="keyboard-holder p- mx-auto h-fit w-fit bg-zinc-800">
        <div className="row-1 mb-[2px] flex gap-[1.5px]">
          <div className="cursor-pointer rounded-[4px] p-[0.5px]">
            <div className="flex h-6 w-10 items-end justify-start rounded-[3.5px] bg-[#0A090D] pb-[2px] pl-[4px]">
              <div className="flex flex-col items-center justify-start text-[5px] text-white">
                esc
              </div>
            </div>
          </div>

          {/* F1 */}
          <div className="cursor-pointer rounded-[4px] p-[0.5px]">
            <div className="flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]">
              <div className="flex flex-col gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 4h.01" />
                  <path d="M20 12h.01" />
                  <path d="M12 20h.01" />
                  <path d="M4 12h.01" />
                  <path d="M17.657 6.343h.01" />
                  <path d="M17.657 17.657h.01" />
                  <path d="M6.343 17.657h.01" />
                  <path d="M6.343 6.343h.01" />
                </svg>
                <div className="flex flex-col items-center justify-start text-[5px] text-white">
                  F1
                </div>
              </div>
            </div>
          </div>

          {/* F2 */}
          <div className="cursor-pointer rounded-[4px] p-[0.5px]">
            <div className="flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]">
              <div className="flex flex-col gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
                <div className="flex flex-col items-center justify-start text-[5px] text-white">
                  F2
                </div>
              </div>
            </div>
          </div>

          {/* F3 */}
          <div className="cursor-pointer rounded-[4px] p-[0.5px]">
            <div className="flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]">
              <div className="flex flex-col gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                </svg>
                <div className="flex flex-col items-center justify-start text-[5px] text-white">
                  F3
                </div>
              </div>
            </div>
          </div>

          {/* F4 */}
          <div className="p-[0.5px ] cursor-pointer rounded-[4px]">
            <div className="flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]">
              <div className="flex flex-col gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m21 21-4.34-4.34" />
                  <circle cx="11" cy="11" r="8" />
                </svg>
                <div className="flex flex-col items-center justify-start text-[5px] text-white">
                  F4
                </div>
              </div>
            </div>
          </div>

          {/* F5 */}
          <div className="cursor-pointer rounded-[4px] p-[0.5px]">
            <div className="flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]">
              <div className="flex flex-col gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 19v3" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <rect x="9" y="2" width="6" height="13" rx="3" />
                </svg>
                <div className="flex flex-col items-center justify-start text-[5px] text-white">
                  F5
                </div>
              </div>
            </div>
          </div>

          {/* F6 */}
          <div className="cursor-pointer rounded-[4px] p-[0.5px]">
            <div className="flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]">
              <div className="flex flex-col gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                </svg>
                <div className="flex flex-col items-center justify-start text-[5px] text-white">
                  F6
                </div>
              </div>
            </div>
          </div>

          {/* F7 */}
          <div className="cursor-pointer rounded-[4px] p-[0.5px]">
            <div className="flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]">
              <div className="flex flex-col gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
                  <path d="M3 20V4" />
                </svg>
                <div className="flex flex-col items-center justify-start text-[5px] text-white">
                  F7
                </div>
              </div>
            </div>
          </div>

          {/* F8 */}
          <div className="cursor-pointer rounded-[4px] p-[0.5px]">
            <div className="flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]">
              <div className="flex flex-col gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 4v16" />
                  <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
                </svg>
                <div className="flex flex-col items-center justify-start text-[5px] text-white">
                  F8
                </div>
              </div>
            </div>
          </div>

          {/* F9 */}
          <div className="cursor-pointer rounded-[4px] p-[0.5px]">
            <div className="flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]">
              <div className="flex flex-col gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                  <line x1="22" x2="16" y1="9" y2="15" />
                  <line x1="16" x2="22" y1="9" y2="15" />
                </svg>
                <div className="flex flex-col items-center justify-start text-[5px] text-white">
                  F9
                </div>
              </div>
            </div>
          </div>

          {/* F10 */}
          <div className="cursor-pointer rounded-[4px] p-[0.5px]">
            <div className="flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]">
              <div className="flex flex-col gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                  <path d="M16 9a5 5 0 0 1 0 6" />
                </svg>
                <div className="flex flex-col items-center justify-start text-[5px] text-white">
                  F10
                </div>
              </div>
            </div>
          </div>

          {/* F11 */}
          <div className="cursor-pointer rounded-[4px] p-[0.5px]">
            <div className="flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]">
              <div className="flex flex-col gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                  <path d="M16 9a5 5 0 0 1 0 6" />
                  <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
                </svg>
                <div className="flex flex-col items-center justify-start text-[5px] text-white">
                  F11
                </div>
              </div>
            </div>
          </div>

          {/* F12 */}
          <div className="cursor-pointer rounded-[4px] p-[0.5px]">
            <div className="flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]">
              <div className="flex flex-col gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon points="11 5,6 9,2 9,2 15,6 15,11 19,11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
                <div className="flex flex-col items-center justify-start text-[5px] text-white">
                  F12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
