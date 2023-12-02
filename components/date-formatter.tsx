import { format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const d = new Date(Number(dateString) * 1000);
  return <time dateTime={dateString}>{format(d, 'LLLL	d, yyyy')}</time>
}

export default DateFormatter
