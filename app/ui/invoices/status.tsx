import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: 'awaiting' | 'fulfilled' }) {

  const showClockIcon = status === 'awaiting' || status === 'fulfilled'
  return (
    <span
      className={clsx(
        'text-m inline-flex items-center rounded-full px-2 py-1',
        {
          'bg-red-600 text-white': status === 'awaiting',
          'bg-lime-400 text-sky-700': status === 'fulfilled',
        },
      )}
    >
      {
        showClockIcon ? (
          <>
            { status === 'awaiting' ? 'Awaitining' : 'Fulfilled' }
            <ClockIcon className={`ml-1 w-5 ${status === 'awaiting' ? 'text-white' : 'text-sky-700' }`} />
          </>
        ) : null
      }
    </span>
  );
}
