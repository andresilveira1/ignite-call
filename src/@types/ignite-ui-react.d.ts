import '@ignite-ui/react'

declare module '@ignite-ui/react' {
  export interface TextInputProps {
    crossOrigin?: string
    onPointerEnterCapture?: (
      event: React.PointerEvent<HTMLInputElement>,
    ) => void
    onPointerLeaveCapture?: (
      event: React.PointerEvent<HTMLInputElement>,
    ) => void
  }
}
