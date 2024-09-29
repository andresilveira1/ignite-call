import { Box, styled, Text } from '@ignite-ui/react'

export const Container = styled(Box, {
  margin: '$6 auto 0',
  padding: 0,
  maxWidth: '100%',

  position: 'relative',
  display: 'grid',

  variants: {
    isTimePickerOpen: {
      true: {
        gridTemplateColumns: '1fr 280px',

        '@media(max-width: 900px)': {
          gridTemplateColumns: '1fr',
        },
      },
      false: {
        width: 540,
        gridTemplateColumns: '1fr',
      },
    },
  },
})

export const TimePicker = styled('div', {
  borderLeft: '1px solid $gray600',
  padding: '$6 $6 0',
  width: 280,

  position: 'absolute',
  overflowY: 'scroll',
  top: 0,
  bottom: 0,
  right: 0,
})

export const TimePickerHeader = styled(Text, {
  fontWeight: '$medium',

  span: {
    color: '$gray200',
  },
})

export const TimePickerList = styled('div', {
  marginTop: '$3',

  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$2',

  '@media (max-width: 900px)': {
    gridTemplateColumns: '2fr',
  },
})

export const TimePickerItem = styled('button', {
  border: 0,
  backgroundColor: '$gray600',
  borderRadius: '$sm',
  padding: '$2 0',

  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray100',

  cursor: 'pointer',

  '&:last-child': {
    marginBottom: '$6',
  },
  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },
  '&:not(:disabled):hover': {
    background: '$gray500',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})
