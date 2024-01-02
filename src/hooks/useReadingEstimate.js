import { useMemo } from 'react'
import { readingTime } from 'reading-time-estimator'

export function useReadingEstimate(text) {
    return useMemo(() => {
        return readingTime(text).text
    }, [text])
}
