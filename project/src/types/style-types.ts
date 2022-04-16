export type ThemeParameters = {
  theme: {
    font: {base: string},
    color: {
      whisper: string,
      nero: string,
      white: string,
      black: string,
    }
  }
}

export type BtnStyleType = {
  isActive?: boolean,
}

export type LinkHeaderType = {
  $isActiveLink?: boolean,
}
