import React from 'react'

export const Title = (activeItem) => {
  return (
    <div className="main__info">
                    <div className="main__info_shortname">
                        <div>
                            <h4>Название проекта</h4>
                            <h5>Аббревиатура</h5>
                        </div>
                        <svg
                            className="main__project__icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_3_4487)">
                                <path
                                    d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                                    fill="white"
                                />
                            </g>
                        </svg>
                    </div>
                    <h3 className="main__info_title">{activeItem.fullName}</h3>
                </div>
  )
}
