import { ColorShades } from './types'

export const colorsToken: Record<string, ColorShades> = {
  primary: {
    10: '#E3F2FD',
    20: '#BBDEFB',
    30: '#90CAF9',
    40: '#005EEB',
    50: '#2563eb',
    // default: '#2196F3',
  },
  secondary: {
    50: '#EC407A', // link yoki ikkinchi action tugmalar uchun
  },
  success: {
    10: '#E8F5E9',
    20: '#C8E6C9',
    30: '#A5D6A7',
    40: '#81C784',
    50: '#66BB6A',
    // default: '#4CAF50',
  },
  warning: {
    10: '#FFF3E0',
    20: '#FFE0B2',
    30: '#FFCC80',
    40: '#FFB74D',
    50: '#FFA726',
    // default: '#FF9800',
  },
  error: {
    10: '#FFEBEE',
    20: '#FFCDD2',
    30: '#EF9A9A',
    40: '#E57373',
    50: '#EF5350',
    // default: '#F44336',
  },
  purple: {
    10: '#F3E5F5',
    20: '#E1BEE7',
    30: '#CE93D8',
    40: '#BA68C8',
    50: '#AB47BC',
    // default: '#9C27B0',
  },
  gray: {
    10: '#F9FAFB',
    20: '#F3F4F6',
    30: '#E5E7EB',
    40: '#cbd5e1',
    50: '#9CA3AF',
  },
  dark: {
    50: '#334D6E',
  },
}
