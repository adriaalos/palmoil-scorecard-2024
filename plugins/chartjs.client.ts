import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, RadialLinearScale, RadarController, PointElement, LineElement, Filler } from 'chart.js'
export default defineNuxtPlugin(() => {
    Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, RadarController, PointElement, LineElement, Filler)
})