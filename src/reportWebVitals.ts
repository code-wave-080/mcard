import type { Metric } from 'web-vitals'

type ReportHandler = (metric: Metric) => void

const reportWebVitals = async (onPerfEntry?: ReportHandler) => {
    if (!onPerfEntry) {
        return;
    }

    const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals')

    onCLS(onPerfEntry)
    onFCP(onPerfEntry)
    onLCP(onPerfEntry)
    onTTFB(onPerfEntry)
    onINP(onPerfEntry)
}

export default reportWebVitals