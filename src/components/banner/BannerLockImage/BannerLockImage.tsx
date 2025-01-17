import React, { ReactElement } from 'react'
import classNames from 'classnames'

type BannerLockImageProps = {
  title: string
  titleProps?: JSX.IntrinsicElements['title']
  description: string
  descriptionProps?: JSX.IntrinsicElements['desc']
  svgProps?: JSX.IntrinsicElements['svg']
}

export const BannerLockImage = ({
  className,
  title,
  titleProps,
  description,
  descriptionProps,
  svgProps,
  ...spanProps
}: BannerLockImageProps & JSX.IntrinsicElements['span']): ReactElement => {
  const spanClasses = classNames('icon-lock', className)

  const { className: svgClassName, ...remainingSvgProps } = svgProps || {}
  const svgClasses = classNames('usa-banner__lock-image', svgClassName)

  return (
    <span className={spanClasses} {...spanProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="64"
        viewBox="0 0 52 64"
        className={svgClasses}
        role="img"
        aria-labelledby="banner-lock-title banner-lock-description"
        focusable="false"
        {...remainingSvgProps}>
        <title id="banner-lock-title" {...titleProps}>
          {title}
        </title>
        <desc id="banner-lock-description" {...descriptionProps}>
          {description}
        </desc>
        <path
          fill="#000000"
          fillRule="evenodd"
          d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
        />
      </svg>
    </span>
  )
}
